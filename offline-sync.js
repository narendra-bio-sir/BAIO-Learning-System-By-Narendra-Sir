/* BAIO offline packs — saves chosen parts of the app on the phone so they
   open without internet. Used by offline.html (download/remove) and
   index.html (quiet background refresh). The service worker (sw.js) serves
   these saved copies when the network is missing or slow.
   File list: offline-manifest.json, made by scripts/build-offline-manifest.py. */
(function () {
  var KEY = 'baio_offline_v1';
  var CACHE = 'baio-shell-v3';            // same cache as sw.js
  var ROOT = (function () {
    var s = document.currentScript && document.currentScript.src;
    return s ? new URL('.', s).href : new URL('.', location.href).href;
  })();
  var SYNC_EVERY = 6 * 3600e3;            // look for updates at most every 6 h
  var FULL_EVERY = 30 * 86400e3;          // safety net: re-check every file monthly

  function supported() { return 'caches' in window && 'serviceWorker' in navigator && 'fetch' in window; }
  function load() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
    if (!s || typeof s !== 'object') s = {};
    s.packs = s.packs || []; s.h = s.h || {};
    return s;
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }
  function abs(u) { return new URL(u, ROOT).href; }

  function manifest() {
    return fetch(abs('offline-manifest.json'), { cache: 'no-cache', headers: { 'x-baio-offline': '1' } })
      .then(function (r) { if (!r.ok) throw new Error('manifest ' + r.status); return r.json(); });
  }

  function filesOf(m, ids) {
    var seen = {}, out = [];
    ids.forEach(function (id) {
      var p = m.packs[id]; if (!p) return;
      p.files.forEach(function (f) { if (!seen[f[0]]) { seen[f[0]] = 1; out.push(f); } });
    });
    return out;
  }

  /* How much of each pack is on this phone: {id: {have, total, bytes, haveBytes}} */
  function status(m) {
    return caches.open(CACHE).then(function (c) {
      var ids = Object.keys(m.packs), res = {};
      return Promise.all(ids.map(function (id) {
        var p = m.packs[id], r = res[id] = { have: 0, total: p.files.length, bytes: p.bytes, haveBytes: 0 };
        return Promise.all(p.files.map(function (f) {
          return c.match(abs(f[0])).then(function (hit) { if (hit) { r.have++; r.haveBytes += f[1]; } });
        }));
      })).then(function () { return res; });
    });
  }

  /* Download packs. opts: {full: re-fetch everything, onProgress(done, total, bytesDone, bytesTotal)} */
  function download(m, ids, opts) {
    opts = opts || {};
    if (ids.indexOf('core') < 0) ids = ['core'].concat(ids);
    var st = load();
    return caches.open(CACHE).then(function (c) {
      var all = filesOf(m, ids);
      return Promise.all(all.map(function (f) {
        if (opts.full || st.h[f[0]] !== f[2]) return f;
        return c.match(abs(f[0])).then(function (hit) { return hit ? null : f; });
      })).then(function (list) {
        var need = list.filter(Boolean), done = 0, bytesDone = 0, failed = 0, i = 0;
        var bytesTotal = need.reduce(function (a, f) { return a + f[1]; }, 0);
        function tick() { if (opts.onProgress) opts.onProgress(done, need.length, bytesDone, bytesTotal); }
        tick();
        function worker() {
          if (i >= need.length) return Promise.resolve();
          var f = need[i++];
          return fetch(abs(f[0]), { cache: 'no-cache', headers: { 'x-baio-offline': '1' } })
            .then(function (r) {
              if (!r.ok) throw new Error(r.status);
              return c.put(abs(f[0]), r).then(function () { st.h[f[0]] = f[2]; });
            })
            .catch(function () { failed++; })
            .then(function () { done++; bytesDone += f[1]; tick(); return worker(); });
        }
        var pool = []; for (var k = 0; k < 4; k++) pool.push(worker());
        return Promise.all(pool).then(function () {
          ids.forEach(function (id) { if (st.packs.indexOf(id) < 0) st.packs.push(id); });
          // Keep the file list on the phone too, so offline.html can show what is saved offline.
          c.put(abs('offline-manifest.json'), new Response(JSON.stringify(m), { headers: { 'Content-Type': 'application/json' } }));
          st.v = m.version; st.at = Date.now(); if (opts.full || !st.full) st.full = Date.now();
          save(st);
          try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
          return { fetched: need.length - failed, failed: failed };
        });
      });
    });
  }

  /* Remove a pack's files (files another kept pack also needs stay). */
  function remove(m, id) {
    var st = load();
    st.packs = st.packs.filter(function (p) { return p !== id; });
    var keepIds = st.packs.length ? ['core'].concat(st.packs) : [];
    var dropIds = st.packs.length ? [id] : Object.keys(m.packs);
    var keep = {}; filesOf(m, keepIds).forEach(function (f) { keep[f[0]] = 1; });
    var drop = filesOf(m, dropIds).filter(function (f) {
      return !keep[f[0]] && !/^(index|offline)\.html$|^offline-sync\.js$|^manifest\.json$|^icon-|^apple-touch|^subject-apps\/app\.css/.test(f[0]);
    });
    return caches.open(CACHE).then(function (c) {
      return Promise.all(drop.map(function (f) { delete st.h[f[0]]; return c.delete(abs(f[0])); }));
    }).then(function () { save(st); });
  }

  /* Quiet refresh, called from the home page: only when packs were saved,
     the phone is online, and Data Saver is off. Downloads only changed files. */
  function autoSync() {
    if (!supported()) return Promise.resolve(null);
    var st = load();
    if (!st.packs.length || !navigator.onLine) return Promise.resolve(null);
    if (navigator.connection && navigator.connection.saveData) return Promise.resolve(null);
    if (st.checked && Date.now() - st.checked < SYNC_EVERY) return Promise.resolve(null);
    st.checked = Date.now(); save(st);
    return manifest().then(function (m) {
      var full = !st.full || Date.now() - st.full > FULL_EVERY;
      return download(m, st.packs.filter(function (p) { return m.packs[p]; }), { full: full });
    }).catch(function () { return null; });
  }

  window.BaioOffline = {
    supported: supported, state: load, manifest: manifest, status: status,
    download: download, remove: remove, autoSync: autoSync
  };
})();
