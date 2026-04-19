"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X, ShieldCheck, Zap, Crosshair, BarChart } from "lucide-react";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [videoOpen, setVideoOpen] = useState(false);

  const dataNodes = [
    { label: "Sync Velocity", value: "99.99%", icon: ShieldCheck },
    { label: "Torque Load", value: "8.4kN", icon: Zap },
    { label: "Precision", value: "±0.01", icon: Crosshair },
    { label: "Efficiency", value: "98.2%", icon: BarChart },
  ];

  return (
    <section ref={ref} id="laboratory" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]"
              >
                Calibration Feed v.90
              </motion.div>
              <h2 className="text-5xl lg:text-8xl font-orbitron font-black leading-[0.8] text-gradient">
                SENSORY <br /> <span className="opacity-40 font-light">EVIDENCE.</span>
              </h2>
              <p className="text-zinc-500 text-xl font-medium leading-relaxed max-w-xl">
                Observe the structural harmonics of our precision manufacturing systems 
                captured through high-fidelity visual sensors.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {dataNodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="p-8 rounded-3xl glass-card border border-white/5 space-y-4"
                  >
                    <Icon className="text-zinc-600" size={20} />
                    <div>
                      <div className="text-2xl font-orbitron font-black text-white">{node.value}</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600">{node.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="lg:w-1/2 w-full"
          >
            <div 
              className="relative aspect-[4/5] rounded-[4rem] overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
              onClick={() => setVideoOpen(true)}
            >
               <video 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-100 transition-all duration-1000"
                autoPlay muted loop playsInline
               >
                 <source src="/images/new/Industrial_gears_CNC_202604181748.mp4" type="video/mp4" />
               </video>
               
               <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
               
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full glass-premium border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-700">
                     <Play className="text-white group-hover:text-black ml-1" fill="currentColor" size={32} />
                  </div>
               </div>

               <div className="absolute top-10 left-10 p-4 border-l border-white/20">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Visual Source</div>
                  <div className="text-xs font-orbitron font-bold text-zinc-400">LAB_SYNC_2026</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {videoOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-8 backdrop-blur-3xl"
          onClick={() => setVideoOpen(false)}
        >
          <button className="absolute top-12 right-12 text-zinc-500 hover:text-white" onClick={() => setVideoOpen(false)}>
            <X size={40} />
          </button>
          <div className="w-full max-w-6xl aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
             <video className="w-full h-full" controls autoPlay>
                <source src="/images/new/Industrial_gears_CNC_202604181748.mp4" type="video/mp4" />
             </video>
          </div>
        </motion.div>
      )}
    </section>
  );
}
