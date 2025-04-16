'use client';

import { useEffect } from 'react';

export default function UnregisterServiceWorker() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(reg => {
          reg.unregister().then(() => {
            console.log('✅ Service worker unregistered');
          });
        });
      });


      // Step 2: Delete caches that start with "dan-surveys"
      if (window.caches) {
        caches.keys().then(cacheNames => {
          cacheNames.forEach(cacheName => {
            if (cacheName.startsWith('dan-surveys')) {
              caches.delete(cacheName).then(deleted => {
                if (deleted) {
                  console.log(`🗑️ Cache "${cacheName}" deleted`);
                }
              });
            }
          });
        });
      }
    }
  }, []);

  return null;
}

// 'use client';

// import { useEffect } from 'react';

// export default function ServiceWorkerRegister() {
//   useEffect(() => {
//     if ('serviceWorker' in navigator) {
//       // Check if a service worker is already controlling the page
//       if (!navigator.serviceWorker.controller) {
//         navigator.serviceWorker.register('/sw.js')
//           .then((registration) => {
//             console.log('Service Worker registered with scope:', registration.scope);
//           })
//           .catch((error) => {
//             console.error('Service Worker registration failed:', error);
//           });
//       } else {
//         console.log('Service Worker is already registered and controlling the page.');
//       }
//     }
//   }, []);

//   return null;
// }