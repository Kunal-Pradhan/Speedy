//Version: 1

self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('Speedy').then((cache) => cache.addAll([
'SpeedyIcon/Speedy.png',
'Speedy.js'
])),
);
});

self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
});
