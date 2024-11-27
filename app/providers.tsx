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
            logo: '/tang_base_ball_bat.png',
            name: 'Tang Swapper',
            mode: 'dark',
            theme: 'default',
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

