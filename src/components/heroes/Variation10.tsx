import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Twitter, Globe, Figma, Dribbble, Check, Mail } from 'lucide-react';

function Variation10() {
  return (
    <section className="min-h-screen bg-white font-dm text-black flex flex-col items-center justify-center p-8 md:p-24 text-center overflow-hidden">
      <div className="max-w-4xl w-full">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="mb-12">
            <span className="inline-block px-4 py-1 border border-black/10 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">The Accidental Path</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] mb-12 tracking-tight">
            “I downloaded tutorials to save data. Accidentally became a Product Designer.”
          </h1>

          <p className="text-xl md:text-2xl text-black/50 max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
            I started by making things look good. Now I make things work better. My journey is built on curiosity, logic, and a deep obsession with systemic clarity.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
             <button className="px-10 py-4 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-black/80 transition-all">
                Read the Full Story
             </button>
             <button className="px-10 py-4 border border-black text-black font-bold uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">
                View My Process
             </button>
          </div>
        </motion.div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black opacity-[0.02] select-none pointer-events-none">STORY</div>
    </section>
  );
}

function CaseStudies() {
  const stories = [
    { 
      title: "The Logic Leap", 
      story: "How I transformed a chaotic legacy dashboard into a streamlined engineering workstation by identifying a single point of failure in the user's mental model." 
    },
    { 
      title: "Data Preservation", 
      story: "A study in extreme optimization. Building a global supply-chain platform that functions flawlessly on 2G connections without losing visual integrity." 
    },
    { 
      title: "Emotional Systems", 
      story: "Designing a mental health interface that balances mechanical reliability with soft, human-centric affordances." 
    },
    { 
      title: "Final Output", 
      story: "The culmination of five years of architectural research into a single, high-performance design system for autonomous vehicles." 
    }
  ];

  return (
    <section className="bg-black text-white font-dm py-32 px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">Selected Stories</h2>
        <p className="text-xl text-white/40 leading-relaxed max-w-2xl">Every interface has a history. These are the narratives of how I made them work better.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        {stories.map((s, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[4/5] bg-white/5 mb-12 overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-1000">
               <img 
                 src={`https://picsum.photos/seed/story${i}/800/1000`} 
                 alt={s.title} 
                 className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30">CHAPTER 0{i+1}</div>
              <h3 className="text-4xl font-bold uppercase tracking-tighter leading-none">{s.title}</h3>
              <p className="text-lg text-white/50 leading-relaxed font-medium">{s.story}</p>
              <button className="px-10 py-4 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Read the Narrative
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "hi@eriksorensen.design";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Globe, href: "#" },
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
            <span className="relative z-10">{copied ? "Copied" : "hi@eriksorensen.design"}</span>
            {copied ? <Check className="w-4 h-4 relative z-10" /> : <Mail className="w-4 h-4 relative z-10 opacity-30 group-hover:opacity-100 transition-opacity" />}
          </button>
        </motion.div>

        <div className="mt-32 flex flex-col items-center gap-16">
          <div className="flex gap-12">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="opacity-20 hover:opacity-100 transition-all transform hover:scale-125"
                aria-label="Social Link"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-10">
            © 2026 / STORIES OF DESIGN / COPENHAGEN
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function VariationWithCaseStudies() {
  return (
    <>
      <Variation10 />
      <CaseStudies />
      <Footer />
    </>
  );
}
