"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronRight, Target, Shield, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

const products = [
  {
    id: "01",
    name: "Tumble System X",
    desc: "Industrial-grade surface treatment with obsidian core stabilization.",
    image: "/images/shot-blast-machine.png",
    icon: Target,
  },
  {
    id: "02",
    name: "Linear Pass Pro",
    desc: "High-precision pass-through engineering with vacuum-sealed protocols.",
    image: "/images/sandblasting-equipment.png",
    icon: Shield,
  },
  {
    id: "03",
    name: "Delta Sync Core",
    desc: "Advanced core synchronization for rapid manufacturing deployment.",
    image: "/images/conveyor-system.png",
    icon: Zap,
  },
];

export default function ProductShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 10
  });

  return (
    <section ref={containerRef} id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="space-y-6">
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: 80 }}
               className="h-1 bg-white opacity-20"
            />
            <h2 className="text-5xl lg:text-8xl font-orbitron font-black text-gradient leading-none tracking-tighter">
              CHROME <br /> <span className="opacity-40 font-light italic">CATALOG</span>
            </h2>
          </div>
          
          <p className="text-xl text-zinc-500 max-w-sm font-medium leading-relaxed">
            High-fidelity hardware captures reimagined for superior industrial visualization.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {products.map((product, i) => {
            const Icon = product.icon;
            const y = useTransform(smoothProgress, [0, 1], [30 * (i + 1), -30 * (i + 1)]);

            return (
              <motion.div
                key={i}
                style={{ y }}
                className="group"
              >
                <div className="relative aspect-[3/4.2] rounded-[3rem] overflow-hidden glass-card transition-all duration-1000 group-hover:border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Subtle Grid Interaction */}
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity" 
                       style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                  <div className="relative h-full flex flex-col p-12">
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-16 h-16 rounded-2xl glass-premium flex items-center justify-center border border-white/5 group-hover:bg-white group-hover:border-white transition-all duration-700">
                        <Icon className="text-zinc-500 group-hover:text-black" size={24} />
                      </div>
                      <span className="text-sm font-orbitron font-bold text-zinc-700 group-hover:text-white transition-colors">{product.id}</span>
                    </div>
                    
                    <div className="relative flex-1 mb-12">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 drop-shadow-2xl"
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl font-orbitron font-black text-white tracking-widest">{product.name}</h3>
                      <p className="text-zinc-500 text-sm font-medium leading-relaxed group-hover:text-zinc-300 transition-colors">
                        {product.desc}
                      </p>
                    </div>

                    <div className="pt-10 flex items-center justify-between">
                       <button className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 group-hover:text-white transition-colors">
                          Technical Data
                       </button>
                       <MagneticButton>
                          <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white transition-all">
                             <ChevronRight size={20} className="text-zinc-500 group-hover:text-black" />
                          </div>
                       </MagneticButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
