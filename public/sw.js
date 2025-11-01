const CACHE_NAME = 'survey-cache-v5';
const URLS_TO_CACHE = [
  '/',                 // homepage
  '/results',          // survey results page
  '/offline.html',     // fallback page
  '/fallback-image.png'
  
];

// STEP 1: Install and cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

// STEP 2: Remove old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => key !== CACHE_NAME && caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// STEP 3: Fetch handler
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Navigation requests (pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).catch(() => caches.match('/offline.html')))
    );
    return;
  }

  // API requests - runtime caching
  if (request.url.includes('/api/')) {
    event.respondWith(
      caches.open('runtime-cache').then((cache) =>
        fetch(request)
          .then((response) => {
            cache.put(request, response.clone());
            return response;
          })
          .catch(() => caches.match(request))
      )
    );
    return;
  }

  // Other requests (images, fonts, etc.) - cache first
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});