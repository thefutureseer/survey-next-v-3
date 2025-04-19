'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Check if a service worker is already controlling the page
      if (!navigator.serviceWorker.controller) {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      } else {
        console.log('Service Worker is already registered and controlling the page.');
      }
    }
  }, []);

  return null;
}