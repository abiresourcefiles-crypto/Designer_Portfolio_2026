import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Linkedin, Twitter, Globe, Figma, Dribbble, Check, Copy, Mail } from 'lucide-react';

function Variation9() {
  const [index, setIndex] = useState(0);
  const words = ["Un", "Re", ""];
  const heroRef = useRef<HTMLDivElement>(null);
  const isVisible = useRef(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0.1 } // triggers when at least 10% of hero is visible
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let audioCtx: AudioContext | null = null;

    const playBeat = () => {
      try {
        if (!audioCtx) {
          audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        // Deep, subtle thud/heartbeat
        osc.type = 'sine';
        osc.frequency.setValueAtTime(80, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(20, audioCtx.currentTime + 0.1);
        
        // Very low volume, quick fade out
        gain.gain.setValueAtTime(0, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.1);
      } catch (e) {
        // Silently fail if browser blocks audio before interaction
      }
    };

    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % words.length;
        if (next !== 2 && isVisible.current) { // Only play beat when text is actually appearing and hero is visible
          playBeat();
        }
        return next;
      });
    }, 1000);
    
    return () => {
      clearInterval(timer);
      if (audioCtx && audioCtx.state !== 'closed') {
        audioCtx.close();
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen bg-white text-black flex items-center justify-center font-dm overflow-hidden border-[20px] border-[#DEDCD7]">
      <div className="flex text-[15vw] font-bold leading-none tracking-tighter uppercase">
        <div className="w-[18vw] flex justify-end">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={index}
              initial={{ filter: "blur(20px)", opacity: 0, scale: 2 }}
              animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
              exit={{ filter: "blur(20px)", opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.4 }}
              className="text-black"
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
  ];

  return (
    <section className="bg-black text-white font-dm py-32 px-12 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-4 uppercase">Recent Works</h2>
          <div className="w-12 h-1 bg-white opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((p, i) => (
            <a href={p.link} target="_blank" rel="noopener noreferrer" key={i} className="group block cursor-pointer">
              <div className="aspect-[16/10] bg-[#111] mb-8 overflow-hidden rounded-sm">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{p.title}</h3>
              <p className="text-white/50 text-sm mb-8 leading-relaxed max-w-sm">{p.desc}</p>
              <div className="inline-block px-6 py-3 border border-white/20 text-[10px] font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all">
                View Case Study
              </div>
            </a>
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
    <footer className="bg-black text-white font-dm py-48 px-8 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[12px] font-bold uppercase tracking-[0.4em] opacity-30 mb-8 italic">The final chapter.</div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-16 leading-[1.1]">
            From visuals to products. <br /> Let’s create what’s next.
          </h2>

          <button
            onClick={copyEmail}
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-white/90 transition-all overflow-hidden"
          >
            <span className="relative z-10">{copied ? "Copied" : "abhishekdesignspace@gmail.com"}</span>
            {copied ? <Check className="w-4 h-4 relative z-10" /> : <Mail className="w-4 h-4 relative z-10 opacity-30 group-hover:opacity-100 transition-opacity" />}
          </button>
        </motion.div>

        <div className="mt-32 flex flex-col items-center gap-16">
          <div className="flex gap-12">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-20 hover:opacity-100 transition-all transform hover:scale-125"
                aria-label="Social Link"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-10">
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
      date: "JAN 26 - MAR 26",
      role: "Product Designer at SuperAlign",
      desc: "Designing Products for AI Agents & Security"
    },
    {
      date: "OCT 25 - JAN 26",
      role: "Product Designer at Quarlatis",
      desc: "Made end-to-end seamless experiences in the world of Web3 & Blockchain"
    },
    {
      date: "JUN 25 - AUG 25",
      role: "Visual Designer at Moonkraft Studio",
      desc: "Made things pretty, somehow it worked. Clients smiled, I cried only a little."
    },
    {
      date: "FEB 25 - APR 25",
      role: "Product Designer at Guide U",
      desc: "Worked on Browser Extension based SaaS from scratch."
    },
    {
      date: "DEC 24 - NOW",
      role: "Freelance Product Designer",
      desc: "Freelancing, aka professionally 'winging it'"
    }
  ];

  return (
    <section className="bg-[#0a0a0a] text-white font-dm py-32 px-12 md:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-widest mb-6 uppercase text-white/40">Experience</h2>
          <p className="text-xl md:text-2xl text-white/70">somehow convinced real people to trust me with their products</p>
        </div>

        <div className="flex flex-col gap-16">
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16">
              <div className="md:w-1/4 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 pt-1">
                {exp.date}
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2 tracking-tight">{exp.role}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{exp.desc}</p>
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
    <section className="bg-[#050505] text-white font-dm pt-32 pb-16 overflow-hidden relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-12 md:px-24 mb-24">
        <h2 className="text-sm font-bold tracking-widest mb-6 uppercase text-white/40">Life & Culture</h2>
        <p className="text-xl md:text-2xl text-white/70">Behind the scenes.</p>
      </div>
      
      <div className="flex justify-center items-center px-4 h-48 md:h-72 mt-12 group">
        {photos.map((photo, i) => (
          <div 
            key={i} 
            className={`relative w-28 md:w-56 aspect-[4/5] -mx-4 md:-mx-8 border-[6px] md:border-8 border-white bg-white shadow-2xl rounded-sm transition-all duration-500 hover:z-50 hover:-translate-y-12 hover:scale-110 hover:rotate-0 cursor-pointer ${photo.rot}`}
          >
            <div className="w-full h-full overflow-hidden">
              <img 
                src={photo.src} 
                alt="Gallery" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function VariationWithCaseStudies() {
  return (
    <>
      <Variation9 />
      <CaseStudies />
      <Experience />
      <Gallery />
      <Footer />
    </>
  );
}