import { useState } from 'react';

const Guide = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000); // Reset after 2 seconds
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">OnchainKit Installation Guide</h2>

      <div className="space-y-6">

      <hr className="border-gray-200 dark:border-gray-700" />

        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-2">Create New Project</h3>
          <div className="relative">
            <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded block">
              npm create onchain@latest
            </code>
            <button
              type="button"
              onClick={() => copyToClipboard('npm create onchain@latest')}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {copiedText === 'npm create onchain@latest' ? (
                <span className="text-sm">Copied!</span>
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  aria-label="Copy to clipboard"
                  role="img"
                >
                  <title>Copy to clipboard</title>
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
          </div>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
            Enable all OnchainKit features automatically with boilerplate app.
          </p>
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        <div>
          <h3 className="text-lg font-semibold mb-2">Import to Existing Project</h3>
          
          <div className="space-y-2">
            <h4 className="text-base font-normal mb-2">1. Install OnchainKit</h4>
            <div className="relative">
              <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded block">
                npm i @coinbase/onchainkit@latest
              </code>
              <button
                type="button"
                onClick={() => copyToClipboard('npm i @coinbase/onchainkit@latest')}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {copiedText === 'npm i @coinbase/onchainkit@latest' ? (
                  <span className="text-sm">Copied!</span>
                ) : (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-label="Copy to clipboard"
                    role="img"
                  >
                    <title>Copy to clipboard</title>
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
              We support Next.js, Vite, Remix, and Astro.
            </p>
          </div>

          <div className="space-y-2 mt-4">
            <h4 className="text-base font-normal mb-2">2. Wrap your app with &lt;OnchainKitProvider /&gt;</h4>
          </div>

          <div className="space-y-2 mt-4">
            <h4 className="text-base font-normal mb-2">3. Add styles by importing <code>@coinbase/onchainkit/styles.css</code></h4>
          </div>

        </div>
        
        <hr className="border-gray-200 dark:border-gray-700" />

        <div>
        <h3 className="text-lg font-semibold mb-2">That&apos;s it. It&apos;s easier than ever to build onchain.</h3>
          <p className="text-sm">
            For detailed setup and configuration, visit the{' '}
            <a 
              href="https://docs.onchainkit.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0052ff] hover:text-blue-600"
            >
              OnchainKit Documentation
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guide; 