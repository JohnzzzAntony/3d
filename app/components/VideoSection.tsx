"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X, Zap, Target, BarChart3, Database, ShieldCheck } from "lucide-react";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [videoOpen, setVideoOpen] = useState(false);

  const stats = [
    { label: "Surface Integrity", value: "99.9%", icon: ShieldCheck },
    { label: "Kinetic Efficiency", value: "+45%", icon: Zap },
    { label: "Target Precision", value: "0.01mm", icon: Target },
    { label: "Operational Life", value: "25Y+", icon: Database },
  ];

  return (
    <section ref={ref} id="solutions" className="py-32 relative bg-industrial-950 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-industrial-accent/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <div className="w-1.5 h-1.5 bg-industrial-accent rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-industrial-chrome">Live Performance Audit</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-orbitron font-extrabold leading-none">
                STRUCTURAL <br />
                <span className="text-industrial-accent italic">EVOLUTION</span>
              </h2>
              <p className="text-industrial-chrome text-lg font-medium leading-relaxed max-w-xl">
                Observe the kinetic transformation of industrial substrates. Our automated shot-peening 
                systems utilize advanced telemetry to achieve unprecedented structural hardening.
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
                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-industrial-accent/10 flex items-center justify-center">
                      <Icon className="text-industrial-accent" size={18} />
                    </div>
                    <div>
                      <div className="text-2xl font-orbitron font-black text-white">{stat.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-industrial-steel">{stat.label}</div>
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
            {/* Outer Glow */}
            <div className="absolute -inset-4 bg-industrial-accent/20 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
            
            <div 
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden cursor-pointer border border-white/10 shadow-2xl"
              onClick={() => setVideoOpen(true)}
            >
              <img 
                src="/images/video-thumbnail.png" 
                alt="Product Demo"
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              
              {/* HUD Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent opacity-80" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 rounded-full bg-industrial-accent flex items-center justify-center shadow-2xl shadow-industrial-accent/40"
                >
                  <Play size={32} className="text-white fill-white ml-2" />
                </motion.div>
              </div>

              {/* Data Overlay */}
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="space-y-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-industrial-900 bg-industrial-800 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-industrial-900 bg-industrial-accent flex items-center justify-center text-[10px] font-black">
                      +12k
                    </div>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em]">Engineering Protocol V.12</div>
                </div>
                <div className="text-right">
                   <div className="text-xs font-bold text-industrial-accent uppercase tracking-widest mb-1">04:22</div>
                   <div className="text-[10px] text-industrial-chrome uppercase font-bold tracking-widest">Time Variance</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Cinematic Modal */}
      {videoOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 backdrop-blur-2xl"
          onClick={() => setVideoOpen(false)}
        >
          <button 
            className="absolute top-10 right-10 p-4 text-white/50 hover:text-white transition-colors"
            onClick={() => setVideoOpen(false)}
          >
            <X size={32} />
          </button>
          
          <motion.div 
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="w-full max-w-6xl aspect-video bg-black rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,107,53,0.3)]"
          >
             <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Industrial Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
