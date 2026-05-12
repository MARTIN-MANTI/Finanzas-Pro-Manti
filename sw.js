const CACHE_NAME = 'finanzas-pro-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// Instalación: Guarda los archivos en la memoria local
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Peticiones: Carga desde la memoria si no hay internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});