import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Twitter, Globe, Figma, Dribbble, Copy, Check, Mail } from 'lucide-react';

function Variation2() {
  return (
    <section className="min-h-screen bg-white font-dm text-black flex flex-col items-center justify-center p-8 md:p-24 overflow-hidden relative">
      <nav className="absolute top-8 left-8 right-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
        <div>/PROD_D / 2026</div>
        <div>/AVAILABLE</div>
      </nav>

      <div className="max-w-3xl w-full text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tight uppercase">
            Product Design <br/>
            Engineered.
          </h1>
          
          <p className="text-xl md:text-2xl text-black/50 font-medium mb-12 max-w-xl mx-auto">
            I started by making things look good. Now I make things work better. One sentence at a time.
          </p>

          <button className="px-10 py-5 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-black/80 transition-all rounded-sm shadow-xl shadow-black/10">
            Start Project
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[9px] font-bold opacity-20 tracking-[0.4em] uppercase">
        <span>Systems</span>
        <span className="w-1 h-1 rounded-full bg-black"></span>
        <span>Interfaces</span>
        <span className="w-1 h-1 rounded-full bg-black"></span>
        <span>Logic</span>
      </div>
    </section>
  );
}

function CaseStudies() {
  const projects = [
    { title: "FlowCore", desc: "Solving scalability friction for top-tier fintech disruptors." },
    { title: "SyncLabs", desc: "Orchestrating real-time collaboration across distributed teams." },
    { title: "DataPulse", desc: "A dashboard designed to make big data feel remarkably small." },
    { title: "NovaUI", desc: "The next generation of design systems for hyper-growth." }
  ];

  return (
    <section className="bg-black text-white font-dm py-32 px-12 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-4 uppercase">Recent Work</h2>
          <div className="w-12 h-1 bg-white opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-[#111] mb-8 overflow-hidden rounded-sm">
                <img 
                  src={`https://picsum.photos/seed/startup${i}/900/560`} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{p.title}</h3>
              <p className="text-white/50 text-sm mb-8 leading-relaxed max-w-sm">{p.desc}</p>
              <button className="px-6 py-3 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Project Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "hello@eriksorensen.design";

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
    <footer className="bg-black text-white font-dm py-24 px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Ready to start?</h2>
        
        <div className="flex flex-col items-center justify-center gap-12">
          <button 
            onClick={copyEmail}
            className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-lg font-bold text-sm tracking-tight hover:bg-white/90 transition-all"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Address Copied" : "hello@eriksorensen.design"}</span>
          </button>

          <div className="flex gap-8">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="text-white/40 hover:text-white transition-colors p-2"
                aria-label="Social Link"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-[11px] font-medium opacity-20 uppercase tracking-[0.2em]">
            © 2024 / Copenhagen / Product Design
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function VariationWithCaseStudies() {
  return (
    <>
      <Variation2 />
      <CaseStudies />
      <Footer />
    </>
  );
}
