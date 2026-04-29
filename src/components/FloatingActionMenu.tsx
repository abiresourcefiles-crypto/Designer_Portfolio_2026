import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Layers } from 'lucide-react';
import { useState } from 'react';

interface FloatingActionMenuProps {
  currentVariation: number;
  onSelect: (index: number) => void;
  variations: string[];
}

export default function FloatingActionMenu({ currentVariation, onSelect, variations }: FloatingActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 left-10 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-0 bg-black text-white p-6 w-[240px] shadow-2xl border-t border-x border-white/20"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] mb-4 pb-2 border-b border-white/30 text-white/70">
              Switch Variation
            </div>
            <div className="space-y-0 text-left">
              {variations.map((name, idx) => (
                <button
                  key={name}
                  id={`variation-btn-${idx}`}
                  onClick={() => {
                    onSelect(idx);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between py-2 text-[11px] transition-all uppercase tracking-widest ${
                    currentVariation === idx
                      ? 'text-white font-bold opacity-100'
                      : 'text-white/40 hover:text-white hover:opacity-100'
                  }`}
                >
                  <span>{name}</span>
                  <span className="text-[9px] opacity-30">0{idx + 1}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        id="toggle-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="w-[240px] bg-black text-white px-6 py-4 flex items-center justify-between border-t border-white/10 group active:scale-95 transition-transform"
      >
        <div className="flex items-center gap-3">
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span className="font-bold text-[10px] uppercase tracking-[0.2em]">
            {isOpen ? 'CLOSE MENU' : 'CHOOSE THEME'}
          </span>
        </div>
        <div className="w-2 h-2 rounded-full bg-white opacity-20 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </div>
  );
}
