"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronRight, Layers, Cpu, Shield } from "lucide-react";

const products = [
  {
    id: "01",
    name: "Tumble Blast Systems",
    desc: "Automated batch processing for high-volume component finishing. Optimized for durability.",
    image: "/images/shot-blast-machine.png",
    icon: Layers,
  },
  {
    id: "02",
    name: "Linear Pass-Through",
    desc: "Continuous surface treatment for structural steel and large plate sections.",
    image: "/images/sandblasting-equipment.png",
    icon: Cpu,
  },
  {
    id: "03",
    name: "Table Blast Units",
    desc: "Precision engineering for delicate components requiring targeted abrasive impact.",
    image: "/images/conveyor-system.png",
    icon: Shield,
  },
];

export default function ProductShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 25
  });

  return (
    <section ref={containerRef} id="products" className="py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-industrial-accent text-xs font-black tracking-[0.4em] uppercase">Inventory V.04</div>
            <h2 className="text-4xl lg:text-6xl font-orbitron font-black leading-none text-slate-900">
              ENGINEERED <br /> <span className="text-slate-400">SOLUTIONS</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-sm text-lg font-medium"
          >
            Military-grade surface preparation technology designed for the world's most demanding environments.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {products.map((product, i) => {
            const Icon = product.icon;
            const y = useTransform(smoothProgress, [0, 1], [50, -50]);

            return (
              <motion.div
                key={product.id}
                style={{ y }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-slate-50 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-10 group-hover:opacity-100"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                  
                  <div className="absolute top-10 left-10 text-6xl font-orbitron font-black opacity-5 text-black group-hover:opacity-10 transition-opacity">
                    {product.id}
                  </div>

                  <div className="absolute bottom-12 left-10 right-10 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-industrial-accent/10 flex items-center justify-center border border-industrial-accent/20 group-hover:bg-industrial-accent transition-colors duration-500">
                      <Icon className="text-industrial-accent group-hover:text-white" size={24} />
                    </div>
                    <h3 className="text-3xl font-orbitron font-black text-slate-900">{product.name}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                      {product.desc}
                    </p>
                    <button className="flex items-center space-x-2 text-industrial-accent text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300">
                      <span>Specifications</span>
                      <ChevronRight size={14} />
                    </button>
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
