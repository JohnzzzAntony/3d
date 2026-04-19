"use client";

import { motion } from "framer-motion";

export default function ExplainerVideo() {
  return (
    <section className="py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-24">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-10"
        >
          <div className="inline-flex items-center space-x-3 text-zinc-500">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Proprietary Sync</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-orbitron font-black leading-none text-gradient">
            MECHANICAL <br /> <span className="opacity-40 italic font-light">ELEGANCE.</span>
          </h2>
          
          <p className="text-zinc-500 text-xl leading-relaxed font-medium max-w-xl">
            Our systems utilize refractive kinetic loops to ensure that every industrial 
            process operates at peak efficiency with zero tolerance for variance.
          </p>
          
          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
             <div>
               <div className="text-4xl font-orbitron font-black text-white">0.02μ</div>
               <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mt-2">Precision Delta</div>
             </div>
             <div>
               <div className="text-4xl font-orbitron font-black text-white">100%</div>
               <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mt-2">Core Integrity</div>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative w-full aspect-square"
        >
           {/* Refractive Geometric Element */}
           <div className="absolute inset-0 border border-white/5 rounded-[4rem] rotate-45 transform" />
           <div className="absolute inset-10 border border-white/10 rounded-[3rem] -rotate-12 transform" />
           
           <div className="relative w-full h-full flex items-center justify-center p-16">
              <div className="w-full h-full glass-premium rounded-full flex items-center justify-center border border-white/10 overflow-hidden">
                 <iframe 
                  src="https://lottie.host/embed/8e5b61cc-9d29-4a0b-9366-51e4ce427a71/jX9hKUnGzN.json"
                  className="w-full h-full border-0 pointer-events-none opacity-40 scale-150"
                 />
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
