import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Variation14() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center font-dm overflow-hidden">
      <div className="flex text-[15vw] font-bold leading-none tracking-tighter overflow-hidden">
        <motion.div
          animate={{
            width: step === 0 ? 0 : "18vw",
          }}
          transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
          className="flex justify-end overflow-hidden whitespace-nowrap"
        >
          <motion.div
            animate={{
              y: step === 1 ? "0%" : step === 2 ? "-100%" : "100%",
            }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
            className="flex flex-col"
          >
            <span className="h-full flex items-center">Un</span>
            <span className="h-full flex items-center">Re</span>
          </motion.div>
        </motion.div>
        <div className="ml-2">learn</div>
      </div>
    </div>
  );
}
