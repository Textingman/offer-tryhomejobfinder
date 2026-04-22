'use client';

import Script from 'next/script';
import { useCallback, useState } from 'react';

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
  const [fired, setFired] = useState(false);

  const handleLoad = useCallback(() => {
    if (fired) return;
    setFired(true);

    if (!window.EF || typeof window.EF.click !== 'function') {
      console.error('EF SDK not ready after load');
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
  }, [fired]);

  return (
    <Script
      src="https://www.obfst.com/scripts/main.js"
      strategy="afterInteractive"
      onLoad={handleLoad}
    />
  );
}
