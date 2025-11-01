'use client';
import ServiceWorkerRegister from './service-worker';

export default function ClientRoot({ children }) {
  return (
    <>
      <ServiceWorkerRegister />
      {children}
    </>
  );
}
