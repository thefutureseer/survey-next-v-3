'use client';
import ServiceWorkerRegister from './ServiceWorkerRegister';

export default function ClientRoot({ children }) {
  return (
    <>
      <ServiceWorkerRegister />
      {children}
    </>
  );
}
