const CACHE_NAME = 'baio-shell-v3';
// Pages and images saved with "Use BAIO offline" (offline.html) live in this
// same cache, so keep CACHE_NAME unchanged unless you really want every
// student to lose their downloaded chapters.
const APP_SHELL = [
  'index.html',
  'offline.html',
  'offline-sync.js',
  'subject-apps/app.css?v=1',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Handles a push message sent via Firebase Cloud Messaging (webpush
// protocol) — the payload arrives as raw JSON, no Firebase SDK needed here.
self.addEventListener('push', event => {
  let payload = {};
  try { payload = event.data ? event.data.json() : {}; } catch (e) {}
  const notif = payload.notification || {};
  const data = payload.data || {};
  const title = notif.title || data.title || 'BAIO Learning System';
  const options = {
    body: notif.body || data.body || '',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    tag: data.tag || 'baio-nudge',
    data: { url: data.url || 'index.html' }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const targetUrl = new URL((event.notification.data && event.notification.data.url) || 'index.html', self.registration.scope).href;
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (const client of windowClients) {
        if (client.url.split('#')[0].split('?')[0] === targetUrl.split('#')[0].split('?')[0] && 'focus' in client) {
          return client.focus();
        }
      }
      for (const client of windowClients) {
        if (new URL(client.url).origin === self.location.origin && 'navigate' in client && 'focus' in client) {
          return client.navigate(targetUrl).then(c => c && c.focus());
        }
      }
      if (clients.openWindow) return clients.openWindow(targetUrl);
    })
  );
});

// If the network hasn't answered within this time and we have a saved copy,
// show the saved copy (weak signal) and keep updating it in the background.
const NET_TIMEOUT_MS = 3500;
// After one request has timed out, the connection is clearly weak: for the next
// 30 s serve saved copies straight away (still refreshing them in the background)
// so a page's scripts and images don't each wait another 3.5 s.
const SLOW_WINDOW_MS = 30000;
let slowUntil = 0;

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  // Audio/video stream in byte ranges (206 responses can't be cached) — let the browser handle them.
  if (req.headers.has('range') || req.destination === 'audio' || req.destination === 'video') return;
  // offline-sync.js downloads packs itself and wants the real network answer.
  if (req.headers.has('x-baio-offline')) return;

  const sameOrigin = new URL(req.url).origin === self.location.origin;
  event.respondWith(sameOrigin ? networkFirst(event) : staleWhileRevalidate(req));
});

async function findCached(cache, req) {
  let hit = await cache.match(req);
  if (hit || req.mode !== 'navigate') return hit;
  // ?_r=… cache-busters, #pu1 tabs etc. — the page itself is the same.
  hit = await cache.match(req, { ignoreSearch: true });
  if (hit) return hit;
  const url = new URL(req.url);
  if (url.pathname.endsWith('/')) {
    url.pathname += 'index.html';
    url.search = '';
    hit = await cache.match(url.href);
  }
  return hit;
}

// Nothing saved for this page and no network: send the student to the
// offline page, which explains it and lists what IS saved.
async function offlineFallback(cache, req) {
  if (req.mode === 'navigate') {
    const page = await cache.match('offline.html');
    if (page) {
      const u = new URL('offline.html', self.registration.scope);
      u.searchParams.set('missing', new URL(req.url).pathname.split('/').pop() || 'index.html');
      return Response.redirect(u.href, 302);
    }
    const shell = await cache.match('index.html');
    if (shell) return shell;
  }
  return Response.error();
}

// Same-origin pages/assets: try the network so content stays fresh, cache
// every successful response as we go, and fall back to the saved copy when
// offline — or when the network is too slow to answer.
async function networkFirst(event) {
  const req = event.request;
  const cache = await caches.open(CACHE_NAME);
  // cache:'no-cache' makes the browser revalidate with the server every time (a cheap 304 when
  // nothing changed) instead of reusing GitHub Pages' 10-minute HTTP cache, so a newly
  // published update shows up on the very next open rather than up to 10 minutes later.
  const network = fetch(req, { cache: 'no-cache' }).then(res => {
    if (res && res.ok && !res.redirected) return cache.put(req, res.clone()).then(() => res, () => res);
    return res;
  });
  event.waitUntil(network.catch(() => {}));

  const cached = await findCached(cache, req);
  if (!cached) {
    try { return await network; } catch (err) { return offlineFallback(cache, req); }
  }
  if (Date.now() < slowUntil) return cached;
  return new Promise(resolve => {
    let settled = false;
    const timer = setTimeout(() => {
      if (!settled) { settled = true; slowUntil = Date.now() + SLOW_WINDOW_MS; resolve(cached); }
    }, NET_TIMEOUT_MS);
    network.then(res => {
      if (settled) return;
      settled = true; clearTimeout(timer);
      resolve(res && res.status < 500 ? res : cached);
    }, () => {
      if (settled) return;
      settled = true; clearTimeout(timer);
      resolve(cached);
    });
  });
}

// Cross-origin (Google Fonts, cdnjs libraries): serve from cache instantly
// if we have it, and refresh the cache in the background for next time.
async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);
  const network = fetch(req)
    .then(res => { if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()); return res; })
    .catch(() => cached);
  return cached || network;
}
