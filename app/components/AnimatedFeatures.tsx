"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Factory, Award, Clock, Headphones, Target, Zap, ShieldCheck, Cpu } from "lucide-react";

const features = [
  { icon: Factory, title: "Precision Casting", desc: "Advanced metal casting with micron-level tolerances and structural integrity testing.", color: "#ff6b35" },
  { icon: Award, title: "Global Compliance", desc: "ISO 9001:2015 certified production pipelines ensuring regulatory mastery.", color: "#3b82f6" },
  { icon: Clock, title: "Operational Continuity", desc: "24/7 mission-critical support with guaranteed next-day replacement parts.", color: "#10b981" },
  { icon: Cpu, title: "AI Integration", desc: "Smart machinery with predictive maintenance and real-time telemetry.", color: "#f59e0b" },
];

export default function AnimatedFeatures() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-32 relative bg-industrial-950 overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-around pointer-events-none opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px h-full bg-white" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          style={{ opacity }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className="relative mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <Icon style={{ color: feature.color }} size={32} />
                  </div>
                  {/* Decorative corner */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-industrial-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-orbitron font-bold mb-4 group-hover:text-industrial-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-industrial-chrome text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>
                
                <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-industrial-steel group-hover:text-white transition-colors">
                  Read Protocol <Zap size={10} className="ml-2 text-industrial-accent" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
