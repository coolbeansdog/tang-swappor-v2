"use client";

import { useAccount } from 'wagmi';
import {
  FundButton,
  getOnrampBuyUrl
} from '@coinbase/onchainkit/fund';
import { WalletDefault } from '@coinbase/onchainkit/wallet';

export default function Fund() {
  const projectId = process.env.NEXT_PUBLIC_CDP_PROJECT_ID;
  const { address } = useAccount();

  const onrampBuyUrl = address && projectId ? getOnrampBuyUrl({
    projectId,
    addresses: { [address.toString()]: ['base', 'ethereum'] }, // Specify chains here
    assets: ['ETH', 'USDC'],                               // Specify supported assets
    presetFiatAmount: 10,                          // Default fiat amount
    fiatCurrency: 'USD'                           // Default fiat currency
  }) : '';

  return (
    <>
      {address && projectId ? (
        <FundButton fundingUrl={onrampBuyUrl} hideIcon={true} text={"Fund Wallet"} />
      ) : (
        <WalletDefault />
      )}
    </>
  )
}