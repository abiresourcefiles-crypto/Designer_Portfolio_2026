import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Linkedin, Twitter, Globe, Figma, Dribbble, Check, Copy, Mail } from 'lucide-react';

const bio = "I enjoy simplifying complex systems into experiences that feel clear and natural. My work spans scalable design systems, refined user flows, and research-driven prototypes always with a focus on clarity, accessibility, and real usability.";

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
      <div className="max-w-xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-black/40 mb-4">
          Abhishek &middot; Product Designer &middot; India
        </p>
        <p className="text-base text-black/60 leading-relaxed">{bio}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3">
        {["2+ Years", "Product Design", "India"].map(t => (
          <span key={t} className="border border-black/30 px-4 py-2 text-[11px] font-bold uppercase tracking-widest">
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">Recent Works</h2>
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
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-2">{p.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 md:mb-8">{p.desc}</p>
              </div>
              <div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border border-white/40 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white transition-all cursor-pointer">
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    { icon: Twitter, href: "#" },
    { icon: Figma, href: "#" },
    { icon: Dribbble, href: "#" }
  ];

  return (
    <footer className="bg-black text-white font-dm py-24 md:py-48 px-6 md:px-8 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.4em] opacity-60 mb-8 italic">The final chapter.</div>
          <h2 className="text-3xl md:text-7xl font-bold tracking-tight mb-12 md:mb-16 leading-[1.1]">
            From visuals to products. <br /> Let’s create what’s next.
          </h2>

          <button
            onClick={copyEmail}
            className="group relative inline-flex items-center gap-2 md:gap-4 px-6 md:px-12 py-4 md:py-6 bg-white text-black font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white/90 transition-all overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/50 rounded-sm"
          >
            <span className="relative z-10">{copied ? "Copied" : "abhishekdesignspace@gmail.com"}</span>
            {copied ? <Check className="w-4 h-4 relative z-10" /> : <Mail className="w-4 h-4 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity" />}
          </button>
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

          <div className="text-[11px] font-bold uppercase tracking-[0.5em] opacity-40">
            © 2026  <br></br>
            <br></br>
            <br></br>
            Learn - Unlearn - Relearn          </div>
        </div>
      </div>
    </footer>
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
          <h2 className="text-[11px] md:text-sm font-bold tracking-widest mb-4 md:mb-6 uppercase text-white/60">Experience</h2>
          <p className="text-lg md:text-2xl text-white/80">somehow convinced real people to trust me with their products</p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-16 focus-within:ring-2 focus-within:ring-white/20 p-2 -m-2 rounded-sm transition-all">
              <div className="md:w-1/4 text-[11px] font-mono uppercase tracking-[0.2em] text-white/60 md:pt-1">
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

function Gallery() {
  const photos = [
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", rot: "-rotate-6" },
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop", rot: "rotate-3" },
    { src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop", rot: "-rotate-12" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", rot: "rotate-6" },
    { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop", rot: "-rotate-3" }
  ];

  return (
    <section className="bg-[#050505] text-white font-dm pt-20 pb-12 md:pt-32 md:pb-16 overflow-hidden relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 md:px-24 mb-12 md:mb-24">
        <h2 className="text-[11px] md:text-sm font-bold tracking-widest mb-4 md:mb-6 uppercase text-white/60">Life & Culture</h2>
        <p className="text-lg md:text-2xl text-white/80">Behind the scenes.</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 px-4 h-auto md:h-72 mt-8 md:mt-12 group">
        {photos.map((photo, i) => (
          <div
            key={i}
            tabIndex={0}
            className={`relative w-24 h-32 md:h-auto md:w-56 aspect-[4/5] md:-mx-8 border-[4px] md:border-8 border-white bg-white shadow-2xl rounded-sm transition-all duration-500 hover:z-50 hover:-translate-y-4 md:hover:-translate-y-12 hover:scale-110 hover:rotate-0 focus:z-50 focus:scale-110 focus:rotate-0 focus:outline-none cursor-pointer ${photo.rot}`}
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={photo.src}
                alt={`Culture and Life gallery moment ${i + 1}`}
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        ))}
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
        <p className="text-[11px] md:text-sm text-white/70">A Comprehensive Collection of Useful Tools to Support and Optimize My Workflow.</p>
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