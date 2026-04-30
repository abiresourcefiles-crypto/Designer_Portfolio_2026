import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Variation15() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#111] text-white flex items-center justify-center font-dm overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Scattered Background Elements */}
        <motion.div 
          animate={{ 
            opacity: step === 1 ? 1 : 0.1, 
            scale: step === 1 ? 1 : 0.8,
            rotate: step === 1 ? -10 : 0
          }}
          transition={{ type: "spring" }}
          className="absolute left-1/4 top-1/3 text-[8vw] font-bold text-white/30 tracking-tighter"
        >
          Un
        </motion.div>

        <motion.div 
          animate={{ 
            opacity: step === 2 ? 1 : 0.1, 
            scale: step === 2 ? 1 : 0.8,
            rotate: step === 2 ? 10 : 0
          }}
          transition={{ type: "spring" }}
          className="absolute left-1/4 bottom-1/3 text-[8vw] font-bold text-white/30 tracking-tighter"
        >
          Re
        </motion.div>

        {/* Center Main Text */}
        <div className="relative z-10 flex text-[15vw] font-bold leading-none tracking-tighter">
          <motion.div className="w-[18vw] flex justify-end overflow-hidden">
            <motion.div
              animate={{ y: step === 0 ? "100%" : step === 1 ? "0%" : "-100%" }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="absolute text-white"
            >
              {step === 1 ? "Un" : step === 2 ? "Re" : ""}
            </motion.div>
          </motion.div>
          <div className="ml-2 z-20 mix-blend-difference">learn</div>
        </div>
      </div>
    </div>
  );
}
