"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronRight, Cpu, Zap, Activity } from "lucide-react";
import MagneticButton from "./MagneticButton";

const products = [
  {
    id: "α-01",
    name: "Tumble Quantum",
    desc: "Quantum-stabilized batch processing for molecular-level finishing accuracy.",
    image: "/images/shot-blast-machine.png",
    icon: Activity,
  },
  {
    id: "β-02",
    name: "Linear Pass-Field",
    desc: "Continuous field-aligned surface treatment for hyper-structural sections.",
    image: "/images/sandblasting-equipment.png",
    icon: Cpu,
  },
  {
    id: "γ-03",
    name: "Table Sync Core",
    desc: "Precision core engineering for delicate sub-atomic component integrity.",
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
    stiffness: 40,
    damping: 20
  });

  return (
    <section ref={containerRef} id="products" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-24 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-0.5 w-12 bg-sky-500" />
            <span className="text-sky-500 text-xs font-black uppercase tracking-[0.5em]">Inventory Stream</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-orbitron font-black leading-none italic">
            DIGITAL <br /> <span className="text-sky-500 not-italic text-glow">RESOURCES</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {products.map((product, i) => {
            const Icon = product.icon;
            const y = useTransform(smoothProgress, [0, 1], [80 * (i + 1), -80 * (i + 1)]);

            return (
              <motion.div
                key={i}
                style={{ y }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] rounded-[2.5rem] p-1 glass-v2 transition-all duration-700 hover:border-sky-500/40">
                  <div className="absolute inset-x-8 top-12 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
                  
                  <div className="relative h-full w-full rounded-[2.3rem] overflow-hidden bg-[#0f172a]/40 backdrop-blur-md px-10 pt-20 pb-12 flex flex-col items-center text-center">
                    <div className="absolute top-10 right-10 text-2xl font-orbitron font-black text-sky-500/10 group-hover:text-sky-500/20 transition-colors">
                      {product.id}
                    </div>
                    
                    <div className="relative w-40 h-40 mb-10">
                      <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all" />
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_20px_rgba(14,165,233,0.3)] grayscale group-hover:grayscale-0"
                      />
                    </div>

                    <div className="mt-auto space-y-4">
                      <h3 className="text-2xl font-orbitron font-black text-white tracking-widest">{product.name}</h3>
                      <p className="text-sky-100/40 text-sm font-medium leading-relaxed">
                        {product.desc}
                      </p>
                      
                      <div className="pt-6">
                         <MagneticButton>
                            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all duration-500">
                               <ChevronRight className="text-sky-500 group-hover:text-white" size={24} />
                            </div>
                         </MagneticButton>
                      </div>
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
