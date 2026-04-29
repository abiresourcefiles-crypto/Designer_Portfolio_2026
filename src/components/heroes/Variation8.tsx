import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Twitter, Globe, Figma, Dribbble, Check, Copy } from 'lucide-react';

const events = [
  { year: '2018', title: 'Photography' },
  { year: '2020', title: 'Freelancing' },
  { year: '2021', title: 'Lockdown Learning' },
  { year: '2022', title: 'UX/UI Engineering' },
  { year: '2024', title: 'Product Design' }
];

function Variation8() {
  return (
    <section className="min-h-screen bg-white font-dm text-black flex items-center justify-center p-8 md:p-24 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]"
          >
            The<br />Journey<br />Of Logic.
          </motion.h1>
          <p className="text-xl md:text-2xl text-black/50 font-medium leading-relaxed max-w-md">
            I started by making things look good. Now I make things work better. From capturing moments to architecting systems.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[3px] top-4 bottom-4 w-px bg-black/10"></div>
          
          <div className="space-y-12 relative z-10">
            {events.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="flex items-center gap-8 group"
              >
                <div className="h-2 w-2 rounded-full bg-black group-hover:scale-150 transition-transform"></div>
                <div className="flex flex-col">
                   <span className="text-[10px] font-bold opacity-30 tracking-widest uppercase">{event.year}</span>
                   <span className="text-xl md:text-2xl font-bold uppercase tracking-tight">{event.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const projects = [
    { title: "Project Alpha", meta: "From capture to calculation." },
    { title: "Project Beta", meta: "Designing for the machine." },
    { title: "Project Gamma", meta: "The logic of aesthetics." },
    { title: "Project Delta", meta: "Finalizing the loop." }
  ];

  return (
    <section className="bg-black text-white font-dm py-32 px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold uppercase tracking-widest mb-24 opacity-30 text-center">Selected Artifacts</h2>
        
        <div className="space-y-24">
          {projects.map((p, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center group border-b border-white/10 pb-24">
              <div className="md:col-span-1">
                 <span className="text-5xl font-black opacity-10 font-mono tracking-tighter group-hover:opacity-100 transition-opacity">0{i+1}</span>
              </div>
              <div className="md:col-span-6 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/time${i}/1200/600`} 
                  alt={p.title} 
                  className="w-full aspect-[2/1] object-cover grayscale opacity-40 group-hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-5 flex flex-col items-start">
                 <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{p.title}</h3>
                 <p className="text-lg font-medium text-white/40 mb-8 italic">"{p.meta}"</p>
                 <button className="px-8 py-3 border border-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                   View Project
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
    <footer className="bg-black text-white font-dm py-32 px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.6em] opacity-30 mb-8">Next chapter starts here.</div>
        <h2 className="text-4xl md:text-6xl font-black uppercase text-center tracking-tighter mb-16 leading-tight">
          Let’s write the <br /> code of tomorrow.
        </h2>

        <div className="flex flex-col items-center gap-12">
          <button 
            onClick={copyEmail}
            className="flex items-center gap-4 px-12 py-5 bg-white text-black font-bold uppercase text-xs tracking-widest hover:invert transition-all"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4 text-black/40" />}
            <span>{copied ? "Copied to Clipboard" : "hi@eriksorensen.design"}</span>
          </button>

          <div className="grid grid-cols-5 gap-px bg-white/10 p-px">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="bg-black p-6 flex flex-col items-center gap-4 hover:bg-white/5 transition-colors group"
                aria-label="Social Link"
              >
                <social.icon className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                <span className="text-[9px] font-bold opacity-10 font-mono">/0{i+1}</span>
              </a>
            ))}
          </div>

          <div className="text-[9px] font-bold opacity-10 uppercase tracking-[0.4em] mt-8">
            Timeline Journey / Portfolio 2026
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function VariationWithCaseStudies() {
  return (
    <>
      <Variation8 />
      <CaseStudies />
      <Footer />
    </>
  );
}
