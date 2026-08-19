const CACHE_NAME = 'baio-shell-v2';
const APP_SHELL = [
  'index.html',
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

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const sameOrigin = new URL(req.url).origin === self.location.origin;
  event.respondWith(sameOrigin ? networkFirst(req) : staleWhileRevalidate(req));
});

// Same-origin pages/assets: try the network so content stays fresh, cache
// every successful response as we go, and fall back to whatever we have
// cached (or the home page shell, for a navigation) when offline.
async function networkFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok) cache.put(req, fresh.clone());
    return fresh;
  } catch (err) {
    const cached = await cache.match(req);
    if (cached) return cached;
    if (req.mode === 'navigate') {
      const shell = await cache.match('index.html');
      if (shell) return shell;
    }
    throw err;
  }
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
