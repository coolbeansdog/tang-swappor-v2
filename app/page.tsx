'use client';

import { useState } from 'react';
import Header from './components/Header';
import NFT from './components/NFT';
import Guide from './components/Guide';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'mint' | 'guide'>('mint');

  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <Header />

      <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => setActiveTab('mint')}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === 'mint'
                ? 'bg-[#0052ff] text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            Mint 
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === 'guide'
                ? 'bg-[#0052ff] text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            Installation Guide
          </button>
        </div>
      </div>

      <main className="flex-grow flex items-center justify-center">
        {activeTab === 'mint' ? <NFT /> : <Guide />}
      </main>

      <Footer />
    </div>
  );
}
