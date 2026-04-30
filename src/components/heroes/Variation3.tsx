import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Twitter, Globe, Figma, Dribbble, Copy, Check } from 'lucide-react';

function Variation3() {
  return (
    <section className="min-h-screen bg-white font-dm text-black flex flex-col p-8 md:p-12 relative overflow-hidden">
      <nav className="w-full flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] mb-24 opacity-40">
        <div>Independent Agency / Studio</div>
        <div className="flex gap-8">
           <a href="#" className="hover:opacity-50">Work</a>
           <a href="#" className="hover:opacity-50">Archive</a>
        </div>
      </nav>

      <div className="flex-1 max-w-6xl w-full mx-auto flex flex-col justify-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-[8rem] font-black uppercase leading-[0.8] mb-16 tracking-tighter">
            Architecting <br/>
            High Performance.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-end pt-12 border-t border-black/10">
             <div className="md:col-span-2">
               <p className="text-xl font-medium leading-relaxed opacity-60">
                 I started by making things look good. <br/>Now I make things work better. Solo product design agency for technical founders.
               </p>
             </div>
             <div>
                <div className="text-3xl font-black italic underline">Metric.01</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">98% Conversion Lift</div>
             </div>
             <div>
                <button className="w-full py-4 bg-black text-white font-bold uppercase text-[10px] tracking-widest hover:invert transition-all">
                  Consultation
                </button>
             </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/5 -z-10"></div>
    </section>
  );
}

function CaseStudies() {
  const projects = [
    { title: "Horizon Cloud", results: "Reimagining enterprise complexity into a seamless atmospheric ecosystem." },
    { title: "The Sovereign", results: "Redefining digital legacy for high-net-worth investment systems." },
    { title: "Aura Health", results: "A 300% increase in mindful engagement via soft-system architecture." },
    { title: "Vertex 2.0", results: "From legacy bottleneck to high-performance real-time engineering." }
  ];

  return (
    <section className="bg-black text-white font-dm py-32 px-12 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl font-bold uppercase tracking-tighter mb-20">Portfolio</h2>
        
        <div className="space-y-32">
          {projects.map((p, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-24 group`}>
              <div className="flex-1 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/agency${i}/1200/800`} 
                  alt={p.title} 
                  className="w-full aspect-video object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-[10px] font-bold uppercase tracking-[0.6em] opacity-30 mb-4">Case Study 0{i + 1}</div>
                <h3 className="text-5xl font-bold uppercase tracking-tight mb-8 leading-none">{p.title}</h3>
                <p className="text-xl font-medium text-white/50 leading-relaxed mb-12 max-w-sm italic">
                  "{p.results}"
                </p>
                <button className="self-start px-12 py-4 border border-white/30 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                  View Case Study
                </button>
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
  const email = "studio@eriksorensen.design";

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
    <footer className="bg-black text-white font-dm py-48 px-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-24">
        <div className="max-w-2xl">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
            Available for <br /> thoughtful work.
          </h2>
          <button 
            onClick={copyEmail}
            className="group flex items-center gap-6 text-xl font-bold uppercase tracking-tighter border-b-2 border-white pb-2 hover:opacity-50 transition-all"
          >
            <span>{copied ? "Copied" : "studio@eriksorensen.design"}</span>
            {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6 opacity-30 group-hover:opacity-100 transition-opacity" />}
          </button>
        </div>

        <div className="flex flex-col items-end gap-12">
          <div className="flex gap-4">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Social Link"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">
            Erik Sørensen / Studio / 2026
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function VariationWithCaseStudies() {
  return (
    <>
      <Variation3 />
      <CaseStudies />
      <Footer />
    </>
  );
}
