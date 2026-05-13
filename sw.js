const CACHE_NAME = 'mossendjo-v1';
const FILES = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json',
  '/logo.png.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});