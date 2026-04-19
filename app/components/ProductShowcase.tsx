"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronRight, Target, Zap, Shield } from "lucide-react";

const products = [
  {
    id: "01",
    name: "Precision Blade Sync",
    desc: "Ultra-high RPM processing with aerodynamic fin stabilization. Engineered for minimal turbulence.",
    image: "/images/new/Whisk_185c0eafa28fb3b89084b4741c9eca62dr.png",
    icon: Target,
  },
  {
    id: "02",
    name: "Kinetic Core Mixer",
    desc: "Next-gen industrial mixing system with reinforced skeletal structural integrity.",
    image: "/images/new/Whisk_72980c8b82836d19f5c4fae3451a3e53dr.png",
    icon: Zap,
  },
  {
    id: "03",
    name: "Industrial Shell Shield",
    desc: "Reinforced protective housing for heavy-duty manufacturing environments.",
    image: "/images/new/Whisk_185c0eafa28fb3b89084b4741c9eca62dr.png",
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
            <div className="text-industrial-accent text-xs font-black tracking-[0.4em] uppercase">Tech Catalog V.05</div>
            <h2 className="text-4xl lg:text-7xl font-orbitron font-black leading-none text-slate-900">
              PRECISION <br /> <span className="text-slate-300 italic">INSTRUMENTS</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed"
          >
            Leveraging real-world asset captures for high-fidelity industrial simulations and hardware deployments.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {products.map((product, i) => {
            const Icon = product.icon;
            const y = useTransform(smoothProgress, [0, 1], [40 * (i + 1), -40 * (i + 1)]);

            return (
              <motion.div
                key={i}
                style={{ y }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden bg-slate-50 border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-700">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 transition-all duration-1000 group-hover:scale-110 drop-shadow-2xl"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                  
                  <div className="absolute bottom-12 left-10 right-10 space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-black/5 group-hover:bg-industrial-accent transition-colors duration-500">
                      <Icon className="text-industrial-accent group-hover:text-white" size={24} />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-3xl font-orbitron font-black text-slate-900 tracking-tighter">{product.name}</h3>
                       <p className="text-slate-500 text-sm font-medium leading-relaxed">
                        {product.desc}
                       </p>
                    </div>
                    <button className="flex items-center space-x-2 text-industrial-accent text-[10px] font-black uppercase tracking-[0.4em] pt-4">
                      <span>View Blueprints</span>
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
