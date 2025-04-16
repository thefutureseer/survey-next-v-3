'use client';

import UnServiceWorkerRegister from './service-worker';

export default function ClientRoot({ children }) {
  return (
    <>
      <UnServiceWorkerRegister />
      {children}
    </>
  );
}