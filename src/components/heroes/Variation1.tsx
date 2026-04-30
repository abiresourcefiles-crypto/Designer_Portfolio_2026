import { motion } from 'motion/react';
import { ArrowRight, Linkedin, Twitter, Globe, Figma, Dribbble, Copy, Check, Mail } from 'lucide-react';
import { useState } from 'react';

function Variation1() {
  return (
    <section className="relative min-h-screen bg-white font-dm text-black flex flex-col overflow-hidden">



      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-8 flex flex-col justify-center">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Headline */}
          <div className="col-span-12 lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] lg:text-[7vw] leading-[0.85] font-bold tracking-tighter mb-12 uppercase"
            >
              First, I made it<br />
              look good.<br />
              Now, I make it<br />
              work better.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex gap-4"
            >
              <button id="view-work-btn" className="px-8 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:bg-black/80 transition-colors">
                View Work
              </button>
              <button id="about-me-btn" className="px-8 py-4 border border-black text-black text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                About Me
              </button>
            </motion.div>
          </div>

          {/* Paragraph */}
          <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-auto pb-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-xl leading-relaxed text-black/60 border-l border-black pl-8 max-w-[320px]">
                Product Designer specializing in high-performance digital interfaces and scalable design tokens for early-stage startups.
              </p>
              <div className="mt-8 flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase">
                <span className="w-12 h-px bg-black"></span>
                Based in Zurich, CH
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Grid Lines Overlay (Subtle Swiss Grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full max-w-7xl mx-auto border-x border-black flex">
          <div className="flex-1 border-r border-black"></div>
          <div className="flex-1 border-r border-black"></div>
          <div className="flex-1 border-r border-black"></div>
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const projects = [
    { title: "NeuroFlow", impact: "Increased engineering velocity by 40% through atomic design systems." },
    { title: "Atlas OS", impact: "Unified 12 siloed products into a single coherent spatial interface." },
    { title: "Krypton", impact: "Reduced user churn by 25% with zero-friction onboarding flow." },
    { title: "Vortex", impact: "Scaled fintech core to 1M+ active users with performant data viz." }
  ];

  return (
    <section className="bg-black text-white font-dm py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-white/20 pb-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em]">Selected Work</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mt-1">Refined Problem Solving</p>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">2026 Edition</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/20 border border-white/20">
          {projects.map((p, i) => (
            <div key={i} className="bg-black p-12 flex flex-col gap-8 aspect-square md:aspect-auto">
              <div className="aspect-video bg-white/5 border border-white/10 relative overflow-hidden group">
                <img
                  src={`C:\Users\HP\Downloads\Designer 2026 portfolio\post.jpg`}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold uppercase tracking-tight mb-4">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed max-w-sm">{p.impact}</p>
                </div>
                <button className="mt-8 self-start px-8 py-3 border border-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
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
  const email = "hi@eriksorensen.design";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "X.com" },
    { icon: Globe, href: "#", label: "Medium" },
    { icon: Figma, href: "#", label: "Figma" },
    { icon: Dribbble, href: "#", label: "Dribbble" }
  ];

  return (
    <footer className="bg-black text-white font-dm py-32 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-12 leading-[0.9]">
              Let’s build <br /> something useful.
            </h2>
            <button
              onClick={copyEmail}
              className="group flex items-center gap-4 px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-white/90 transition-all active:scale-95"
            >
              {copied ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>
          </div>

          <div className="flex flex-col md:items-end justify-between h-full">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mb-12">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 flex items-center justify-center border border-white/20 hover:border-white transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            <div className="text-[10px] uppercase tracking-[0.4em] opacity-40 text-right">
              Swiss Minimal / 2026 / Copenhagen
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
      <Variation1 />
      <CaseStudies />
      <Footer />
    </>
  );
}
