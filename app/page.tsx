'use client';

import SwapComponents from './components/SwapComponents';
import tangcat from './images/tang_base_ball_bat.png';
import { FundButton } from '@coinbase/onchainkit/fund';
import Header from './components/Header';

export default function Page() {


  return (
    <div className="flex h-screen w-full flex-col items-center justify-center px-4">
      {/* Header Section */}
      <div className="flex items-center justify-center w-full px-4">
        <Header />
      </div>

      {/* Main Content */}
      <section className="flex flex-col items-center w-full max-w-3xl mx-auto rounded-xl bg-white shadow-md p-6">
        {/* Image and Title */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <img 
            src={tangcat.src} 
            alt="Tang Cat" 
            className="w-40 md:w-52 h-auto mb-6 md:mb-0 md:mr-6"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            TANG CAT
            <br />
            <hr className="my-2 border-black w-1/2 mx-auto" />
            <span className="block text-3xl md:text-5xl">汤 猫</span>
          </h1>
        </div>

        {/* Swap Component */}
        <div className="swap-container w-full mt-6 border border-gray-200 rounded-lg p-4 bg-blue-50 flex items-center justify-center">
          <SwapComponents />
        </div>

        {/* Fund Wallet Section */}
        <div className="flex flex-col items-center mt-4">
          <h1 className="text-lg font-medium">Short on Funds?</h1>
          <FundButton 
            className="bg-[#AACBF2] text-black px-4 py-2 rounded-md hover:bg-blue-400"
            text={'Fund Wallet'}
            hideIcon={true}
            popupSize="sm"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-6 text-center text-gray-600">
        Made with <span className="text-red-500">❤️</span> by <a 
          href="https://x.com/zawarudonft" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline ml-1"
        >
          @zawarudonft
          </a>  using Onchain Kit
      </footer>
    </div>
  );
}
