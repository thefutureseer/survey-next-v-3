const CACHE_NAME = 'survey-cache-v4';
const URLS_TO_CACHE = [
  '/', // homepage
  '/results', // survey results page
  '/styles/survey.css', // external CSS file
  '/offline.html', // fallback page
  '/survey-core/defaultV2.min.css',
  '/survey-react-ui.js',
];

// STEP 1: Install and cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting(); // Activate the new service worker immediately
});

// STEP 2: Remove old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Service Worker: Removing old cache', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim(); // Allows the new service worker to control open pages
});

// STEP 3: Respond to network requests
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    // Handle navigation requests
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request).catch(() =>
          caches.match('/offline.html')
        );
      })
    );
  } else if (event.request.destination === 'image') {
    // Handle image requests with a fallback
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request).catch(() =>
          caches.match('/fallback-image.png') // Add a fallback image to the cache
        );
      })
    );
  } else if (event.request.url.includes('/api/')) {
    // Handle API requests with runtime caching
    event.respondWith(
      caches.open('runtime-cache').then((cache) => {
        return fetch(event.request)
          .then((response) => {
            cache.put(event.request, response.clone());
            return response;
          })
          .catch(() => caches.match(event.request));
      })
    );
  } else {
    // Handle other requests
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  }
});