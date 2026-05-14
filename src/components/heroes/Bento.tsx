import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

/* ─── IMAGE ASSETS ───────────────────────────────────────────── */
const imgProfile = "/Abi.png";
const imgAI = "/AI.png";
const imgAntigravity = "/ANTIGRAVITY.png";
const imgClaude = "/CLAUDE.png";
const imgCursor = "/CURSOR.png";
const imgFigma = "/FIGMA.png";
const imgFramer = "/FRAMER.png";
const imgNotion = "/NOTION.png";
const imgPS = "/PS.png";

const imgFrame21 = "http://localhost:3845/assets/5e64e0e68d03c3481570075dcecfaf14b717eae0.png"; // Fallback noise texture
const imgVerticalLines = "http://localhost:3845/assets/c4378fb68b669a4bb3eafafff7c353b1df88e1ad.svg";
const imgHorizontalLines = "http://localhost:3845/assets/851607fba2a281bf94351ddeb829c04b6d30ea7a.svg";

export default function BentoLayout({ onLinkClick }: { onLinkClick: (url: string, text: string) => void }) {
  const [time, setTime] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  const carouselImages = [
    "/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg",
    "/img6.jpg", "/img7.jpg", "/img8.jpg", "/img9.jpg", "/img10.jpg",
    "/img11.jpg", "/img12.jpg", "/img13.jpg", "/img14.JPG", "/img15.jpg", "/img16.jpg",
    "/imgv1.jpg", "/imgv2.jpg", "/imgv3.jpg", "/imgv4.JPG"
  ];
  const marqueeImages = [...carouselImages, ...carouselImages];

  // Image Viewer state
  const [showControls, setShowControls] = useState(true);
  const [isHoveringControls, setIsHoveringControls] = useState(false);
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') setSelectedImage((prev) => (prev! + 1) % carouselImages.length);
      if (e.key === 'ArrowLeft') setSelectedImage((prev) => (prev! - 1 + carouselImages.length) % carouselImages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Auto-hide controls
  useEffect(() => {
    if (selectedImage === null) return;
    let timeout: NodeJS.Timeout;
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timeout);
      if (!isHoveringControls) {
        timeout = setTimeout(() => setShowControls(false), 2500);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    timeout = setTimeout(() => setShowControls(false), 2500);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, [selectedImage, isHoveringControls]);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (selectedImage !== null && thumbnailRefs.current[selectedImage]) {
      thumbnailRefs.current[selectedImage]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [selectedImage]);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSplash]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <>
      {/* Background fades out slowly */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash-bg"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[190] bg-white pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Hand unmounts instantly to trigger layoutId flight */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash-hand"
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center pointer-events-none"
          >
            <motion.div
              layoutId="waving-hand"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: [0, 15, -10, 15, -10, 0]
              }}
              transition={{
                scale: { type: "spring", damping: 15, stiffness: 200 },
                rotate: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-[120px] origin-bottom-right"
            >
              👋
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full min-h-[calc(100vh-80px)] bg-white py-10 px-4 md:px-8 font-dm">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-24 gap-4">

          {/* ==================== ROW 1 ==================== */}

          {/* CARD: BIO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-12 bg-[#111] rounded-[16px] relative overflow-hidden h-[300px] p-8 flex flex-col justify-center group/bio"
          >
            <img src={imgVerticalLines} alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] max-w-none object-cover opacity-50 pointer-events-none" />
            <img src={imgHorizontalLines} alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] max-w-none object-cover opacity-50 pointer-events-none" />

            {/* Ambient glow that blooms on hover */}
            <div className="absolute right-0 bottom-0 w-[340px] h-[340px] rounded-full bg-[#f97d18]/0 group-hover/bio:bg-[#f97d18]/10 blur-[60px] transition-all duration-700 pointer-events-none" />

            {/* Halo ring that pulses in on hover */}
            <motion.div
              className="absolute right-[80px] top-[40px] w-[200px] h-[200px] rounded-full border border-white/0 group-hover/bio:border-white/10 pointer-events-none hidden sm:block"
              animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-[55px] top-[18px] w-[250px] h-[250px] rounded-full border border-[#f97d18]/0 group-hover/bio:border-[#f97d18]/15 pointer-events-none hidden sm:block transition-all duration-500"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Profile image with float + hover lift */}
            <motion.img
              src={imgProfile}
              alt=""
              className="absolute right-[-6px] top-[-8px] w-[312px] h-[416px] object-cover object-top pointer-events-none hidden sm:block"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
              whileHover={{ scale: 1.04, y: -12, filter: "drop-shadow(0 32px 64px rgba(249,125,24,0.25)) drop-shadow(0 0 0 rgba(0,0,0,0))", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
            />

            <div className="relative z-10 max-w-[370px] flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="text-white text-[20px] font-normal leading-tight flex items-center">
                  hi
                  <div className="w-[30px] h-[30px] mx-1 flex items-center justify-center relative">
                    {!showSplash && (
                      <motion.div
                        layoutId="waving-hand"
                        className="absolute origin-bottom-right inline-block cursor-default"
                        whileHover={{ rotate: [0, 20, -10, 20, 0], transition: { duration: 0.5 } }}
                        transition={{ layout: { type: "spring", stiffness: 350, damping: 25 } }}
                      >
                        👋
                      </motion.div>
                    )}
                  </div>
                  , this is
                </div>
                <div className="flex items-center h-[46px] w-fit group/logo cursor-pointer">
                  <svg width="228" height="46" viewBox="0 0 228 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto object-contain">
                    <g clipPath="url(#clip0_2193_2034)">
                      <path d="M65.6379 25.4694C64.9272 24.4538 63.5689 23.7239 61.5632 23.2795C63.3636 22.8828 64.5639 22.3115 65.1799 21.5657C65.7958 20.8199 66.0959 19.5028 66.0959 17.6302C66.0959 14.8373 65.6695 12.822 64.8008 11.5684C63.9322 10.3147 62.7951 9.48954 61.3894 9.07695C60.0154 8.68023 57.9938 8.47394 55.3563 8.45807H45.7065V20.7564H43.5901C43.7955 15.1706 42.3898 10.4575 39.3891 6.58555C35.9619 2.18989 31.0659 0 24.6695 0C20.3105 0 16.4569 1.58688 13.1086 4.77651C9.77619 7.95027 8.10208 11.4731 8.10208 15.3451C8.10208 15.8688 8.13367 16.3925 8.18105 16.9161H19.0786C18.968 16.3925 18.9206 15.8688 18.9206 15.3451C18.9206 13.5678 19.5524 12.1396 20.8317 11.0764C22.0951 10.0132 23.5639 9.47367 25.2223 9.47367C28.1283 9.47367 30.3078 10.3306 31.7608 12.0603C33.2138 13.79 34.114 16.6781 34.4773 20.7564H0.157935C0.0473806 21.8989 0 23.0098 0 24.1047C0 30.5157 1.86364 35.7048 5.55932 39.6403C9.2708 43.5757 14.0247 45.5435 19.8525 45.5435C25.6171 45.5435 30.4973 44.2263 34.5247 41.5921C38.552 38.9579 41.3317 35.0224 42.8952 29.8175H45.6907V40.7035H55.3405H56.5408C60.0312 40.7035 62.3371 40.513 63.4584 40.1322C64.5797 39.7513 65.401 39.0214 65.9222 37.974C66.4434 36.9267 66.6961 35.3081 66.6961 33.1341V30.1507C66.7119 28.0402 66.3486 26.485 65.6379 25.4694ZM28.76 34.832C26.8648 36.0857 24.6221 36.7045 22.032 36.7045C19.3313 36.7045 17.0254 36.1015 15.0986 34.9114C12.9665 33.6577 11.7978 31.9598 11.5924 29.8175H32.5347C31.9187 31.9122 30.6552 33.5784 28.76 34.832ZM58.0412 32.1819C58.0412 33.4832 57.8675 34.3083 57.5358 34.6257C57.2199 34.9431 56.4777 35.1335 55.3563 35.1811C55.3089 35.1811 55.2616 35.1811 55.1984 35.1811V26.1518C55.2458 26.1518 55.3089 26.1518 55.3563 26.1518C56.5566 26.1994 57.2989 26.3581 57.599 26.6437C57.8991 26.9294 58.057 27.7704 58.057 29.151V32.1819H58.0412ZM57.678 20.5184C57.4411 20.9309 56.9041 21.1214 56.0512 21.1214C55.8775 21.1214 55.6406 21.1214 55.3405 21.1372C55.2931 21.1372 55.2458 21.1372 55.1826 21.1372V13.9804C55.23 13.9804 55.2931 13.9804 55.3405 13.9804C56.146 13.9963 56.6988 14.0598 56.983 14.155C57.2989 14.2661 57.5358 14.52 57.7411 14.9167C57.9307 15.3293 58.0254 16.0275 58.0254 17.0431C58.0412 18.9473 57.9149 20.1058 57.678 20.5184Z" fill="white" />
                    </g>
                    <path d="M91.2765 40.9492V8.74922H98.1765V40.9492H91.2765ZM71.0825 40.9492V8.74922H77.9825V40.9492H71.0825ZM77.1085 27.2872V21.7212H92.3805V27.2872H77.1085ZM103.104 40.9492V8.74922H110.004V40.9492H103.104ZM126.272 41.5012C123.972 41.5012 121.887 41.1179 120.016 40.3512C118.176 39.5539 116.72 38.3886 115.646 36.8552C114.573 35.3219 113.99 33.4359 113.898 31.1972H121.258C121.289 32.0866 121.519 32.8686 121.948 33.5432C122.378 34.2179 122.96 34.7546 123.696 35.1532C124.432 35.5212 125.291 35.7052 126.272 35.7052C127.1 35.7052 127.821 35.5826 128.434 35.3372C129.078 35.0612 129.584 34.6779 129.952 34.1872C130.32 33.6659 130.504 33.0219 130.504 32.2552C130.504 31.4579 130.29 30.7832 129.86 30.2312C129.431 29.6486 128.848 29.1579 128.112 28.7592C127.376 28.3299 126.518 27.9466 125.536 27.6092C124.586 27.2412 123.558 26.8886 122.454 26.5512C119.909 25.7232 117.946 24.6039 116.566 23.1932C115.217 21.7826 114.542 19.8966 114.542 17.5352C114.542 15.5726 115.018 13.9012 115.968 12.5212C116.95 11.1106 118.284 10.0372 119.97 9.30122C121.657 8.56522 123.574 8.19722 125.72 8.19722C127.928 8.19722 129.876 8.58055 131.562 9.34722C133.249 10.0832 134.583 11.1719 135.564 12.6132C136.546 14.0239 137.067 15.7105 137.128 17.6732H129.722C129.692 16.9986 129.492 16.3852 129.124 15.8332C128.787 15.2812 128.312 14.8366 127.698 14.4992C127.116 14.1619 126.426 13.9932 125.628 13.9932C124.923 13.9626 124.279 14.0699 123.696 14.3152C123.144 14.5299 122.684 14.8826 122.316 15.3732C121.979 15.8332 121.81 16.4159 121.81 17.1212C121.81 17.7959 121.979 18.3939 122.316 18.9152C122.684 19.4059 123.175 19.8352 123.788 20.2032C124.432 20.5406 125.168 20.8626 125.996 21.1692C126.855 21.4759 127.79 21.7826 128.802 22.0892C130.428 22.6412 131.915 23.3006 133.264 24.0672C134.644 24.8032 135.748 25.7846 136.576 27.0112C137.435 28.2072 137.864 29.8019 137.864 31.7952C137.864 33.5432 137.404 35.1532 136.484 36.6252C135.595 38.0972 134.292 39.2779 132.574 40.1672C130.888 41.0566 128.787 41.5012 126.272 41.5012ZM162.051 40.9492V8.74922H168.951V40.9492H162.051ZM141.857 40.9492V8.74922H148.757V40.9492H141.857ZM147.883 27.2872V21.7212H163.155V27.2872H147.883ZM173.879 40.9492V8.74922H195.453V14.3152H180.779V21.9052H194.073V27.2412H180.779V35.3832H195.453V40.9492H173.879ZM199.701 40.9492V8.74922H206.601V20.9392L217.733 8.74922H226.197L214.375 21.4912L226.611 40.9492H218.147L209.453 26.8272L206.601 29.9092V40.9492H199.701Z" fill="#FF7200" />
                    <defs>
                      <clipPath id="clip0_2193_2034">
                        <rect width="66.7119" height="45.5593" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-[12px] text-white/75 leading-relaxed mt-2 max-w-[90%] sm:max-w-full">
                  Everything in this world is adapting the things based on the Surroundings and facts. Relearning the fact that change is the reality there is nothing <strong className="font-bold text-white">wrong/right</strong> everything is based on the facts of individual it depends.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap mt-2">
                {['3 Years', 'Product Design', 'India'].map(tag => (
                  <span key={tag} className="bg-[#f97d18] text-black text-[12px] font-medium px-3 py-1 rounded-[4px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD: TOOLS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 bg-white border border-black/15 rounded-[16px] relative overflow-hidden h-[300px] flex flex-col items-center justify-center group"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[10%] left-[10%] rotate-[29deg] w-[40px] h-[40px] rounded-[8px] overflow-hidden border border-black/10 shadow-sm transition-transform group-hover:scale-110"><img src={imgAI} className="w-full h-full object-cover" alt="AI" /></div>
              <div className="absolute top-[25%] right-[15%] -rotate-[24deg] w-[40px] h-[40px] rounded-[8px] overflow-hidden border border-black/10 shadow-sm transition-transform group-hover:scale-110"><img src={imgAntigravity} className="w-full h-full object-cover" alt="Antigravity" /></div>
              <div className="absolute bottom-[20%] left-[20%] rotate-[-30deg] w-[40px] h-[40px] rounded-[8px] overflow-hidden border border-black/10 shadow-sm transition-transform group-hover:scale-110"><img src={imgClaude} className="w-full h-full object-cover" alt="Claude" /></div>
              <div className="absolute bottom-[15%] right-[25%] rotate-[14deg] w-[40px] h-[40px] rounded-[8px] overflow-hidden border border-black/10 shadow-sm transition-transform group-hover:scale-110"><img src={imgCursor} className="w-full h-full object-cover" alt="Cursor" /></div>
              <div className="absolute top-[45%] left-[5%] rotate-[18deg] w-[40px] h-[40px] rounded-[8px] overflow-hidden border border-black/10 shadow-sm transition-transform group-hover:scale-110"><img src={imgFigma} className="w-full h-full object-cover" alt="Figma" /></div>
              <div className="absolute top-[55%] right-[10%] rotate-[28deg] w-[40px] h-[40px] rounded-[8px] overflow-hidden border border-black/10 shadow-sm transition-transform group-hover:scale-110"><img src={imgFramer} className="w-full h-full object-cover" alt="Framer" /></div>
              <div className="absolute bottom-[40%] left-[15%] rotate-[-14deg] w-[40px] h-[40px] rounded-[8px] overflow-hidden border border-black/10 shadow-sm transition-transform group-hover:scale-110"><img src={imgNotion} className="w-full h-full object-cover" alt="Notion" /></div>
              <div className="absolute top-[10%] right-[40%] rotate-[5deg] w-[40px] h-[40px] rounded-[8px] overflow-hidden border border-black/10 shadow-sm transition-transform group-hover:scale-110"><img src={imgPS} className="w-full h-full object-cover" alt="Photoshop" /></div>
              <div className="absolute top-[35%] left-[45%] rotate-[-10deg] w-[40px] h-[40px] rounded-[8px] overflow-hidden border border-black/10 shadow-sm transition-transform group-hover:scale-110"><img src={imgFigma} className="w-full h-full object-cover" alt="Figma" /></div>
            </div>

            <div className="relative z-10 flex flex-col items-center mt-6 pointer-events-none">
              <h2 className="text-[56px] font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-black to-[#666] leading-[1.1]">Tools</h2>
              <p className="text-black text-[16px] tracking-tight">which i use day today</p>
            </div>
          </motion.div>

          {/* CARD: EXPERIENCE & TIME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 bg-white border border-black/15 rounded-[16px] relative overflow-hidden h-[300px] p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-black/40 uppercase">Local Time</span>
              </div>
              <div className="text-[32px] font-bold tracking-tight tabular-nums">{timeString}</div>
              <div className="text-[10px] font-mono text-black/40 mt-1">GMT +5:30 • INDIA</div>
            </div>

            <div className="mt-auto pt-8 text-left">
              <div className="text-[10px] font-mono tracking-widest text-black/40 uppercase mb-3">Latest Role</div>
              <div className="text-[14px] font-bold leading-tight">Product Designer</div>
              <div className="text-[12px] text-black/60">@ Mercemur Technologies</div>
            </div>
          </motion.div>

          {/* ==================== ROW 2 ==================== */}

          {/* CARD: VISION 2.0 CASE STUDY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => onLinkClick("https://www.behance.net/gallery/247223671/Vision-20-Assistive-Tool-for-CVD-Medicos", "Opening Case Study")}
            className="lg:col-span-7 bg-white border border-black/15 rounded-[16px] relative overflow-hidden h-[280px] group cursor-pointer"
          >
            <img
              src="/Vision 2.0.jpg"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Vision 2.0 Project"
            />
          </motion.div>

          {/* CARD: ONE BUTTON CHANGE CASE STUDY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => onLinkClick("https://www.behance.net/gallery/246190513/A-Redesign-wont-Solve-the-Pain-Point", "Opening Case Study")}
            className="lg:col-span-7 bg-white border border-black/15 rounded-[16px] relative overflow-hidden h-[280px] group cursor-pointer"
          >
            <img
              src="/Voice Case Study.jpg"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="One Button Change Project"
            />
          </motion.div>

          {/* CARD: PICTURES MARQUEE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-10 bg-white border border-black/15 rounded-[16px] relative overflow-hidden h-[280px] flex flex-col justify-end p-8 pb-10"
          >
            <div className="absolute top-[22px] left-0 w-full h-[126px] overflow-hidden flex items-center">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 5, repeat: Infinity }}
                className="flex gap-4 px-6 w-max cursor-pointer"
              >
                {marqueeImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    onClick={() => setSelectedImage(i % carouselImages.length)}
                    className="h-[126px] w-auto object-cover rounded-[8px] shadow-sm hover:scale-[1.02] transition-transform duration-300 pointer-events-auto"
                    alt=""
                  />
                ))}
              </motion.div>
            </div>

            <div className="absolute top-0 left-0 h-[200px] w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-[200px] w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col relative z-20 items-center justify-center pointer-events-none mt-auto">
              <h2 className="text-[56px] font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-black to-[#666] leading-[1.1] text-center">Pictures</h2>
              <p className="text-black text-[16px] tracking-tight">which is my journal</p>
            </div>
          </motion.div>

        </div>

        {/* ==================== FOOTER ==================== */}
        {/* SOCIALS FOOTER - Moved outside max-width container for full-width line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full border-t border-black/10 mt-12 min-h-[120px] relative overflow-hidden flex items-center justify-center bg-white"
        >
          <img src={imgFrame21} className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none" alt="" />
          <div className="relative z-10 flex flex-wrap justify-center gap-6 sm:gap-12 px-4 py-8">
            {[
              { name: 'Linkedin', href: 'https://www.linkedin.com/in/abhishek-r-m/' },
              { name: 'Behance', href: 'https://www.behance.net/abhishekrm' },
              { name: 'X / Twitter', href: 'https://x.com/Abi_photography' },
              { name: 'Medium', href: 'https://medium.com/@abhishekdesignspace' },
              { name: 'Instagram', href: '#' },
              { name: 'Dribbble', href: '#' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href !== '#') {
                    e.preventDefault();
                    onLinkClick(link.href, `Opening ${link.name}`);
                  }
                }}
                className="flex items-center gap-2 group text-black/75 hover:text-black transition-all duration-300"
              >
                <span className="text-[12px] font-normal">{link.name}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-[0.22,1,0.36,1]" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* IMAGE VIEWER MODAL */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]/95 font-dm select-none"
              onClick={() => setSelectedImage(null)}
              onMouseMove={() => setShowControls(true)}
            >

              {/* TOP CONTROLS (Auto-hide) */}
              <motion.div
                animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 inset-x-0 h-24 flex items-start justify-between p-6 sm:p-8 z-50 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"
              >
                {/* Image Counter */}
                <div className="text-white/60 text-[13px] tracking-wide font-medium mt-2 pointer-events-auto">
                  {selectedImage + 1} / {carouselImages.length}
                </div>

                {/* Right Actions */}
                <div
                  className="flex items-center gap-3 sm:gap-6 pointer-events-auto"
                  onMouseEnter={() => setIsHoveringControls(true)}
                  onMouseLeave={() => setIsHoveringControls(false)}
                  onClick={(e) => e.stopPropagation()}
                >

                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-pointer"
                    title="Close (Esc)"
                  >
                    <X strokeWidth={1} className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>

              {/* CENTER NAVIGATION (Prev / Next) */}
              <motion.button
                animate={{ opacity: showControls ? 1 : 0 }}
                onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage - 1 + carouselImages.length) % carouselImages.length); }}
                onMouseEnter={() => setIsHoveringControls(true)}
                onMouseLeave={() => setIsHoveringControls(false)}
                className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-white/50 hover:text-white hover:scale-105 transition-all z-50 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md cursor-pointer"
              >
                <ChevronLeft strokeWidth={1} className="w-8 h-8 -ml-1" />
              </motion.button>

              <motion.button
                animate={{ opacity: showControls ? 1 : 0 }}
                onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage + 1) % carouselImages.length); }}
                onMouseEnter={() => setIsHoveringControls(true)}
                onMouseLeave={() => setIsHoveringControls(false)}
                className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-white/50 hover:text-white hover:scale-105 transition-all z-50 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md cursor-pointer"
              >
                <ChevronRight strokeWidth={1} className="w-8 h-8 -mr-1" />
              </motion.button>

              {/* MAIN IMAGE WORKSPACE */}
              <div
                className="relative w-full h-full flex-1 flex justify-center items-center overflow-hidden"
              >
                <motion.img
                  src={carouselImages[selectedImage]}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="max-h-[85vh] max-w-[95vw] object-contain cursor-default"
                  alt=""
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Mobile Navigation controls overlaid on image area */}
                <motion.div
                  animate={{ opacity: showControls ? 1 : 0 }}
                  className="absolute inset-x-2 flex justify-between sm:hidden top-1/2 -translate-y-1/2 pointer-events-none z-50"
                >
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage - 1 + carouselImages.length) % carouselImages.length); }}
                    className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 shadow-lg pointer-events-auto active:bg-black/40 cursor-pointer"
                  >
                    <ChevronLeft strokeWidth={1.5} className="w-6 h-6 -ml-1" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage + 1) % carouselImages.length); }}
                    className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 shadow-lg pointer-events-auto active:bg-black/40 cursor-pointer"
                  >
                    <ChevronRight strokeWidth={1.5} className="w-6 h-6 -mr-1" />
                  </button>
                </motion.div>
              </div>

              {/* BOTTOM THUMBNAIL STRIP */}
              <motion.div
                animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 inset-x-0 pb-6 pt-16 flex flex-col items-center justify-end z-50 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"
              >
                <div
                  className="w-full max-w-5xl overflow-x-auto px-4 py-4 flex items-center justify-center shrink-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pointer-events-auto"
                  onMouseEnter={() => setIsHoveringControls(true)}
                  onMouseLeave={() => setIsHoveringControls(false)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex gap-[4px] m-auto" ref={thumbnailsContainerRef}>
                    {carouselImages.map((src, i) => (
                      <div
                        key={i}
                        ref={(el) => { thumbnailRefs.current[i] = el; }}
                        onClick={() => setSelectedImage(i)}
                        className={`relative h-[56px] w-[90px] shrink-0 rounded-[6px] cursor-pointer transition-all duration-300 ${i === selectedImage ? 'ring-2 ring-sky-500 bg-[#1a1a1a] p-[2px] opacity-100 scale-110 z-10' : 'opacity-20 hover:opacity-50'}`}
                      >
                        <img src={src} className="w-full h-full object-contain rounded-[4px]" alt="" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Scroller / Progress Indicator */}
                <div 
                  className="mt-6 w-32 sm:w-48 h-[12px] flex items-center cursor-pointer pointer-events-auto group"
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const percentage = x / rect.width;
                    const index = Math.floor(percentage * carouselImages.length);
                    setSelectedImage(Math.min(Math.max(index, 0), carouselImages.length - 1));
                  }}
                  onMouseEnter={() => setIsHoveringControls(true)}
                  onMouseLeave={() => setIsHoveringControls(false)}
                >
                  <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div 
                      className="h-full bg-white/40 rounded-full group-hover:bg-white/60 transition-colors"
                      initial={false}
                      animate={{ 
                        width: `${(1 / carouselImages.length) * 100}%`,
                        x: `${(selectedImage || 0) * 100}%` 
                      }}
                      transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    />
                  </div>
                </div>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
