"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Hero3D from "./components/Hero3D";
import ProductShowcase from "./components/ProductShowcase";
import AnimatedFeatures from "./components/AnimatedFeatures";
import VideoSection from "./components/VideoSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import ParticleBackground from "./components/ParticleBackground";
import MagneticButton from "./components/MagneticButton";
import ExplainerVideo from "./components/ExplainerVideo";
import { ArrowDown, Menu, X, ChevronRight, Activity, Terminal } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(10,14,23,0)", "rgba(10,14,23,0.9)"]);
  const headerBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);
  
  const navItems = ["Home", "Products", "Gallery", "Solutions", "Contact"];

  return (
    <main className="min-h-screen bg-industrial-950 font-sans selection:bg-industrial-accent selection:text-white relative">
      {/* Background Layer */}
      <ParticleBackground />
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-0" style={{ backgroundSize: '60px 60px' }} />

      {/* Navigation */}
      <motion.header 
        style={{ 
          backgroundColor: headerBg,
          backdropFilter: headerBlur,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4 cursor-pointer group"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-industrial-accent rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                <span className="relative font-orbitron font-black text-white text-xl">W</span>
              </div>
              <div className="flex flex-col">
                <span className="font-orbitron font-bold text-xl tracking-wider leading-none">
                  WEKA <span className="text-industrial-accent">MACHINERIES</span>
                </span>
                <span className="text-[10px] text-industrial-chrome uppercase tracking-[0.3em] font-semibold">Engineering Excellence</span>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold uppercase tracking-widest text-industrial-chrome hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-industrial-accent transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
              <MagneticButton>
                <span className="text-xs font-black uppercase tracking-widest text-white px-4">Inquiry</span>
              </MagneticButton>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-3 text-industrial-chrome hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-24 left-0 right-0 bg-industrial-900 border-b border-white/5 shadow-2xl overflow-hidden"
            >
              <div className="px-6 py-10 flex flex-col space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-xl font-orbitron font-bold text-industrial-chrome hover:text-industrial-accent px-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />
        
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-industrial-950 via-industrial-950/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0e17_100%)] opacity-80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                 <div className="flex space-x-1">
                  {[1, 2, 3].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ height: [4, 12, 4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="w-1 bg-industrial-accent rounded-full"
                    />
                  ))}
                </div>
                <span className="text-industrial-chrome text-[10px] font-bold uppercase tracking-[0.2em]">Live Engineering Core Applied</span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-orbitron font-extrabold leading-[0.9] tracking-tighter">
                UNRELENTING <br />
                <span className="bg-gradient-to-r from-industrial-accent via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  PRECISION
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-industrial-chrome max-w-xl leading-relaxed font-medium">
                Pioneering industrial machinery since 1987. Engineered for maximum throughput, 
                zero-failure durability, and peak structural integrity.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-6">
                <MagneticButton>
                  <div className="flex items-center px-10 text-white font-black uppercase tracking-[0.2em] text-xs">
                    Explore Catalog <ChevronRight size={18} className="ml-2" />
                  </div>
                </MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="px-10 py-5 rounded-full border border-white/10 font-bold text-sm uppercase tracking-[0.2em] transition-all text-white/80 hover:text-white hover:bg-white/5"
                >
                  Blueprint Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3"
        >
          <div className="w-px h-12 bg-gradient-to-b from-industrial-accent to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-industrial-steel font-bold">Protocol Scroll</span>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <ProductShowcase />
      <AnimatedFeatures />
      <div id="gallery">
        <ImageGallery />
      </div>
      <ExplainerVideo />
      <VideoSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
