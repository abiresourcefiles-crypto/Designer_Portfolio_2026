import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Variation13() {
  const [index, setIndex] = useState(0);
  const words = ["Un", "Re", ""];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center font-dm overflow-hidden">
      <div className="flex text-[15vw] font-bold leading-none tracking-tighter uppercase">
        <div className="w-[18vw] flex justify-end">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={index}
              initial={{ filter: "blur(20px)", opacity: 0, scale: 2 }}
              animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
              exit={{ filter: "blur(20px)", opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.4 }}
              className="text-[#DEDCD7]"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="ml-2">LEARN</div>
      </div>
    </div>
  );
}
