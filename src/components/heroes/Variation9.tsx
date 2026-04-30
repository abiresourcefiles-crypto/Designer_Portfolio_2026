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
          <div className="text-right">
            <div className="font-bold">STATUS: STABLE</div>
            <div className="text-[10px] opacity-40">INDIA // 05:56</div>
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
                LOOK.GOOD<br />
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
                    View<br />Build
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
    {
      id: "A-501",
      title: "VISION 2.0",
      spec: "B-Grid System v4.1",
      desc: "Bridging the Gap for Healthcare Professional, Nurse, Medical Students, Doctors with Color Vision Deficiency (CVD) using Assistive Vision Technology.",
      image: "/public/Vision 2.0.jpg",
      link: "/vision-2"
    },
    {
      id: "M-202",
      title: "ONE BUTTON CHANGE that's it? No!",
      spec: "Latency Logic",
      desc: "Optimized data flow visualization interface with real-time feedback loops.",
      image: "/public/Voice Case Study.jpg",
      link: "/one-button"
    },
    {
      id: "X-990",
      title: "KINETIC UI",
      spec: "Fluid Framework",
      desc: "Motion-first design system exploring the physics of digital interactions.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2670&auto=format&fit=crop",
      link: "/kinetic-ui"
    },
    {
      id: "T-112",
      title: "STATIC OS",
      spec: "Monolith v2",
      desc: "A minimalist operating system concept designed for distraction-free workflows.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
      link: "/static-os"
    }//
  ];

  return (
    <section className="bg-black text-white font-dm py-32 px-12 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-4 uppercase">Recent Works</h2>
          <div className="w-12 h-1 bg-white opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-[#111] mb-8 overflow-hidden rounded-sm">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{p.title}</h3>
              <p className="text-white/50 text-sm mb-8 leading-relaxed max-w-sm">{p.desc}</p>
              <a href={p.link} className="inline-block px-6 py-3 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                View Case Study
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "abhishekdesignspace@gmail.com";

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
            <span className="relative z-10">{copied ? "Copied" : "abhishekdesignspace@gmail.com"}</span>
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
            © 2026  <br></br>
            <br></br>
            <br></br>
            Learn - Unlearn - Relearn          </div>
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