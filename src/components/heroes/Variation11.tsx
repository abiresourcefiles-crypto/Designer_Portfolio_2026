import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Variation11() {
  const prefixes = ["", "Un", "Re"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % prefixes.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center font-dm overflow-hidden">
      <div className="flex text-[15vw] font-bold leading-none tracking-tighter">
        <div className="w-[18vw] flex justify-end overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={prefixes[index]}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
              className="text-[#DEDCD7]"
            >
              {prefixes[index]}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="ml-2">learn</div>
      </div>
    </div>
  );
}
