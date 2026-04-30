import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Variation12() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center font-dm overflow-hidden">
      <div className="relative text-[15vw] font-bold leading-none tracking-tighter flex">
        <div className="relative w-[18vw]">
          <motion.div
            animate={{
              scale: step === 1 ? 1 : 0,
              opacity: step === 1 ? 1 : 0,
              x: step === 1 ? 0 : -50,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute right-0 text-black"
          >
            Un
          </motion.div>
          <motion.div
            animate={{
              scale: step === 2 ? 1 : 0,
              opacity: step === 2 ? 1 : 0,
              y: step === 2 ? 0 : 50,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute right-0 text-black"
          >
            Re
          </motion.div>
        </div>
        <div className="ml-2">learn</div>
      </div>
    </div>
  );
}
