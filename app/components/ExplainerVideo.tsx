"use client";

import Lottie from "lottie-react";
import { motion } from "framer-motion";

// Using a placeholder Lottie animation for industrial process
// In a real scenario, you would import a local JSON file: import animationData from "@/public/animations/industrial.json";
const animationUrl = "https://assets9.lottiefiles.com/packages/lf20_5njp3v8L.json"; // Gears animation

export default function ExplainerVideo() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center space-x-2 text-industrial-accent">
            <div className="w-2 h-2 rounded-full bg-industrial-accent animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Operational Logic</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-orbitron font-black leading-tight text-slate-900">
            How Our <br /> <span className="text-industrial-accent">Systems Integrate.</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed font-medium">
            Industrial systems utilize specialized kinetic loops and real-time telemetry 
            synchronization. Our proprietary gear ratio synchronization reduces 
            friction loss by 22% while maintaining peak torque output.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5">
             <div>
               <div className="text-3xl font-orbitron font-black text-slate-900">0.4ms</div>
               <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Data Latency</div>
             </div>
             <div>
               <div className="text-3xl font-orbitron font-black text-slate-900">100%</div>
               <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Sync Accuracy</div>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative w-full max-w-2xl aspect-square"
        >
           {/* Visual Decorative Rings */}
           <div className="absolute inset-0 border border-black/5 rounded-full animate-[spin_20s_linear_infinite]" />
           <div className="absolute inset-12 border border-industrial-accent/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
           
           <div className="relative w-full h-full flex items-center justify-center p-12">
              <iframe 
                src="https://lottie.host/embed/8e5b61cc-9d29-4a0b-9366-51e4ce427a71/jX9hKUnGzN.json"
                className="w-full h-full border-0 pointer-events-none opacity-80"
              />
           </div>
        </motion.div>

      </div>
    </section>
  );
}
