/*
 * Performance-based push notifications — client module.
 *
 * NOT YET WIRED INTO ANY LIVE PAGE. This file is safe to load anywhere: if
 * window.BAIO_FIREBASE_CONFIG isn't set, or Firebase's SDK isn't loaded, or
 * the browser doesn't support push, everything here quietly no-ops.
 *
 * A page that wants this needs, before including this file:
 *   1. The Firebase compat SDKs:
 *        <script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-app-compat.js"></script>
 *        <script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore-compat.js"></script>
 *        <script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-messaging-compat.js"></script>
 *   2. window.BAIO_FIREBASE_CONFIG = { apiKey, authDomain, projectId, ... }
 *   3. window.BAIO_VAPID_KEY = '<the Web Push certificate key pair public key>'
 *
 * Then, once a student's profile is known on that page:
 *   BaioPush.init({ name, roll, section }, { chapterId: 'pu2ch4', chapterName: 'Principles of Inheritance and Variation' });
 *
 * And after every quiz/practice session that updates topic stats:
 *   BaioPush.syncTopicStats(topicStatsObj, topicTitleMap, { chapterId: 'pu2ch4', chapterName: '...', pageUrl: 'pu2-ch4.html' });
 */
(function (global) {
  "use strict";

  function studentId(profile) {
    var section = String((profile && profile.section) || 'na').toLowerCase().replace(/[^a-z0-9]+/g, '');
    var roll = String((profile && profile.roll) || (profile && profile.code) || 'na').toLowerCase().replace(/[^a-z0-9]+/g, '');
    return (section || 'na') + '_' + (roll || 'na');
  }

  function ready() {
    return !!(global.firebase && global.BAIO_FIREBASE_CONFIG && global.BAIO_VAPID_KEY && 'serviceWorker' in navigator && 'Notification' in global);
  }

  var app = null;
  function getApp() {
    if (!app) {
      app = global.firebase.apps && global.firebase.apps.length
        ? global.firebase.app()
        : global.firebase.initializeApp(global.BAIO_FIREBASE_CONFIG);
    }
    return app;
  }

  function db() {
    return getApp().firestore();
  }

  async function upsertStudent(profile) {
    var id = studentId(profile);
    await db().collection('students').doc(id).set({
      name: String((profile && profile.name) || '').slice(0, 100),
      section: String((profile && profile.section) || '').slice(0, 50),
      roll: String((profile && profile.roll) || (profile && profile.code) || '').slice(0, 30),
      updatedAt: global.firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    return id;
  }

  async function registerPushToken(id) {
    try {
      var permission = await Notification.requestPermission();
      if (permission !== 'granted') return;

      var reg = await navigator.serviceWorker.ready;
      var messaging = getApp().messaging();
      var token = await messaging.getToken({ vapidKey: global.BAIO_VAPID_KEY, serviceWorkerRegistration: reg });
      if (!token) return;

      await db().collection('students').doc(id).collection('pushTokens').doc(token).set({
        token: token,
        createdAt: global.firebase.firestore.FieldValue.serverTimestamp(),
        userAgent: navigator.userAgent.slice(0, 200)
      }, { merge: true });
    } catch (e) {
      // Permission denied, browser unsupported, offline, etc. — silently skip.
    }
  }

  async function init(profile, chapterMeta) {
    if (!ready() || !profile || !(profile.roll || profile.code)) return;
    try {
      var id = await upsertStudent(profile);
      await registerPushToken(id);
    } catch (e) {}
  }

  async function syncTopicStats(topicStats, topicTitleMap, chapterMeta) {
    if (!ready() || !topicStats || !chapterMeta || !chapterMeta.chapterId) return;
    var raw = null;
    try { raw = JSON.parse(localStorage.getItem('baio_last_push_profile') || 'null'); } catch (e) {}
    if (!raw) return; // init() must have run at least once this session to know who "we" are
    var id = studentId(raw);

    var batch = db().batch();
    var wrote = false;
    Object.keys(topicStats).forEach(function (topicId) {
      var s = topicStats[topicId];
      var attempts = (s.c || 0) + (s.w || 0);
      if (attempts < 1) return;
      var accuracy = Math.round(100 * (s.c || 0) / attempts);
      var docId = chapterMeta.chapterId + '_' + topicId;
      var ref = db().collection('students').doc(id).collection('topicStats').doc(docId);
      batch.set(ref, {
        chapterId: chapterMeta.chapterId,
        chapterName: chapterMeta.chapterName || chapterMeta.chapterId,
        topicId: topicId,
        topicTitle: (topicTitleMap && topicTitleMap[topicId]) || topicId,
        accuracy: accuracy,
        attempts: attempts,
        deepLink: chapterMeta.pageUrl || 'index.html',
        updatedAt: global.firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      wrote = true;
    });
    if (wrote) { try { await batch.commit(); } catch (e) {} }
  }

  // init() remembers the last profile used, in plain localStorage (not
  // sensitive — it's the same name/roll/section the student already typed
  // into this device), purely so syncTopicStats() can be called later in
  // the session (e.g. right after a quiz finishes) without needing every
  // call site to re-thread the profile object through.
  var _init = init;
  init = function (profile, chapterMeta) {
    if (profile) { try { localStorage.setItem('baio_last_push_profile', JSON.stringify(profile)); } catch (e) {} }
    return _init(profile, chapterMeta);
  };

  global.BaioPush = { init: init, syncTopicStats: syncTopicStats, studentId: studentId };
})(window);
