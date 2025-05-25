const CACHE_NAME = 'hunt-cache-v1';
const URLS = ['/', '/index.html', '/checkpoint.html', '/flow.json', '/style.css'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
