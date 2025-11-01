'use client';
import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    if (!('serviceWorker' in navigator)) return;

    const registerSW = () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('✅ Service Worker registered:', registration.scope);
        })
        .catch((error) => {
          console.error('❌ Service Worker registration failed:', error);
        });
    };

    // Lazy load — register only after first user interaction
    const events = ['click', 'scroll', 'keydown', 'touchstart'];
    events.forEach((event) =>
      window.addEventListener(event, registerSW, { once: true })
    );

    // Optional backup: auto register after 5s if no interaction
    const timeout = setTimeout(registerSW, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}