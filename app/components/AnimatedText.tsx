'use client';

const AnimatedText = () => {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 -rotate-90 transform origin-left">
      <p className="text-3xl text-[#0052ff] dark:text-[#ffffff]">
        This is an <a href="https://onchainkit.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#0052ff] dark:hover:text-[#0052ff]"> OnchainKit </a> Demo App
      </p>
    </div>
  );
};

export default AnimatedText; 