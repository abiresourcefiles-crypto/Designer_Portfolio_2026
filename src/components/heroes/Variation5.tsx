import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Twitter, Globe, Figma, Dribbble, Check, Mail } from 'lucide-react';

function Variation5() {
  return (
    <section className="min-h-screen bg-white font-dm text-black flex items-center justify-center p-8 md:p-24 relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Heading */}
        <div className="lg:col-span-8">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] lg:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter"
          >
            MAKING<br />
            THINGS<br />
            WORK<br />
            BETTER.
          </motion.h1>
        </div>

        {/* Right Column: Story & Stats */}
        <div className="lg:col-span-4 flex flex-col justify-end space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl leading-relaxed text-black/60 font-medium border-l-[3px] border-black pl-8">
              I started by making things look good. Now I prioritize architectural logic and user performance over simple aesthetics.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/10">
            <div>
              <div className="text-3xl font-black">06+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Years Exp.</div>
            </div>
            <div>
              <div className="text-3xl font-black">40+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Projects</div>
            </div>
            <div className="col-span-2">
               <div className="text-3xl font-black italic underline">Clients</div>
               <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Global Brands</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const projects = [
    { title: "Quantum OS", desc: "A featured study in high-density data visualization and operating system architecture.", size: 'large' },
    { title: "Helios", desc: "Solar energy tracking for residential smart homes.", size: 'small' },
    { title: "Zaphod", desc: "AI-driven content orchestration for media agencies.", size: 'small' },
    { title: "Eos", desc: "A minimal approach to digital morning routines.", size: 'small' }
  ];

  return (
    <section className="bg-black text-white font-dm py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold uppercase tracking-[0.4em] mb-20 border-l-[3px] border-white pl-8">Recent Cases</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Large Card */}
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="aspect-video bg-[#111] overflow-hidden mb-8 border border-white/5">
              <img 
                src={`https://picsum.photos/seed/asym0/1600/900`} 
                alt={projects[0].title}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="max-w-xl">
              <h3 className="text-5xl font-black uppercase tracking-tighter mb-4">{projects[0].title}</h3>
              <p className="text-xl text-white/40 mb-8 leading-relaxed italic">"{projects[0].desc}"</p>
              <button className="px-12 py-4 border border-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Full Case Study
              </button>
            </div>
          </div>

          {/* Supporting Cards Column */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            {projects.slice(1).map((p, i) => (
              <div key={i} className="group cursor-pointer border-t border-white/10 pt-8">
                <div className="aspect-video bg-[#111] overflow-hidden mb-6">
                  <img 
                    src={`https://picsum.photos/seed/asym${i+1}/800/450`} 
                    alt={p.title}
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{p.title}</h3>
                <p className="text-xs text-white/40 mb-6 uppercase tracking-widest">{p.desc}</p>
                <button className="text-[10px] font-bold uppercase tracking-widest border-b border-white pb-1 hover:opacity-50 transition-opacity">
                  Explore
                </button>
              </div>
            ))}
          </div>
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
    <footer className="bg-black text-white font-dm py-32 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
        <div className="lg:col-span-7">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Let's build <br /> something <br /> meaningful.
          </h2>
          <button 
            onClick={copyEmail}
            className="flex items-center gap-4 text-2xl font-bold uppercase tracking-tighter border-b-2 border-white pb-2 hover:opacity-50 transition-all"
          >
            {copied ? <Check className="w-6 h-6" /> : <Mail className="w-6 h-6" />}
            <span>{copied ? "Copied" : "hi@eriksorensen.design"}</span>
          </button>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end">
          <div className="grid grid-cols-3 gap-4 mb-16">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="aspect-square flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all"
                aria-label="Social Link"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
            <span>Product Design</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function VariationWithCaseStudies() {
  return (
    <>
      <Variation5 />
      <CaseStudies />
      <Footer />
    </>
  );
}
