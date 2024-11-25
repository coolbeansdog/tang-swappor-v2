const Guide = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">OnchainKit Installation Guide</h2>
      <div className="space-y-6">
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-2">Create New Project</h3>
          <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded block">
            npm create onchain@latest
          </code>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
            Enable TypeScript, ESLint, and Tailwind CSS during setup
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Import to Existing Project</h3>
          
          <div className="space-y-2">
            <h4 className="text-base font-normal mb-2">1. Install OnchainKit</h4>
            <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded block">
            npm i @coinbase/onchainkit@latest
          </code>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
              We support Next.js, Vite, Remix, and Astro.
            </p>
          </div>

          <div className="space-y-2 mt-4">
            <h4 className="text-base font-normal mb-2">2. Wrap your app with &lt;OnchainKitProvider /&gt;</h4>
          </div>

          <div className="space-y-2 mt-4">
            <h4 className="text-base font-normal mb-2">3. Add styles by importing <code>@coinbase/onchainkit/styles.css</code>.</h4>
          </div>

        </div>

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