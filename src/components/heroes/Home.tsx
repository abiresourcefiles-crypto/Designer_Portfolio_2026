import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const bio = (
  <>
    Expectation teaches fast, reality teaches harder, and most of life becomes <br className="hidden md:block" />
    learning, unlearning, and relearning things you once thought were absolute truth.
  </>
);

/* ==================== HERO SECTION ==================== */
function HeroSection() {
  const [index, setIndex] = useState(0);
  const words = ["Un", "Re", ""];
  const heroRef = useRef<HTMLDivElement>(null);
  const isVisible = useRef(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let audioCtx: AudioContext | null = null;
    const playBeat = () => {
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(80, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(20, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.1);
      } catch (_) { }
    };
    const timer = setInterval(() => {
      setIndex(prev => {
        const next = (prev + 1) % words.length;
        if (next !== 2 && isVisible.current) playBeat();
        return next;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
      if (audioCtx && audioCtx.state !== 'closed') audioCtx.close();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="min-h-[calc(100vh-80px)] bg-[#F5F4F0] text-black font-dm flex flex-col items-start justify-center px-6 md:px-24 text-left py-12 w-full"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">
        {/* Animated prefix — fixed width so LEARN never shifts */}
        <div className="text-[20vw] md:text-[14vw] font-bold leading-none tracking-tighter uppercase flex items-center select-none -ml-4 md:-ml-8">
          {/* Fixed-width slot: sized to the widest prefix "Re"/"Un" */}
          <div className="relative inline-flex items-center justify-end" style={{ width: "18vw", minWidth: "18vw" }}>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={index}
                initial={{ filter: "blur(20px)", opacity: 0, scale: 2 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                exit={{ filter: "blur(20px)", opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4 }}
                className="text-black absolute right-0"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          {/* LEARN never moves — always anchored */}
          <span className="text-black">LEARN</span>
        </div>

        {/* About — inline below the animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="text-[12px] font-bold text-black/40 mb-4 leading-loose">
            Abhishek &middot;{' '}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span
                className="absolute inset-0 bg-[#FDE047] transform -skew-x-6 -rotate-1 scale-x-105 scale-y-110 opacity-90"
                style={{ borderRadius: '2px 8px 3px 6px' }}
              ></span>
              <span className="relative text-black">Photographer turned into a Designer</span>
            </span>
          </p>
          <p className="text-base md:text-xl text-black/60 leading-relaxed font-medium">{bio}</p>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-start gap-3"
        >
          {["2+ Years", "Product Design", "India"].map(t => (
            <span key={t} className="border border-black/30 px-4 py-2 text-[12px] font-bold tracking-widest">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ==================== CASE STUDIES ==================== */
function CaseStudies({ onLinkClick }: { onLinkClick: (url: string, text: string) => void }) {
  const projects = [
    {
      id: "A-501",
      title: "VISION 2.0",
      spec: "B-Grid System v4.1",
      desc: "Bridging the Gap for Healthcare Professional, Nurse, Medical Students, Doctors with Color Vision Deficiency (CVD) using Assistive Vision Technology.",
      image: "./Vision 2.0.jpg",
      link: "https://www.behance.net/gallery/247223671/Vision-20-Assistive-Tool-for-CVD-Medicos"
    },
    {
      id: "M-202",
      title: "ONE BUTTON CHANGE that's it? No!",
      spec: "Latency Logic",
      desc: "Optimized data flow visualization interface with real-time feedback loops.",
      image: "./Voice Case Study.jpg",
      link: "https://www.behance.net/gallery/246190513/A-Redesign-wont-Solve-the-Pain-Point"
    },
    /*
    {
      id: "X-990",
      title: "KINETIC UI",
      spec: "Fluid Framework",
      desc: "Motion-first design system exploring the physics of digital interactions.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2670&auto=format&fit=crop",
      link: "/kinetic-ui"
    },
    {
      id: "T-112",
      title: "STATIC OS",
      spec: "Monolith v2",
      desc: "A minimalist operating system concept designed for distraction-free workflows.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
      link: "/static-os"
    }
    */
  ];

  return (
    <section
      className="bg-black text-white font-dm py-20 md:py-32 px-6 md:px-24"
      style={{
        backgroundImage: 'radial-gradient(#222 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Recent Works</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="flex flex-col h-full justify-between rounded-sm p-2 -m-2 transition-all group"
            >
              <div>
                <div
                  className="aspect-[16/10] bg-[#111] mb-6 md:mb-8 overflow-hidden rounded-sm relative cursor-pointer"
                  onClick={() => onLinkClick(p.link, `Opening ${p.title}`)}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">{p.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 md:mb-8">{p.desc}</p>
              </div>
              <div>
                <button
                  onClick={() => onLinkClick(p.link, `Opening ${p.title}`)}
                  className="inline-block px-6 py-3 border border-white/40 text-[14px] font-bold tracking-widest hover:bg-white hover:text-black focus:outline-none transition-all duration-300 ease-[0.22,1,0.36,1] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  View Case study
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
/* ==================== EXPERIENCE ==================== */
function Experience() {
  const experiences = [
    {
      date: "AUG 24 - MAR 26",
      role: "Product Designer @ Mercemur Technologies (ZEMURIA)",
      desc: "Designing Products for AI Agents & Security"
    },
    {
      date: "SEP 23 - MAY 24",
      role: "UX UI Designer at e-Brahma",
      desc: "Made end-to-end seamless experiences in the world of Web3 & Blockchain"
    },
    {
      date: "MAY 23 - SEP 23",
      role: "UI/UX Designer Trainee at e-Brahma",
      desc: "Made things pretty, somehow it worked. Clients smiled, I cried only a little."
    },
    {
      date: "JAN 21 - JUN 21",
      role: "Graphic Designer Intern at Simmi Foundation",
      desc: "Made things pretty, somehow it worked. Clients smiled, I cried only a little."
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white font-dm py-20 md:py-32 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Experience</h2>
          <p className="text-lg md:text-2xl text-white/80">somehow convinced real people to trust me with their products</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-col gap-12 md:gap-16"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="flex flex-col md:flex-row md:items-start gap-2 md:gap-16 focus-within:ring-2 focus-within:ring-white/20 p-2 -m-2 rounded-sm transition-all"
            >
              <div className="md:w-1/4 text-[12px] font-mono tracking-[0.2em] text-white/60 md:pt-1">
                {exp.date}
              </div>
              <div className="md:w-3/4">
                <h3 className="text-lg md:text-xl font-bold mb-2 tracking-tight">{exp.role}</h3>
                <p className="text-white/70 text-[13px] md:text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
/* ==================== TOOLS STACK ==================== */
function ToolsStack() {
  const tools = [
    { name: "Notion", text: "text-white", image: "./NOTION.png", border: "border border-transparent" },
    { name: "Framer", text: "text-white", image: "./FRAMER.png", border: "border border-transparent" },
    { name: "Figma", text: "text-[#F24E1E]", image: "./FIGMA.png", border: "border border-transparent" },
    { name: "Adobe Photoshop", text: "text-black", image: "./PS.png", border: "border border-transparent" },
    { name: "Adobe Illustrator", text: "text-white", image: "./AI.png", border: "border border-transparent" },
    { name: "Antigravity", text: "text-white", image: "./ANTIGRAVITY.png", border: "border border-transparent" },
    { name: "Cursor", text: "text-white", image: "./CURSOR.png", border: "border border-transparent" },
    { name: "Claude", text: "text-white", image: "./CLAUDE.png", border: "border border-transparent" },
  ];

  // Double the array for seamless infinite marquee scroll
  const marqueeItems = [...tools, ...tools, ...tools];

  return (
    <section className="bg-[#0f0f0f] text-white font-dm py-12 md:py-16 overflow-hidden border-t border-white/10 m-2 md:m-8 rounded-2xl md:rounded-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-6 md:px-16 mb-8 md:mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">My Tools Stack</h2>
        <p className="text-[12px] md:text-sm text-white/70">A Comprehensive Collection of Useful Tools to Support and Optimize My Workflow.</p>
      </motion.div>

      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Fade Masks */}
        <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#0f0f0f] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#0f0f0f] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex gap-4 md:gap-10 px-4 w-max"
        >
          {marqueeItems.map((tool, i) => (
            <div
              key={i}
              title={tool.name}
              tabIndex={0}
              className={`w-14 h-14 md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center rounded-xl md:rounded-[1.2rem] shadow-lg font-bold text-lg md:text-xl tracking-tighter overflow-hidden ${tool.text} ${tool.border} transition-transform duration-300 ease-[0.22,1,0.36,1] hover:scale-105 focus:scale-105 focus:outline-none cursor-pointer`}
            >
              <img src={tool.image} alt={`${tool.name} Logo`} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div >
    </section >
  );
}
const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.363 14.947c0-1.848-.879-3.214-2.695-3.726 1.325-.631 2.016-1.587 2.016-3.074 0-2.932-2.192-3.647-4.721-3.647H0v14.721h7.158c2.684 0 5.205-1.283 5.205-4.274zM3.246 7.013h3.046c1.171 0 2.225.328 2.225 1.682 0 1.25-.82 1.753-1.98 1.753H3.246zm-.001 9.708v-4.054h3.538c1.429 0 2.333.594 2.333 2.102 0 1.487-1.079 1.952-2.4 1.952zM18.796 19.5c2.554 0 4.208-1.147 5.004-3.585h-2.592c-.279.91-1.429 1.391-2.321 1.391-1.721 0-2.625-1.005-2.625-2.713h7.713c.244-3.418-1.66-6.331-5.18-6.331-3.259 0-5.471 2.442-5.471 5.641 0 3.32 2.096 5.597 5.472 5.597zm-.092-9.026c1.475 0 2.217.864 2.341 2.277h-4.779c.097-1.401 1.03-2.277 2.438-2.277zM15.667 5.273h5.988v1.45h-5.988z" />
  </svg>
);

/* ==================== FOOTER ==================== */
function Footer({ onLinkClick }: { onLinkClick: (url: string, text: string) => void }) {
  const [copied, setCopied] = useState(false);
  const email = "abhishekdesignspace@gmail.com";
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Kolkata' });

  const socials = [
    { name: "Linkedin", href: "https://www.linkedin.com/in/abhishek-r-m/" },
    { name: "X", href: "https://x.com/Abi_photography" },
    { name: "Instagram", href: "#" },
    { name: "Behance", href: "https://www.behance.net/abhishekrm" },
    { name: "Dribbble", href: "#" },
    { name: "Github", href: "#" }
  ];

  return (
    <footer className="bg-black text-white font-dm py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center w-full"
        >
          <h2 className="text-3xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            From visuals to products. <br /> Let’s create what’s next.
          </h2>
        </motion.div>

        {/* 3 Column Layout */}
        <div className="w-full mt-24 md:mt-32 pt-12 md:pt-16 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-left">

          {/* Column 1: Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-bold mb-6 text-[14px] md:text-base">Wanna Stalk me?</h3>
            <ul className="flex flex-col gap-4">
              {socials.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.href}
                    onClick={(e) => {
                      if (s.href !== '#') {
                        e.preventDefault();
                        onLinkClick(s.href, `Opening ${s.name}`);
                      }
                    }}
                    className="group flex items-center gap-2 text-[14px] text-white/70 hover:text-white transition-colors w-fit"
                  >
                    {s.name} <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-[0.22,1,0.36,1]" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Local Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-bold mb-6 text-[14px] md:text-base">Local Time</h3>
            <p className="text-[14px] text-white/70 font-mono">{timeString} GMT +5:30</p>
          </motion.div>

          {/* Column 3: Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-bold mb-6 text-[14px] md:text-base">Contacts</h3>
            <a href={`mailto:${email}`} className="group relative inline-block pb-1 text-[14px] text-white/70 hover:text-white transition-colors duration-300">
              <span className="relative z-10">{email}</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:scale-x-100" />
            </a>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}

// Separate arrays for easy adding/removing of images
export const horizontalImages = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
  "/img12.jpg",
  "/img13.jpg",
  "/img14.JPG",
  "/img15.jpg",
  "/img16.jpg",
];

export const verticalImages = [
  "/imgv1.jpg",
  "/imgv2.jpg",
  "/imgv3.jpg",
  "/imgv4.JPG",
];

// Mix and match them for the two strips
const strip1Photos = [
  { src: horizontalImages[0], type: 'horizontal' },
  { src: verticalImages[0], type: 'vertical' },
  { src: horizontalImages[1], type: 'horizontal' },
  { src: horizontalImages[2], type: 'horizontal' },
  { src: horizontalImages[3], type: 'horizontal' },
  { src: verticalImages[1], type: 'vertical' },
  { src: horizontalImages[4], type: 'horizontal' },
  { src: horizontalImages[5], type: 'horizontal' },
  { src: horizontalImages[6], type: 'horizontal' },
  { src: verticalImages[2], type: 'vertical' },
  { src: horizontalImages[7], type: 'horizontal' },
  { src: horizontalImages[8], type: 'horizontal' },
  { src: horizontalImages[9], type: 'horizontal' },
  { src: verticalImages[3], type: 'vertical' },
  { src: horizontalImages[10], type: 'horizontal' },
  { src: horizontalImages[11], type: 'horizontal' },
  { src: horizontalImages[12], type: 'horizontal' },
  { src: horizontalImages[13], type: 'horizontal' },
  { src: horizontalImages[14], type: 'horizontal' },
  { src: horizontalImages[15], type: 'horizontal' },
];

const strip2Photos = [
  { src: horizontalImages[14], type: 'horizontal' },
  { src: horizontalImages[13], type: 'horizontal' },
  { src: horizontalImages[12], type: 'horizontal' },
  { src: verticalImages[3], type: 'vertical' },
  { src: horizontalImages[11], type: 'horizontal' },
  { src: horizontalImages[10], type: 'horizontal' },
  { src: horizontalImages[9], type: 'horizontal' },
  { src: horizontalImages[15], type: 'horizontal' },
  { src: verticalImages[2], type: 'vertical' },
  { src: horizontalImages[8], type: 'horizontal' },
  { src: horizontalImages[7], type: 'horizontal' },
  { src: horizontalImages[6], type: 'horizontal' },
  { src: verticalImages[1], type: 'vertical' },
  { src: horizontalImages[5], type: 'horizontal' },
  { src: horizontalImages[4], type: 'horizontal' },
  { src: horizontalImages[3], type: 'horizontal' },
  { src: verticalImages[0], type: 'vertical' },
  { src: horizontalImages[2], type: 'horizontal' },
  { src: horizontalImages[1], type: 'horizontal' },
  { src: horizontalImages[0], type: 'horizontal' },
];
/* ==================== GALLERY ==================== */
function Gallery() {
  // Quadruple the arrays to ensure a seamless infinite scrolling loop
  const roll1 = [...strip1Photos, ...strip1Photos, ...strip1Photos, ...strip1Photos];
  const roll2 = [...strip2Photos, ...strip2Photos, ...strip2Photos, ...strip2Photos];

  return (
    <section className="bg-[#f0f0f0] text-black font-dm py-16 md:py-24 border-t border-black/10 overflow-hidden relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-12 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Photography</h2>
        <p className="text-black/60 max-w-lg text-sm leading-relaxed">
          Moments captured on film. A brief look through the lens.
        </p>
      </motion.div>

      <div className="w-full flex flex-col gap-16 md:gap-24 overflow-hidden relative pt-10 pb-16">

        {/* Strip 1: Right to Left */}
        <div className="w-[110%] -ml-[5%] overflow-hidden shadow-2xl relative rotate-2 bg-[#161616] py-8 md:py-12">
          {/* Top Sprocket Holes */}
          <div className="absolute top-2 md:top-3 left-0 right-0 h-2 md:h-3 bg-[repeating-linear-gradient(90deg,#f0f0f0_0px,#f0f0f0_10px,transparent_10px,transparent_20px)] opacity-80 z-10" />
          {/* Bottom Sprocket Holes */}
          <div className="absolute bottom-2 md:bottom-3 left-0 right-0 h-2 md:h-3 bg-[repeating-linear-gradient(90deg,#f0f0f0_0px,#f0f0f0_10px,transparent_10px,transparent_20px)] opacity-80 z-10" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 100, repeat: Infinity }}
            className="flex h-48 md:h-72 gap-4 md:gap-8 px-4 w-max relative"
          >
            {roll1.map((p, i) => (
              <div key={i} className={`relative h-full flex-shrink-0 ${p.type === 'horizontal' ? 'aspect-[3/2]' : 'aspect-[2/3]'}`}>
                <img src={p.src} className="w-full h-full object-cover transition-all duration-500" style={{ filter: "sepia(40%) contrast(115%) brightness(90%) saturate(120%) hue-rotate(-10deg)" }} />
                <div className="absolute -bottom-6 md:-bottom-8 left-0 text-[#f0f0f0] text-[8px] md:text-[10px] font-mono tracking-widest opacity-50 whitespace-nowrap">
                  KODAK PORTRA 400 • {i + 1}A
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Strip 2: Left to Right */}
        <div className="w-[110%] -ml-[5%] overflow-hidden shadow-2xl relative -rotate-2 bg-[#161616] py-8 md:py-12">
          {/* Top Sprocket Holes */}
          <div className="absolute top-2 md:top-3 left-0 right-0 h-2 md:h-3 bg-[repeating-linear-gradient(90deg,#f0f0f0_0px,#f0f0f0_10px,transparent_10px,transparent_20px)] opacity-80 z-10" />
          {/* Bottom Sprocket Holes */}
          <div className="absolute bottom-2 md:bottom-3 left-0 right-0 h-2 md:h-3 bg-[repeating-linear-gradient(90deg,#f0f0f0_0px,#f0f0f0_10px,transparent_10px,transparent_20px)] opacity-80 z-10" />

          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 85, repeat: Infinity }}
            className="flex h-48 md:h-72 gap-4 md:gap-8 px-4 w-max relative"
          >
            {roll2.map((p, i) => (
              <div key={i} className={`relative h-full flex-shrink-0 ${p.type === 'horizontal' ? 'aspect-[3/2]' : 'aspect-[2/3]'}`}>
                <img src={p.src} className="w-full h-full object-cover transition-all duration-500" style={{ filter: "sepia(40%) contrast(115%) brightness(90%) saturate(120%) hue-rotate(-10deg)" }} />
                <div className="absolute -bottom-6 md:-bottom-8 right-0 text-[#f0f0f0] text-[8px] md:text-[10px] font-mono tracking-widest opacity-50 whitespace-nowrap">
                  ILFORD HP5 • {i + 12}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default function VariationWithCaseStudies({ onLinkClick }: { onLinkClick: (url: string, text: string) => void }) {
  return (
    <>
      <HeroSection />
      <CaseStudies onLinkClick={onLinkClick} />
      <Experience />
      <ToolsStack />
      <Gallery />
      <Footer onLinkClick={onLinkClick} />
    </>
  );
}