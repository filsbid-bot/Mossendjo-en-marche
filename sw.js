const cacheName = 'mossendjo-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/logo.png.png'
];

// Installation du Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Récupération des ressources
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});