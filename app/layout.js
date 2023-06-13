"use client"
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// export const metadata = {
//   title: 'Astrava',
//   description: 'Astrava',
// }
export default function RootLayout({ children }) {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [
      // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
      publicProvider()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })




  return (
    <html lang="en">

      <body>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>


            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  )
}
