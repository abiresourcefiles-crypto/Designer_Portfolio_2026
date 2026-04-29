import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Twitter, Globe, Figma, Dribbble, Check, Copy } from 'lucide-react';

function Variation6() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center p-8 font-dm">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ rotate: -2, scale: 0.9, opacity: 0 }}
           animate={{ rotate: 0, scale: 1, opacity: 1 }}
           transition={{ type: 'spring', damping: 10 }}
           className="bg-white border-4 border-black p-10 shadow-[12px_12px_0px_0px_#000]"
        >
          <div className="mb-8">
            <span className="bg-black text-white border-2 border-black px-4 py-1 font-bold text-sm uppercase">BRUTALIST LOGIC</span>
          </div>
          
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.8] tracking-tighter uppercase">
            I MAKES THINGS<br/>
            LOOK GOOD.<br/>
            THEN I MAKE THEM<br/>
            WORK BETTER.
          </h1>

          <p className="text-xl font-bold mb-10 leading-relaxed md:max-w-sm uppercase">
            I started by making things look good. Now I make things work better.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white border-4 border-black px-8 py-4 font-black text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[8px_8px_0px_0px_#000]">
              WORK!
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-8">
           <motion.div 
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000] aspect-square flex flex-col justify-between"
           >
             <div className="text-4xl font-black underline italic">25+</div>
             <div className="font-bold uppercase leading-none">SYSTEMS<br/>SHIPPED</div>
           </motion.div>

           <motion.div 
             initial={{ y: -50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="bg-black text-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000] aspect-square flex flex-col justify-between"
           >
             <div className="w-12 h-12 rounded-full border-4 border-white bg-white"></div>
             <div className="font-bold uppercase leading-none text-right">GLOBAL<br/>REACH</div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const projects = [
    { title: "GritOS", impact: "Brutal engineering for decentralized data nodes." },
    { title: "Boxed UI", impact: "High-contrast logic for terminal-first developers." },
    { title: "Rough Draft", impact: "Unfiltered publishing platform for raw creative minds." },
    { title: "Sharp Edge", impact: "Performance analytics with zero visual compromise." }
  ];

  return (
    <section className="bg-black text-white font-dm py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-20 italic">Recent Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <div key={i} className="bg-black border-4 border-white p-8 flex flex-col gap-6 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
              <div className="aspect-video bg-white/20 border-2 border-white overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/neo${i}/1000/600`} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale brightness-50 hover:brightness-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-4xl font-black uppercase tracking-tight mb-4 underline">{p.title}</h3>
                <p className="text-lg font-bold text-white/70 uppercase leading-none">{p.impact}</p>
              </div>
              <button className="mt-4 self-start bg-white text-black px-8 py-4 font-black text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white border-2 border-white transition-colors">
                View Case Study
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
  const email = "hi@brutalist.design";

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
    <footer className="bg-black text-white font-dm py-32 px-8">
      <div className="max-w-7xl mx-auto border-t-8 border-white pt-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12 italic">
              CONTACT<br />FOR PROJECTS.
            </h2>
            <button 
              onClick={copyEmail}
              className="bg-white text-black border-4 border-white px-8 py-4 font-black text-2xl uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,0.4)] flex items-center gap-4"
            >
              {copied ? <Check className="w-8 h-8" /> : <Copy className="w-8 h-8" />}
              <span>{copied ? "COPIED!" : "COPY EMAIL"}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-auto">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="w-20 h-20 bg-black border-4 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                aria-label="Social Link"
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-end border-t-4 border-white pt-8">
          <div className="text-2xl font-black uppercase">© 2026 / Erik Sørensen</div>
          <div className="text-sm font-black uppercase tracking-widest opacity-40">Built with logic.</div>
        </div>
      </div>
    </footer>
  );
}

export default function VariationWithCaseStudies() {
  return (
    <>
      <Variation6 />
      <CaseStudies />
      <Footer />
    </>
  );
}
