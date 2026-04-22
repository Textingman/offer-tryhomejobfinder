'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    EF?: {
      click: (params: {
        offer_id: number;
        affiliate_id: number;
        sub1?: string;
      }) => Promise<string>;
    };
  }
}

export default function EverflowTracking() {
  useEffect(() => {
    const tryFire = () => {
      if (!window.EF || typeof window.EF.click !== 'function') {
        console.error('EF SDK not ready');
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const phone = params.get('phone') || '';

      window.EF.click({
        offer_id: 1807,
        affiliate_id: 2357,
        sub1: phone,
      })
        .then((tid: string) => console.log('Everflow click success:', tid))
        .catch((err: unknown) => console.error('Everflow click failed:', err));
    };

    const timer = setTimeout(tryFire, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Script
      src="https://www.obfst.com/scripts/main.js"
      strategy="afterInteractive"
    />
  );
}
