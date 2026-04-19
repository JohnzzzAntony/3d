"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Hero3D from "./components/Hero3D";
import ProductShowcase from "./components/ProductShowcase";
import AnimatedFeatures from "./components/AnimatedFeatures";
import VideoSection from "./components/VideoSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import TechWaveBackground from "./components/TechWaveBackground";
import MagneticButton from "./components/MagneticButton";
import ExplainerVideo from "./components/ExplainerVideo";
import { ArrowDown, Menu, X, ChevronRight, Cpu, Activity, Zap } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(2,6,23,0)", "rgba(2,6,23,0.9)"]);
  const headerBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);
  
  const navItems = ["Home", "Products", "Gallery", "Solutions", "Contact"];

  return (
    <main className="min-h-screen bg-[#020617] font-sans selection:bg-sky-500 selection:text-white relative text-white overflow-hidden">
      {/* 3JS Background Animation */}
      <TechWaveBackground />
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0" />

      {/* Modern Navigation */}
      <motion.header 
        style={{ 
          backgroundColor: headerBg,
          backdropFilter: headerBlur,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-sky-500/10 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4 group cursor-pointer"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-sky-500/20 rounded-lg blur-md group-hover:bg-sky-500/40 transition-all" />
              <Cpu className="relative text-sky-500 w-8 h-8 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-black text-xl tracking-[0.2em] text-white">
                CORE <span className="text-sky-500">SYSTEMS</span>
              </span>
              <span className="text-[10px] text-sky-500/60 font-black uppercase tracking-[0.4em]">Digital Industrial V2</span>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-black uppercase tracking-[0.3em] text-sky-500/60 hover:text-sky-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-sky-500 rounded-full transition-all group-hover:w-full opacity-0 group-hover:opacity-100" />
              </motion.a>
            ))}
            <MagneticButton>
              <div className="px-8 py-3 bg-sky-500 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-sky-500/20">
                Initialization
              </div>
            </MagneticButton>
          </nav>

          <button className="lg:hidden text-sky-500" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </motion.header>

      {/* Cyber Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center scroll-mt-24">
        <Hero3D />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617] z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="inline-flex items-center space-x-4 px-6 py-2 rounded-full glass-v2 border-sky-500/20 shadow-xl">
               <Zap size={14} className="text-sky-500 animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400">Neural Network Ready</span>
            </div>
            
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-orbitron font-black leading-none text-glow italic">
              KINETIC <br />
              <span className="text-sky-500 not-italic">REALITY</span>
            </h1>
            
            <p className="text-sky-100/60 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Synthesizing physical engineering with digital performance. The next evolution 
              of automated industrial interface technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <MagneticButton>
                <div className="px-12 py-6 bg-sky-500 text-white font-black uppercase tracking-[0.4em] text-xs rounded-2xl shadow-[0_0_30px_rgba(14,165,233,0.4)]">
                  Launch Console
                </div>
              </MagneticButton>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-12 py-6 border border-sky-500/30 text-sky-500 font-black uppercase tracking-[0.4em] text-xs rounded-2xl bg-sky-500/5 backdrop-blur-md"
              >
                Access Archives
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-4"
        >
          <div className="w-1 h-12 bg-gradient-to-b from-sky-500 to-transparent" />
          <span className="text-[10px] uppercase font-black tracking-[0.5em] text-sky-500/40">Descending</span>
        </motion.div>
      </section>

      {/* Integrated Sections with Cyber Theme */}
      <div className="relative z-10 space-y-32 py-32 bg-gradient-to-b from-[#020617] via-[#020617]/0 to-[#020617]">
        <ProductShowcase />
        <AnimatedFeatures />
        <ImageGallery />
        <ExplainerVideo />
        <VideoSection />
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
