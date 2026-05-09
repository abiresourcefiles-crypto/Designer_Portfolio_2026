import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Linkedin, Twitter, Globe, Figma, Dribbble, Check, Copy, Mail } from 'lucide-react';

const bio = (
  <>
    Expectation teaches fast, reality teaches harder, and most of life becomes <br className="hidden md:block" />
    learning, unlearning, and relearning things you once thought were absolute truth.
  </>
);
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
      className="min-h-screen bg-[#F5F4F0] text-black font-dm flex flex-col items-center justify-center gap-10 px-8 text-center"
    >
      {/* Animated prefix — fixed width so LEARN never shifts */}
      <div className="text-[20vw] md:text-[14vw] font-bold leading-none tracking-tighter uppercase flex items-center select-none">
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
      <div className="max-w-4xl">
        <p className="text-[12px] font-bold text-black/40 mb-4 leading-loose">
          Abhishek &middot;{' '}
          <span className="relative inline-block whitespace-nowrap px-1">
            <span
              className="absolute inset-0 bg-[#FDE047] transform -skew-x-6 -rotate-1 scale-x-105 scale-y-110 opacity-90"
              style={{ borderRadius: '2px 8px 3px 6px' }}
            ></span>
            <span className="relative text-black">Photographer turned into a Designer</span>
          </span>{' '}
          &middot;
        </p>
        <p className="text-base text-black/60 leading-relaxed">{bio}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3">
        {["2+ Years", "Product Design", "India"].map(t => (
          <span key={t} className="border border-black/30 px-4 py-2 text-[12px] font-bold tracking-widest">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}


function CaseStudies() {
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
      link: "https://www.behance.net/gallery/247223671/Vision-20-Assistive-Tool-for-CVD-Medicos"
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
    <section className="bg-black text-white font-dm py-20 md:py-32 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Recent Works</h2>
          <div className="w-12 h-1 bg-white opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((p, i) => (
            <div key={i} className="flex flex-col h-full justify-between rounded-sm p-2 -m-2 transition-all">
              <div>
                <div className="aspect-[16/10] bg-[#111] mb-6 md:mb-8 overflow-hidden rounded-sm">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">{p.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 md:mb-8">{p.desc}</p>
              </div>
              <div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border border-white/40 text-[14px] font-bold tracking-widest hover:bg-white hover:text-black focus:outline-none transition-all cursor-pointer">
                  View Case study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-[12px] md:text-sm font-bold tracking-widest mb-4 md:mb-6 text-white/60">Experience</h2>
          <p className="text-lg md:text-2xl text-white/80">somehow convinced real people to trust me with their products</p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-16 focus-within:ring-2 focus-within:ring-white/20 p-2 -m-2 rounded-sm transition-all">
              <div className="md:w-1/4 text-[12px] font-mono tracking-[0.2em] text-white/60 md:pt-1">
                {exp.date}
              </div>
              <div className="md:w-3/4">
                <h3 className="text-lg md:text-xl font-bold mb-2 tracking-tight">{exp.role}</h3>
                <p className="text-white/70 text-[13px] md:text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <div className="max-w-4xl mx-auto px-6 md:px-16 mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-2">My Tools Stack</h2>
        <p className="text-[12px] md:text-sm text-white/70">A Comprehensive Collection of Useful Tools to Support and Optimize My Workflow.</p>
      </div>

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
              className={`w-14 h-14 md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center rounded-xl md:rounded-[1.2rem] shadow-lg font-bold text-lg md:text-xl tracking-tighter overflow-hidden ${tool.text} ${tool.border} transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer`}
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
function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "abhishekdesignspace@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-r-m/" },
    { icon: Twitter, href: "https://x.com/Abi_photography" },
    { icon: Figma, href: "#" },
    { icon: Dribbble, href: "#" },
    { icon: BehanceIcon, href: "https://www.behance.net/" }
  ];

  return (
    <footer className="bg-black text-white font-dm py-24 md:py-48 px-6 md:px-8 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[12px] md:text-[12px] font-bold tracking-[0.4em] opacity-60 mb-8 italic">The final chapter.</div>
          <h2 className="text-3xl md:text-7xl font-bold tracking-tight mb-12 md:mb-16 leading-[1.1]">
            From visuals to products. <br /> Let’s create what’s next.
          </h2>

          <div className="relative inline-block group">
            {/* Tooltip */}
            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-[#1a1a1a] text-white text-[10px] font-bold tracking-widest rounded-sm transition-all duration-200 pointer-events-none flex items-center gap-1.5 whitespace-nowrap z-20 ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
              {copied ? (
                <>
                  Copied <Check className="w-3.5 h-3.5 text-[#4ade80]" />
                </>
              ) : (
                "Click to copy"
              )}
              {/* Tooltip Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#1a1a1a]"></div>
            </div>

            <button
              onClick={copyEmail}
              className="relative inline-flex items-center gap-2 md:gap-4 px-6 md:px-12 py-4 md:py-6 bg-white text-black font-bold text-[14px] hover:bg-white/90 transition-all focus:outline-none rounded-sm"
            >
              <span className="relative z-10">abhishekdesignspace@gmail.com</span>
              <Copy className="w-4 h-4 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </motion.div>

        <div className="mt-24 md:mt-32 flex flex-col items-center gap-12 md:gap-16">
          <div className="flex gap-8 md:gap-12">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-all transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white p-2 rounded-sm"
                aria-label={`Visit Social Link ${i + 1}`}
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            ))}
          </div>

          <div className="text-[12px] font-bold opacity-40">
            © 2026  <br></br>
            <br></br>
            <br></br>
            Learn - Unlearn - Relearn          </div>
        </div>
      </div>
    </footer>
  );
}

// Separate arrays for easy adding/removing of images
export const horizontalImages = [
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1481481600465-42004245b0d0?w=800&auto=format&fit=crop&q=60"
];

export const verticalImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60"
];

// Mix and match them for the two strips
const strip1Photos = [
  { src: horizontalImages[0], type: 'horizontal' },
  { src: verticalImages[0], type: 'vertical' },
  { src: horizontalImages[1], type: 'horizontal' },
  { src: horizontalImages[2], type: 'horizontal' },
  { src: verticalImages[1], type: 'vertical' },
  { src: horizontalImages[3], type: 'horizontal' },
  { src: verticalImages[5], type: 'vertical' },
  { src: horizontalImages[4], type: 'horizontal' },
  { src: verticalImages[2], type: 'vertical' },
  { src: horizontalImages[5], type: 'horizontal' },
  { src: horizontalImages[6], type: 'horizontal' },
  { src: verticalImages[3], type: 'vertical' },
];

const strip2Photos = [
  { src: verticalImages[2], type: 'vertical' },
  { src: horizontalImages[4], type: 'horizontal' },
  { src: horizontalImages[5], type: 'horizontal' },
  { src: verticalImages[3], type: 'vertical' },
  { src: horizontalImages[6], type: 'horizontal' },
  { src: verticalImages[4], type: 'vertical' },
  { src: horizontalImages[0], type: 'horizontal' },
  { src: verticalImages[5], type: 'vertical' },
  { src: horizontalImages[1], type: 'horizontal' },
  { src: horizontalImages[2], type: 'horizontal' },
  { src: verticalImages[0], type: 'vertical' },
  { src: horizontalImages[3], type: 'horizontal' },
];

function Gallery() {
  // Quadruple the arrays to ensure a seamless infinite scrolling loop
  const roll1 = [...strip1Photos, ...strip1Photos, ...strip1Photos, ...strip1Photos];
  const roll2 = [...strip2Photos, ...strip2Photos, ...strip2Photos, ...strip2Photos];

  return (
    <section className="bg-[#f0f0f0] text-black font-dm py-16 md:py-24 border-t border-black/10 overflow-hidden relative w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Photography</h2>
        <p className="text-black/60 max-w-lg text-sm leading-relaxed">
          Moments captured on film. A brief look through the lens.
        </p>
      </div>

      <div className="w-full flex flex-col gap-16 md:gap-24 overflow-hidden relative pt-10 pb-16">

        {/* Strip 1: Right to Left */}
        <div className="w-[110%] -ml-[5%] overflow-hidden shadow-2xl relative rotate-2">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 45, repeat: Infinity }}
            className="flex h-48 md:h-72 gap-4 md:gap-8 px-4 w-max py-8 md:py-12 relative bg-[#161616]"
          >
            {/* Top Sprocket Holes */}
            <div className="absolute top-2 md:top-3 left-0 right-0 h-2 md:h-3 bg-[repeating-linear-gradient(90deg,#f0f0f0_0px,#f0f0f0_10px,transparent_10px,transparent_20px)] opacity-80" />
            {/* Bottom Sprocket Holes */}
            <div className="absolute bottom-2 md:bottom-3 left-0 right-0 h-2 md:h-3 bg-[repeating-linear-gradient(90deg,#f0f0f0_0px,#f0f0f0_10px,transparent_10px,transparent_20px)] opacity-80" />

            {roll1.map((p, i) => (
              <div key={i} className={`relative h-full flex-shrink-0 ${p.type === 'horizontal' ? 'aspect-[3/2]' : 'aspect-[2/3]'}`}>
                <img src={p.src} className="w-full h-full object-cover filter contrast-125 transition-all duration-500" />
                <div className="absolute -bottom-6 md:-bottom-8 left-0 text-[#f0f0f0] text-[8px] md:text-[10px] font-mono tracking-widest opacity-50 whitespace-nowrap">
                  KODAK PORTRA 400 • {i + 1}A
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Strip 2: Left to Right */}
        <div className="w-[110%] -ml-[5%] overflow-hidden shadow-2xl relative -rotate-2">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex h-48 md:h-72 gap-4 md:gap-8 px-4 w-max py-8 md:py-12 relative bg-[#161616]"
          >
            {/* Top Sprocket Holes */}
            <div className="absolute top-2 md:top-3 left-0 right-0 h-2 md:h-3 bg-[repeating-linear-gradient(90deg,#f0f0f0_0px,#f0f0f0_10px,transparent_10px,transparent_20px)] opacity-80" />
            {/* Bottom Sprocket Holes */}
            <div className="absolute bottom-2 md:bottom-3 left-0 right-0 h-2 md:h-3 bg-[repeating-linear-gradient(90deg,#f0f0f0_0px,#f0f0f0_10px,transparent_10px,transparent_20px)] opacity-80" />

            {roll2.map((p, i) => (
              <div key={i} className={`relative h-full flex-shrink-0 ${p.type === 'horizontal' ? 'aspect-[3/2]' : 'aspect-[2/3]'}`}>
                <img src={p.src} className="w-full h-full object-cover filter contrast-125 transition-all duration-500" />
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

export default function VariationWithCaseStudies() {
  return (
    <>
      <HeroSection />
      <CaseStudies />
      <Experience />
      <ToolsStack />
      <Gallery />
      <Footer />
    </>
  );
}