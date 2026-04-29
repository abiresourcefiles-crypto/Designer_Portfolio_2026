import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Twitter, Globe, Figma, Dribbble, Check, Mail } from 'lucide-react';

function Variation4() {
  return (
    <section className="min-h-screen bg-white font-dm text-black flex items-center justify-center p-8 overflow-hidden">
      <div className="max-w-4xl w-full text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
            I started by making <br/> things look good.
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-black/50 font-medium max-w-2xl mx-auto mb-12"
          >
            Now I make things work better. <br/> Product design with a focus on simplicity and precision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-black/80 transition-colors text-sm">
              View Case Studies
            </button>
            <a href="#" className="text-sm font-medium text-black hover:underline underline-offset-4">Learn about my process &rarr;</a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[11px] font-medium opacity-30 tracking-widest uppercase">
        Engineered for Clarity
      </div>
    </section>
  );
}

function CaseStudies() {
  const projects = [
    { title: "AirSystem", subtitle: "A seamless OS for residential airflow management." },
    { title: "PureWallet", subtitle: "Simplifying digital assets for the aesthetic minimalist." },
    { title: "Lighthouse", subtitle: "The ultimate beacon for focused collaborative work." },
    { title: "Orbit Hub", subtitle: "Centralized device control with spatial awareness." }
  ];

  return (
    <section className="bg-black text-white font-dm py-32 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Selected Work.</h2>
        <p className="text-lg text-white/40 max-w-xl mx-auto">A selection of products, systems, and experiences designed to solve real problems.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((p, i) => (
          <div key={i} className="bg-[#111] p-12 rounded-[40px] flex flex-col items-center text-center group cursor-pointer transition-all duration-500 hover:bg-[#161616]">
            <div className="w-full aspect-[4/3] bg-black mb-12 rounded-[32px] overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/apple${i}/1000/750`} 
                alt={p.title} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">{p.title}</h3>
            <p className="text-white/40 mb-8 max-w-[280px]">{p.subtitle}</p>
            <button className="px-6 py-2 border border-white/20 rounded-full text-xs font-semibold hover:bg-white hover:text-black transition-all">
              View Case Study
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "contact@eriksorensen.com";

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
    <footer className="bg-black text-white font-dm py-32 px-8 overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's connect.</h2>
        <p className="text-white/40 mb-12 max-w-sm mx-auto">Available for design partnerships and product consulting.</p>
        
        <div className="flex flex-col items-center gap-16">
          <button 
            onClick={copyEmail}
            className="flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-semibold text-sm hover:bg-white/90 transition-all active:scale-95"
          >
            {copied ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
            <span>{copied ? "Address Copied" : "contact@eriksorensen.com"}</span>
          </button>

          <div className="flex gap-10">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="text-white/20 hover:text-white transition-colors"
                aria-label="Social Link"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-10">
            Apple Minimal / 2024 / Product Design
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function VariationWithCaseStudies() {
  return (
    <>
      <Variation4 />
      <CaseStudies />
      <Footer />
    </>
  );
}
