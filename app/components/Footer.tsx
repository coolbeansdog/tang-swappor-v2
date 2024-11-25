export default function Footer() {
    return (
        <footer className="text-center p-4">
            <p>
                <a 
                    href="https://github.com/coinbase/onchainkit" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#0052ff] mx-2"
                >
                    GitHub
                </a>
                |
                <a 
                    href="https://onchainkit.xyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#0052ff] mx-2"
                >
                    Docs
                </a>
            </p>
            
        </footer>
    );
}
