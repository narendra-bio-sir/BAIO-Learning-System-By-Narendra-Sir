const { onSchedule } = require('firebase-functions/v2/scheduler');
const { logger } = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

// Only re-nudge a student about the same topic if it's been at least this
// many days since the last nudge, or their accuracy has gotten meaningfully
// worse since then — keeps this to an occasional, focused nudge rather than
// a daily nag.
const RENOTIFY_AFTER_DAYS = 3;
const RENOTIFY_IF_ACCURACY_DROPS_BY = 5;
const WEAK_ACCURACY_THRESHOLD = 50; // percent
const MIN_ATTEMPTS = 3;

function daysBetween(a, b) {
  return Math.abs(a.toMillis() - b.toMillis()) / (1000 * 60 * 60 * 24);
}

async function sendToStudent(studentId, topic) {
  const tokensSnap = await db.collection('students').doc(studentId).collection('pushTokens').get();
  if (tokensSnap.empty) return { sent: 0 };

  const title = 'A quick nudge from BAIO';
  const body = `You're at ${topic.accuracy}% on ${topic.topicTitle} (${topic.chapterName}). A short revision now could help a lot — tap to jump straight to it.`;
  const url = topic.deepLink || 'index.html';

  const tokens = tokensSnap.docs.map(d => d.id);
  const message = {
    notification: { title, body },
    data: { url, tag: `weak-${topic.chapterId}-${topic.topicId}` },
    webpush: {
      fcmOptions: { link: url },
      notification: { icon: 'icon-192.png', badge: 'icon-192.png', tag: `weak-${topic.chapterId}-${topic.topicId}` }
    },
    tokens
  };

  const res = await admin.messaging().sendEachForMulticast(message);

  // Drop any tokens FCM says are no longer valid (uninstalled, permission
  // revoked, etc.) so future runs don't keep retrying them.
  const deletions = [];
  res.responses.forEach((r, i) => {
    if (!r.success && ['messaging/registration-token-not-registered', 'messaging/invalid-registration-token'].includes(r.error && r.error.code)) {
      deletions.push(tokensSnap.docs[i].ref.delete());
    }
  });
  await Promise.all(deletions);

  return { sent: res.successCount };
}

exports.dailyWeakTopicNudge = onSchedule(
  { schedule: '0 18 * * *', timeZone: 'Asia/Kolkata', region: 'asia-south1' },
  async () => {
    const weakSnap = await db.collectionGroup('topicStats')
      .where('accuracy', '<', WEAK_ACCURACY_THRESHOLD)
      .where('attempts', '>=', MIN_ATTEMPTS)
      .get();

    if (weakSnap.empty) {
      logger.info('No weak topics found across any student.');
      return;
    }

    // Pick the single weakest topic per student, so each student gets at
    // most one focused nudge per run rather than a flood.
    const weakestByStudent = new Map();
    weakSnap.forEach(doc => {
      const data = doc.data();
      const studentId = doc.ref.parent.parent.id;
      const current = weakestByStudent.get(studentId);
      if (!current || data.accuracy < current.accuracy) {
        weakestByStudent.set(studentId, { ...data, studentId, statRef: doc.ref });
      }
    });

    let notifiedCount = 0;
    for (const [studentId, topic] of weakestByStudent) {
      const notifKey = `${topic.chapterId}_${topic.topicId}`;
      const notifRef = db.collection('students').doc(studentId).collection('notifiedTopics').doc(notifKey);
      const notifSnap = await notifRef.get();

      if (notifSnap.exists) {
        const prev = notifSnap.data();
        const tooSoon = prev.lastNotifiedAt && daysBetween(prev.lastNotifiedAt, admin.firestore.Timestamp.now()) < RENOTIFY_AFTER_DAYS;
        const droppedEnough = typeof prev.lastAccuracyAtNotify === 'number' && (prev.lastAccuracyAtNotify - topic.accuracy) >= RENOTIFY_IF_ACCURACY_DROPS_BY;
        if (tooSoon && !droppedEnough) continue;
      }

      try {
        const result = await sendToStudent(studentId, topic);
        if (result.sent > 0) {
          notifiedCount++;
          await notifRef.set({
            lastNotifiedAt: admin.firestore.Timestamp.now(),
            lastAccuracyAtNotify: topic.accuracy,
            topicId: topic.topicId,
            chapterId: topic.chapterId
          });
        }
      } catch (err) {
        logger.error(`Failed to notify student ${studentId}:`, err);
      }
    }

    logger.info(`Weak-topic nudge run complete: ${notifiedCount} student(s) notified out of ${weakestByStudent.size} with a weak topic.`);
  }
);

// Daily Bio Challenge reminder: every day at 7 pm IST, a push to every device that
// tapped "Remind me at 7 pm" on the home screen (stored in reminderTokens/{token}).
const REMINDER_MESSAGES = [
  'Your 5 Biology questions for today are ready. Keep your streak alive! 🔥',
  "3 minutes, 5 questions. Don't break your streak today! 🧬",
  "Today's Daily Bio Challenge is live. Can you score 5/5? 🎯",
  'A little Biology every day = big marks in the board exam. Play today\'s 5! 📚'
];
exports.dailyChallengeReminder = onSchedule(
  { schedule: '0 19 * * *', timeZone: 'Asia/Kolkata', region: 'asia-south1' },
  async () => {
    const snap = await db.collection('reminderTokens').get();
    if (snap.empty) { logger.info('Daily reminder: no subscribers.'); return; }
    const tokens = snap.docs.map(d => d.id);
    const body = REMINDER_MESSAGES[new Date().getDate() % REMINDER_MESSAGES.length];
    let sent = 0, removed = 0;
    for (let i = 0; i < tokens.length; i += 500) {
      const batch = tokens.slice(i, i + 500);
      const res = await admin.messaging().sendEachForMulticast({
        notification: { title: '🔥 BAIO Daily Bio Challenge', body },
        data: { url: 'zone.html#daily', tag: 'baio-daily' },
        webpush: { fcmOptions: { link: 'zone.html#daily' }, notification: { icon: 'icon-192.png', badge: 'icon-192.png', tag: 'baio-daily' } },
        tokens: batch
      });
      sent += res.successCount;
      const dels = [];
      res.responses.forEach((r, k) => {
        if (!r.success && ['messaging/registration-token-not-registered', 'messaging/invalid-registration-token'].includes(r.error && r.error.code)) {
          dels.push(db.collection('reminderTokens').doc(batch[k]).delete()); removed++;
        }
      });
      await Promise.all(dels);
    }
    logger.info(`Daily reminder sent to ${sent} device(s); removed ${removed} expired token(s).`);
  }
);
