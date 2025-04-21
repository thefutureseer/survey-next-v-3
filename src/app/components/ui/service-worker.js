'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Check if a service worker is already controlling the page
        navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
          console.log('Service Worker scope:', registration.scope);
          if (registration.installing) {
            console.log('Service Worker state: installing');
          } else if (registration.waiting) {
            console.log('Service Worker state: waiting');
          } else if (registration.active) {
            console.log('Service Worker state: active');
          }
        })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      } 
    
  }, []);

  return null;
}