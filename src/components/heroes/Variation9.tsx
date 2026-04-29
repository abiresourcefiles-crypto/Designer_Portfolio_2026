import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Twitter, Globe, Figma, Dribbble, Check, Copy, Mail } from 'lucide-react';

function Variation9() {
  return (
    <section className="min-h-screen bg-[#DEDCD7] font-mono text-[#2D2D2D] p-0 relative overflow-hidden border-[20px] border-[#DEDCD7]">
      {/* Structural Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#bcbab5_1px,transparent_1px),linear-gradient(to_bottom,#bcbab5_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 min-h-[calc(100vh-40px)] border border-black/10 flex flex-col">
        <header className="p-8 flex justify-between items-start border-b border-black/10">
          <div>
            <div className="font-bold text-xl mb-1">STRUCT.PROJECT_01</div>
            <div className="text-[10px] opacity-40">CATALOGUE_ENTRY_2026</div>
          </div>
          <div className="text-right">
            <div className="font-bold">STATUS: STABLE</div>
            <div className="text-[10px] opacity-40">UTC+1 // 20:16</div>
          </div>
        </header>

        <div className="flex-1 flex items-end p-8 md:p-16">
          <div className="w-full">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <h1 className="text-[12vw] font-bold leading-[0.8] mb-12 tracking-tighter uppercase mix-blend-multiply">
                LOOK.GOOD<br/>
                WORK.BETTER
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2 text-sm leading-relaxed max-w-md bg-white/80 backdrop-blur-sm p-4 border border-black/5 uppercase">
                  I started by making things look good. Now I make things work better. Architectural frameworks for digital resilience.
                </div>
                <div className="flex flex-col justify-end gap-2 text-xs font-bold uppercase underline">
                  <a href="#">Technical_Specs</a>
                  <a href="#">Material_Archive</a>
                </div>
                <div className="flex items-end justify-end">
                   <div className="w-24 h-24 border border-black flex items-center justify-center font-bold text-sm bg-black text-[#DEDCD7] hover:bg-[#DEDCD7] hover:text-black transition-colors cursor-pointer uppercase text-center">
                     View<br/>Build
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <footer className="p-8 flex justify-between text-[10px] bg-black text-[#DEDCD7] border-t border-black">
           <div>LAT: 52.3676° N // LON: 4.9041° E</div>
           <div className="flex gap-12">
             <span>ARCHING_DIGIT_SYSTEMS</span>
             <span>C_2026</span>
           </div>
        </footer>
      </div>
    </section>
  );
}

function CaseStudies() {
  const projects = [
    { id: "A-501", title: "FORGE CORE", spec: "B-Grid System v4.1" },
    { id: "M-202", title: "SIGNAL ARCH", spec: "Latency Logic" },
    { id: "X-990", title: "KINETIC UI", spec: "Fluid Framework" },
    { id: "T-112", title: "STATIC OS", spec: "Monolith v2" }
  ];

  return (
    <section className="bg-black text-white font-dm p-8 md:p-12">
      <div className="max-w-7xl mx-auto border-t-2 border-white/20 pt-16">
        <div className="flex justify-between items-end mb-16 px-4">
          <h2 className="text-2xl font-black uppercase tracking-tighter">DATA SET // 04 PROJECTS</h2>
          <div className="text-[9px] font-bold opacity-30 text-right uppercase">
             Automated Grid Generation <br/> v1.0.4 - Build 2026
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border border-white/20">
          {projects.map((p, i) => (
            <div key={i} className="border-r border-b border-white/20 p-8 group hover:bg-white/5 transition-colors last:border-r-0 md:last:border-r">
               <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-bold opacity-30 font-mono tracking-tighter">ID_{p.id}</span>
                  <div className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-white transition-colors"></div>
               </div>
               
               <div className="aspect-square bg-white/5 mb-12 overflow-hidden border border-white/10 group-hover:border-white/30 transition-all">
                  <img 
                    src={`https://picsum.photos/seed/ind${i}/600/600`} 
                    alt={p.title} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
               </div>

               <h3 className="text-3xl font-black uppercase tracking-tight mb-2 leading-none whitespace-nowrap">{p.title}</h3>
               <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 mb-12">{p.spec}</p>

               <button className="w-full py-4 border border-white/20 text-[10px] font-bold uppercase tracking-widest group-hover:border-white transition-all">
                  Access Study
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
  const email = "industrial@erik.design";

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
    <footer className="bg-black text-[#DEDCD7] font-mono p-8 md:p-12 overflow-hidden">
      <div className="max-w-7xl mx-auto border border-white/20 grid grid-cols-1 md:grid-cols-2">
        <div className="p-12 border-b md:border-b-0 md:border-r border-white/20">
          <div className="text-[10px] opacity-30 mb-8 tracking-widest uppercase">// INITIATE_CONTACT</div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.9]">
            BUILT. <br /> SOMETHING. <br /> TOASTED.
          </h2>
          <button 
            onClick={copyEmail}
            className="w-full md:w-auto px-10 py-5 bg-[#DEDCD7] text-black font-bold uppercase text-xs flex items-center justify-center gap-4 hover:bg-white transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]"
          >
            {copied ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
            <span>{copied ? "COPIED_ADDRESS" : "industrial@erik.design"}</span>
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3">
          {socials.map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              className="p-12 border-r border-b border-white/10 flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors group"
              aria-label="Social Link"
            >
              <social.icon className="w-8 h-8 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <div className="text-[8px] font-bold opacity-10 uppercase tracking-widest font-sans">LINK_0{i+1}</div>
            </a>
          ))}
          <div className="p-12 flex items-end justify-end">
            <div className="text-right">
              <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">Build_Vers: 2.0.4</div>
              <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">© 2026_ERIK_S</div>
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
      <Variation9 />
      <CaseStudies />
      <Footer />
    </>
  );
}
