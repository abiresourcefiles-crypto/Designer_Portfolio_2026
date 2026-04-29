import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import FloatingActionMenu from './components/FloatingActionMenu';

// Individual Variations
import Variation1 from './components/heroes/Variation1';
import Variation2 from './components/heroes/Variation2';
import Variation3 from './components/heroes/Variation3';
import Variation4 from './components/heroes/Variation4';
import Variation5 from './components/heroes/Variation5';
import Variation6 from './components/heroes/Variation6';
import Variation7 from './components/heroes/Variation7';
import Variation8 from './components/heroes/Variation8';
import Variation9 from './components/heroes/Variation9';
import Variation10 from './components/heroes/Variation10';

const variations = [
  "Swiss Monochrome (P1)",
  "Startup Style (P8)",
  "Agency Style (P9)",
  "Apple Inspired (P4)",
  "Asymmetric Grid (P5)",
  "Neo-Brutalist (Custom)",
  "Typography First (P6)",
  "Timeline Journey (P7)",
  "Industrial Struct (Custom)",
  "Story Driven (P10)"
];

const HeroComponents = [
  Variation1,
  Variation2,
  Variation3,
  Variation4,
  Variation5,
  Variation6,
  Variation7,
  Variation8,
  Variation9,
  Variation10
];

export default function App() {
  const [currentVariation, setCurrentVariation] = useState(0);
  const ActiveHero = HeroComponents[currentVariation];

  return (
    <div className="relative min-h-screen bg-white text-black font-dm selection:bg-black selection:text-white flex flex-col">
      {/* Editorial Navigation */}
      <nav className="w-full h-20 px-10 flex justify-between items-center border-b border-black z-50 sticky top-0 bg-white">
        <div className="text-[12px] font-bold uppercase tracking-[0.15em]">Erik Sørensen / Product Designer</div>
        <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.15em]">
          <a href="#" className="hover:opacity-40 transition-opacity">Work</a>
          <a href="#" className="hover:opacity-40 transition-opacity">Studio</a>
          <a href="#" className="hover:opacity-40 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVariation}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <ActiveHero />
          </motion.div>
        </AnimatePresence>
      </main>

      <FloatingActionMenu 
        currentVariation={currentVariation}
        onSelect={setCurrentVariation}
        variations={variations}
      />

      {/* Aesthetic Label */}
      <div className="fixed top-24 right-10 z-50 pointer-events-none">
        <motion.div 
          key={currentVariation}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/30 vertical-rl transform rotate-180 flex items-center gap-4"
        >
          <div className="w-px h-12 bg-black/10"></div>
          {variations[currentVariation]}
        </motion.div>
      </div>
    </div>
  );
}
