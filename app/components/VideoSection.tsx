"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X, Zap, Target, BarChart3, Database, ShieldCheck } from "lucide-react";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [videoOpen, setVideoOpen] = useState(false);

  const stats = [
    { label: "Cycle Integration", value: "99.8%", icon: ShieldCheck },
    { label: "Kinetic Velocity", value: "x2.4", icon: Zap },
    { label: "Tolerance Gap", value: "±0.002", icon: Target },
    { label: "Runtime Efficiency", value: "98%", icon: Database },
  ];

  return (
    <section ref={ref} id="solutions" className="py-32 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-100 rounded-full border border-black/5">
                <div className="w-1.5 h-1.5 bg-industrial-accent rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Live Telemetry Analysis</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-orbitron font-black leading-none text-slate-900">
                INDUSTRIAL <br />
                <span className="text-industrial-accent italic">BENCHMARK</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl">
                Observe high-precision CNC synchronization in real-time. Our automated protocols 
                ensure that every gear rotation meets mechanical integrity standards.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="p-6 rounded-3xl bg-slate-50 border border-black/5 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-industrial-accent/5 flex items-center justify-center">
                      <Icon className="text-industrial-accent" size={18} />
                    </div>
                    <div>
                      <div className="text-2xl font-orbitron font-black text-slate-900">{stat.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative group lg:ml-auto w-full lg:max-w-xl"
          >
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden cursor-pointer border border-black/5 shadow-2xl bg-slate-100" onClick={() => setVideoOpen(true)}>
              {/* Background Video Preview */}
              <video 
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/images/new/Industrial_gears_CNC_202604181748.mp4" type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 rounded-full bg-industrial-accent flex items-center justify-center shadow-2xl shadow-industrial-accent/40"
                >
                  <Play size={32} className="text-white fill-white ml-2" />
                </motion.div>
              </div>

              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end text-white mix-blend-difference">
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em]">Source: CNC_SYNC_V4</div>
                  <div className="text-lg font-orbitron font-bold">LIVE FEED</div>
                </div>
                <div className="text-right">
                   <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Variance</div>
                   <div className="text-xs font-bold uppercase italic">0.02%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Light Mode Video Modal */}
      {videoOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-white/95 flex items-center justify-center p-6 backdrop-blur-2xl"
          onClick={() => setVideoOpen(false)}
        >
          <button className="absolute top-10 right-10 text-slate-900/50 hover:text-slate-900" onClick={() => setVideoOpen(false)}>
            <X size={32} />
          </button>
          
          <motion.div 
            initial={{ scale: 0.95, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="w-full max-w-6xl aspect-video bg-black rounded-[3rem] overflow-hidden shadow-2xl"
          >
             <video className="w-full h-full" controls autoPlay>
                <source src="/images/new/Industrial_gears_CNC_202604181748.mp4" type="video/mp4" />
             </video>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
