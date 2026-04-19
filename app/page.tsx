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
import PremiumBackground from "./components/PremiumBackground";
import MagneticButton from "./components/MagneticButton";
import ExplainerVideo from "./components/ExplainerVideo";
import SmoothScroll from "./components/SmoothScroll";
import { ArrowDown, Menu, X, ChevronRight, Hash, Shield, Globe } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerY = useTransform(scrollY, [0, 100], [-20, 0]);
  
  const navItems = ["Overview", "Evolution", "Gallery", "Laboratory", "Contact"];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050505] font-sans selection:bg-white selection:text-black relative text-white antialiased">
        {/* Raytraced Background Animation */}
        <PremiumBackground />

        {/* Executive Navigation */}
        <motion.header 
          style={{ 
            opacity: headerOpacity,
            y: headerY
          }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl glass-premium rounded-full px-8 py-4 hidden lg:flex items-center justify-between"
        >
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-orbitron font-black text-black group-hover:rotate-12 transition-transform">M</div>
              <span className="font-orbitron font-bold text-lg tracking-[0.2em] text-gradient">MACHINERIES</span>
            </div>
            
            <nav className="flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-zinc-600 mr-4">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest">System Online</span>
            </div>
            <MagneticButton>
              <div className="px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-colors">
                Connect
              </div>
            </MagneticButton>
          </div>
        </motion.header>

        {/* Mobile Nav Button */}
        <div className="lg:hidden fixed top-8 right-8 z-50">
           <button 
            className="w-14 h-14 glass-premium rounded-2xl flex items-center justify-center text-white"
            onClick={() => setMobileMenuOpen(true)}
           >
             <Menu size={24} />
           </button>
        </div>

        {/* Premium Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <Hero3D />
          
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent z-[1]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-4xl space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-4 glass-card px-5 py-2.5 rounded-full border border-white/10"
              >
                <Hash size={14} className="text-zinc-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Precision Protocol v.82.0</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-7xl sm:text-9xl font-orbitron font-black leading-[0.85] tracking-tighter text-gradient"
              >
                ENGINEERED <br />
                <span className="italic font-light opacity-80">INTEGRITY.</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-10"
              >
                <p className="text-xl text-zinc-500 max-w-sm leading-relaxed font-medium">
                  Defining the future of industrial automation through high-refraction 
                  engineering and structural synchronization.
                </p>
                
                <div className="h-px flex-1 bg-white/10 hidden sm:block" />
                
                <div className="flex items-center gap-6">
                  <MagneticButton>
                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group hover:bg-white hover:border-white transition-all duration-700">
                      <ChevronRight className="text-white group-hover:text-black" size={24} />
                    </div>
                  </MagneticButton>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Discover <br /> Architecture</div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute right-12 bottom-12 hidden xl:flex flex-col space-y-8 z-10"
          >
             {[Shield, Globe, Activity].map((Icon, i) => (
                <div key={i} className="flex items-center justify-end space-x-4 group cursor-pointer">
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 group-hover:text-white transition-colors">Safety Standard {i+1}</span>
                   <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all">
                      <Icon size={16} className="text-zinc-500 group-hover:text-white" />
                   </div>
                </div>
             ))}
          </motion.div>
        </section>

        {/* Content Layers with Overlapping Depth */}
        <div className="relative z-10 space-y-48 pb-48">
          <ProductShowcase />
          <AnimatedFeatures />
          <ImageGallery />
          <ExplainerVideo />
          <VideoSection />
          <ContactForm />
        </div>

        <Footer />
      </main>
    </SmoothScroll>
  );
}

import { Activity } from "lucide-react";
