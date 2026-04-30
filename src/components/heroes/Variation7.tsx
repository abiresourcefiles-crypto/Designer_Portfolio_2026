import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Twitter, Globe, Figma, Dribbble, Check, Copy } from 'lucide-react';

function Variation7() {
  return (
    <section className="min-h-screen bg-white font-dm text-black flex flex-col p-8 md:p-12 relative overflow-hidden">
      

      <div className="flex-1 flex flex-col justify-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] md:text-[18vw] leading-[0.75] font-black uppercase tracking-[-0.06em] -ml-[1vw] mb-12"
        >
          WORK<br />
          BETTER.
        </motion.h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
           className="max-w-md"
        >
          <p className="text-xl md:text-2xl font-medium tracking-tight leading-relaxed mb-8">
            I started by making things look good. Now I make things work better. This is the evolution of design as a technical discipline.
          </p>
          <button className="px-10 py-4 bg-black text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black border border-black transition-all">
            See the proof
          </button>
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col gap-12 items-end">
        <div className="text-[10vw] font-black opacity-[0.03] select-none tracking-tighter uppercase whitespace-nowrap">TYPOGRAPHY FIRST</div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const projects = [
    { title: "Mono-Logic", detail: "Systemic architecture." },
    { title: "Type-Face", detail: "Variable font tech." },
    { title: "Grid-Lock", detail: "Layout engineering." },
    { title: "Kerning", detail: "Precise spacing." }
  ];

  return (
    <section className="bg-black text-white font-dm py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
           initial={{ opacity: 0, x: -100 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="text-[12vw] font-black uppercase tracking-[-0.08em] mb-32 leading-none border-b border-white/10 pb-8"
        >
          Selected Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-white/5 mb-8 border border-white/10 overflow-hidden">
                 <img 
                   src={`https://picsum.photos/seed/type${i}/600/800`} 
                   alt={p.title} 
                   className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 transition-all duration-1000"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <h3 className="text-4xl font-bold uppercase tracking-tight mb-2 leading-none">{p.title}</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-8">{p.detail}</p>
              <button className="text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 border-white pb-2 hover:opacity-100 transition-opacity">
                View Case
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
  const email = "hi@erik.design";

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
    <footer className="bg-black text-white font-dm py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[12vw] font-black uppercase tracking-[-0.06em] leading-[0.8] mb-12">
          GET IN <br /> TOUCH.
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-medium tracking-tight opacity-40 max-w-sm">
              I’m currently accepting new projects and consulting opportunities for late 2026.
            </p>
            <button 
              onClick={copyEmail}
              className="flex items-center gap-4 text-3xl font-bold uppercase tracking-tighter border-b-4 border-white pb-2 hover:opacity-50 transition-all"
            >
              <span>{copied ? "COPIED" : "HI@ERIK.DESIGN"}</span>
              {copied ? <Check className="w-8 h-8" /> : <Copy className="w-8 h-8 opacity-20" />}
            </button>
          </div>

          <div className="flex flex-col items-end gap-12">
            <div className="flex gap-10">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="opacity-20 hover:opacity-100 transition-opacity p-2"
                  aria-label="Social Link"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-10">
              Typography First / 2026 / CPH
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function VariationWithCaseStudies() {
  return (
    <>
      <Variation7 />
      <CaseStudies />
      <Footer />
    </>
  );
}
