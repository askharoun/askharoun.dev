const CACHE_NAME = 'coptic-bible-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json'
  // Note: We cannot cache the external Wikimedia image easily without CORS issues in some browsers, 
  // so the user requires internet to see the logo the first time, then the browser disk cache takes over.
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
