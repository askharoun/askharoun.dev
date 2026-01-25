const CACHE_NAME = 'triangle-pwa-v2';
const ASSETS = [
  './index.html',
  './manifest.json',
  './images/logo.png',
  './images/triangle.png',
  './images/Penn-State-Logo.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});