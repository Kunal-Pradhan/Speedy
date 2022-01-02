self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('Speedie').then((cache) => cache.addAll([
'/Speedy/'
);
});
self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
});
