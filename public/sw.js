const CACHE_NAME = 'survey-cache-v1';
const URLS_TO_CACHE = [
  '/', // homepage
  '/results', // survey results page
  '/styles/survey.css', // external CSS file
  '/offline.html', // fallback page
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/manifest.json',
  '/safari-pinned-tab.svg',
  '/survey-core/defaultV2.min.css',
  '/survey-react-ui.js',
];

// STEP 1: Install and cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting(); // activates the new worker immediately
});

// STEP 2: Remove old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim(); // allows the new service worker to control open pages
});

// STEP 3: Respond to network requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached file if available
      if (cachedResponse) {
        return cachedResponse;
      }

      // Otherwise, fetch from network or fallback
      return fetch(event.request).catch(() =>
        caches.match('/offline.html')
      );
    })
  );
});