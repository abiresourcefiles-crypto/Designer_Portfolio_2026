import { useState, useEffect } from 'react';
import Variation9 from "./components/heroes/Home";
import BentoLayout from "./components/heroes/Bento";
import About from "./components/About";
import { Analytics } from "@vercel/analytics/react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return sessionStorage.getItem('portfolioCurrentPage') || 'home';
  });
  const [isBento, setIsBento] = useState(() => {
    return sessionStorage.getItem('portfolioLayoutMode') === 'bento';
  });

  useEffect(() => {
    sessionStorage.setItem('portfolioCurrentPage', currentPage);
    if ('scrollRestoration' in history) {
      if (currentPage === 'home') {
        history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
      } else {
        history.scrollRestoration = 'auto';
      }
    }
  }, [currentPage]);

  useEffect(() => {
    sessionStorage.setItem('portfolioLayoutMode', isBento ? 'bento' : 'classic');
    window.scrollTo(0, 0);
  }, [isBento]);

  const [loadingState, setLoadingState] = useState<{ active: boolean; text: string }>({
    active: false,
    text: ''
  });

  const handleExternalLink = (url: string, text: string = 'Opening Link') => {
    setLoadingState({ active: true, text });
    setTimeout(() => {
      window.open(url, "_blank");
      setTimeout(() => setLoadingState({ active: false, text: '' }), 100);
    }, 600); // Increased duration slightly for better feel
  };

  const handleResumeClick = () => {
    handleExternalLink("https://drive.google.com/file/d/1_REbzPqSZqnhBweCx8GncyX-PcG6Fd-q/view?usp=sharing", "Opening Resume");
  };

  return (
    <div className="relative min-h-screen bg-white text-black font-dm selection:bg-black selection:text-white flex flex-col">

      {/* Resume Loading Overlay */}
      <AnimatePresence>
        {loadingState.active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-white text-black flex flex-col items-center justify-center font-dm"
          >
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-black animate-ping"></div>
              <span className="text-xl md:text-2xl font-bold tracking-widest uppercase">{loadingState.text}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editorial Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-20 px-6 md:px-10 flex justify-between items-center border-b border-black z-50 sticky top-0 bg-white"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setCurrentPage('home')}
          className="w-[56px] h-[56px] flex items-center justify-center cursor-pointer flex-shrink-0"
        >
          <svg viewBox="0 0 424 288" fill="none" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2133_570)">
              <path d="M417.174 161.003C412.657 154.583 404.025 149.969 391.277 147.16C402.72 144.652 410.348 141.041 414.263 136.326C418.178 131.611 420.085 123.285 420.085 111.448C420.085 93.7931 417.375 81.0533 411.854 73.1285C406.333 65.2038 399.106 59.9875 390.172 57.3793C381.439 54.8715 368.591 53.5674 351.828 53.4671H290.496V131.21H277.045C278.35 95.8997 269.417 66.1066 250.345 41.6301C228.562 13.8433 197.445 0 156.792 0C129.087 0 104.595 10.0313 83.3144 30.1944C62.1345 50.2571 51.4943 72.5266 51.4943 97.0031C51.4943 100.313 51.6951 103.624 51.9962 106.934H121.258C120.555 103.624 120.254 100.313 120.254 97.0031C120.254 85.768 124.269 76.7398 132.4 70.0188C140.43 63.2978 149.765 59.8872 160.305 59.8872C178.775 59.8872 192.627 65.3041 201.862 76.2382C211.097 87.1724 216.818 105.429 219.127 131.21H1.00379C0.301136 138.433 0 145.455 0 152.376C0 192.903 11.8447 225.705 35.3333 250.583C58.9223 275.461 89.1364 287.9 126.176 287.9C162.814 287.9 193.831 279.574 219.428 262.922C245.025 246.27 262.691 221.392 272.629 188.489H290.396V257.304H351.727H359.356C381.54 257.304 396.195 256.1 403.322 253.693C410.449 251.285 415.669 246.671 418.981 240.05C422.294 233.429 423.9 223.198 423.9 209.455V190.596C424 177.254 421.691 167.423 417.174 161.003ZM182.79 220.188C170.744 228.113 156.491 232.025 140.028 232.025C122.864 232.025 108.208 228.213 95.9621 220.69C82.411 212.765 74.983 202.031 73.678 188.489H206.78C202.866 201.73 194.835 212.263 182.79 220.188ZM368.892 203.436C368.892 211.661 367.788 216.878 365.68 218.884C363.672 220.89 358.955 222.094 351.828 222.395C351.527 222.395 351.225 222.395 350.824 222.395V165.317C351.125 165.317 351.527 165.317 351.828 165.317C359.456 165.618 364.174 166.621 366.081 168.426C367.989 170.232 368.992 175.549 368.992 184.276V203.436H368.892ZM366.583 129.705C365.078 132.313 361.665 133.517 356.244 133.517C355.14 133.517 353.634 133.517 351.727 133.618C351.426 133.618 351.125 133.618 350.723 133.618V88.3762C351.025 88.3762 351.426 88.3762 351.727 88.3762C356.847 88.4765 360.36 88.8777 362.167 89.4796C364.174 90.1818 365.68 91.7868 366.985 94.2947C368.189 96.9028 368.792 101.317 368.792 107.737C368.892 119.774 368.089 127.097 366.583 129.705Z" fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_2133_570">
                <rect width="424" height="288" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </motion.div>

        {/* Center: Layout Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-1 bg-black/[0.05] rounded-full p-1 border border-black/10"
          role="group"
          aria-label="Layout toggle"
        >
          <button
            id="toggle-classic"
            onClick={() => setIsBento(false)}
            className={`relative px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
              !isBento
                ? 'bg-black text-white shadow-sm'
                : 'text-black/40 hover:text-black/70'
            }`}
          >
            Classic
          </button>
          <button
            id="toggle-bento"
            onClick={() => setIsBento(true)}
            className={`relative px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
              isBento
                ? 'bg-black text-white shadow-sm'
                : 'text-black/40 hover:text-black/70'
            }`}
          >
            Bento
          </button>
        </motion.div>

        {/* Right: Nav Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="flex gap-6 md:gap-10 text-[14px] font-medium"
        >
          {[
            { name: "writings", url: "https://medium.com/@abhishekdesignspace", blank: true },
            { name: "resume", action: handleResumeClick },
            { name: "contact", action: () => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); } }
          ].map((item) => (
            <motion.a
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              href={item.url || "#"}
              target={item.blank ? "_blank" : "_self"}
              rel={item.blank ? "noopener noreferrer" : ""}
              onClick={(e) => {
                if (item.action) {
                  e.preventDefault();
                  item.action();
                } else if (item.blank && item.url) {
                  e.preventDefault();
                  handleExternalLink(item.url, `Opening ${item.name}`);
                }
              }}
              className="group relative pb-1 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer hidden md:block"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black origin-left scale-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:scale-x-100" />
            </motion.a>
          ))}
        </motion.div>
      </motion.nav>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {isBento ? (
          <motion.main
            key="bento"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative flex flex-col bg-[#0a0a0a]"
          >
            <BentoLayout onLinkClick={handleExternalLink} />
          </motion.main>
        ) : (
          <motion.main
            key="classic"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative flex flex-col"
          >
            {currentPage === 'home' ? <Variation9 onLinkClick={handleExternalLink} /> : <About />}
          </motion.main>
        )}
      </AnimatePresence>

      <Analytics />
    </div>
  );
}
