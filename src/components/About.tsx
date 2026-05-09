import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="w-full bg-white text-black font-dm pt-10 pb-20" ref={containerRef}>
      
      {/* Top Section: Floating Cards & Bio */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 flex flex-col items-center">
        
        {/* Floating Photos */}
        <div className="relative w-full max-w-3xl h-[40vh] md:h-[50vh] mb-16 flex items-center justify-center [perspective:1000px]">
          {/* Back left image */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-[5%] top-[20%] w-32 md:w-56 aspect-[3/4] rounded-sm overflow-hidden shadow-2xl -rotate-12 z-10"
          >
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" alt="Memory" className="w-full h-full object-cover opacity-80 filter contrast-125" />
          </motion.div>
          
          {/* Front center image */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute z-30 w-48 md:w-80 aspect-video rounded-sm overflow-hidden shadow-2xl rotate-2"
          >
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" alt="Focus" className="w-full h-full object-cover filter contrast-125" />
          </motion.div>

          {/* Back right image */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[5%] top-[10%] w-28 md:w-48 aspect-[4/5] rounded-sm overflow-hidden shadow-xl rotate-6 z-20"
          >
            <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80" alt="Details" className="w-full h-full object-cover opacity-90 filter contrast-125" />
          </motion.div>
        </div>

        {/* Bio Text */}
        <div className="max-w-2xl text-center md:text-left mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">This is Abhishek.</h1>
          <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-6">
            Photographer turned into a Designer. Based in India. By trade, I design digital products. By nature, I’m an analyst obsessed with complex, messy problems and the hidden variables beneath them.
          </p>
          <p className="text-lg md:text-xl text-black/70 leading-relaxed">
            I balance this strict, systemic logic with a deep love for art and photography. I like digging into mysteries, figuring out how things work, and making sure they look exceptionally clean while doing it.
          </p>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="w-full py-20 px-6 md:px-12 bg-white text-black relative overflow-hidden mt-10 border-t border-black/10">
        
        {/* Huge Text Header */}
        <div className="max-w-6xl mx-auto relative z-20 text-center mb-32 pt-20">
          {/* Photo overlay on text */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-32 md:w-48 aspect-[3/4] z-10 rotate-3 shadow-2xl rounded-sm overflow-hidden">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="Portrait" className="w-full h-full object-cover filter grayscale contrast-125" />
          </div>
          <h2 className="text-[18vw] md:text-[14rem] font-bold tracking-tighter leading-none relative z-0 opacity-90">
            About me
          </h2>
          <p className="max-w-2xl mx-auto mt-8 text-sm md:text-base text-black/80 leading-relaxed font-medium">
            I'm a designer working with people who want to build meaningful digital experiences. My approach is grounded, attentive, and deeply rooted in real human connection.
          </p>
        </div>

        {/* Hand-drawn Journey Timeline */}
        <div className="relative max-w-4xl mx-auto h-[1000px] md:h-[1200px]">
          
          {/* SVG Winding Path */}
          <div className="absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 400 1200" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M 200 0 C 150 150, 350 250, 250 400 C 150 550, 50 650, 200 800 C 350 950, 250 1100, 200 1200" 
                fill="none" 
                stroke="rgba(0,0,0,0.3)" 
                strokeWidth="1.5" 
              />
            </svg>
          </div>

          {/* Nodes */}
          {/* Node 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="absolute top-[10%] left-[5%] md:left-[10%] max-w-[200px] md:max-w-[250px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <h3 className="font-bold text-lg tracking-tight">The Lens</h3>
            </div>
            <p className="text-xs md:text-sm text-black/60 leading-relaxed">
              It all started with a camera. Capturing moments taught me composition, light, and how to look at the world carefully.
            </p>
          </motion.div>

          {/* Node 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="absolute top-[35%] right-[5%] md:right-[10%] max-w-[200px] md:max-w-[250px] text-right"
          >
            <div className="flex items-center justify-end gap-2 mb-2">
              <h3 className="font-bold text-lg tracking-tight">The Shift</h3>
              <div className="w-2 h-2 rounded-full border border-black"></div>
            </div>
            <p className="text-xs md:text-sm text-black/60 leading-relaxed">
              I realized I wanted to build the experiences, not just document them. I traded the darkroom for Figma.
            </p>
          </motion.div>

          {/* Node 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="absolute top-[65%] left-[5%] md:left-[20%] max-w-[200px] md:max-w-[250px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full border border-black"></div>
              <h3 className="font-bold text-lg tracking-tight">The Process</h3>
            </div>
            <p className="text-xs md:text-sm text-black/60 leading-relaxed">
              Learning the rules of UX, breaking them, and figuring out how to connect human psychology with digital interfaces.
            </p>
          </motion.div>

          {/* Node 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="absolute top-[85%] right-[10%] md:right-[25%] max-w-[200px] md:max-w-[250px] text-right"
          >
            <div className="flex items-center justify-end gap-2 mb-2">
              <h3 className="font-bold text-lg tracking-tight">The Present</h3>
              <div className="w-2 h-2 rounded-full border border-black"></div>
            </div>
            <p className="text-xs md:text-sm text-black/60 leading-relaxed">
              Now, I design products that feel inevitable. Step by step, making space for clarity and change that feels real.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
