'use client';

import { base } from 'wagmi/chains';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import type { ReactNode } from 'react';

export function Providers(props: { children: ReactNode }) {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
          chain={base}
          config={{ appearance: { 
            logo: '/app-logo.png',
            name: 'Tina\'s demo',
            mode: 'auto',
            theme: 'base',
        },
        wallet: {
          display: 'modal',
        },
      }}
    >
      {props.children}
    </OnchainKitProvider>
  );
}

