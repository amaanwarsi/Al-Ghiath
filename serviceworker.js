var urlsToCache = [
  'https://amaanwarsi.thedev.id/Al-Ghiath/',
  'https://amaanwarsi.thedev.id/Al-Ghiath/tabler.min.css',
  'https://amaanwarsi.thedev.id/Al-Ghiath/main.js',
  'https://amaanwarsi.thedev.id/Al-Ghiath/assets/favicon.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache')
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        console.log("The responce is in the cache");
        if (response) {
          return response;
        }

        console.log("No cache match, we attempt to fetch it from the network");
        return fetch(event.request);
      }
    )
  );
});
