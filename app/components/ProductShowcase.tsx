"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Settings, Shield, Zap, Globe } from "lucide-react";

const products = [
  {
    id: "01",
    title: "Shot Blast Machines",
    subtitle: "Surface Treatment",
    description: "High-efficiency systems for metal finishing, descaling, and cleaning applications with automated media recycling.",
    image: "/images/shot-blast-machine.png",
    features: ["Digital Control Interface", "Advanced Dust Filtration", "Variable Speed Turbines"],
  },
  {
    id: "02",
    title: "Sandblasting Units",
    subtitle: "Abrasive Solutions",
    description: "Professional-grade blasting cabinets and portable pots for precision surface preparation and material removal.",
    image: "/images/sandblasting-equipment.png",
    features: ["Pressure Regulation", "Multi-Nozzle Support", "Reinforced Blasting Chamber"],
  },
  {
    id: "03",
    title: "Conveyor Systems",
    subtitle: "Material Handling",
    description: "Custom-engineered conveyor solutions for integrated production lines with smart load-sensing technology.",
    image: "/images/conveyor-system.png",
    features: ["Load Balancing", "Emergency Stops", "Modular Integration"],
  },
];

export default function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" ref={ref} className="py-32 relative overflow-hidden bg-industrial-950">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-grid-pattern" style={{ backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-industrial-accent/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-industrial-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-industrial-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Product Engineering</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-extrabold leading-tight">
              Mastery in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-accent to-orange-400">
                Performance
              </span>
            </h2>
          </div>
          <p className="text-industrial-chrome max-w-md text-lg leading-relaxed lg:pb-2">
            Our industrial catalog represents the pinnacle of surface engineering, built for 24/7 heavy-duty operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative flex flex-col bg-industrial-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-industrial-accent/40 hover:bg-industrial-800/50 transition-all duration-500 shadow-2xl"
            >
              {/* Card index decor */}
              <div className="absolute top-6 right-8 text-5xl font-orbitron font-black text-white/5 group-hover:text-industrial-accent/10 transition-colors">
                {product.id}
              </div>

              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-transparent to-transparent opacity-60" />
                
                {/* Overlay Accent */}
                <div className="absolute bottom-4 left-6 py-1 px-3 bg-industrial-accent/20 backdrop-blur-md rounded-full border border-industrial-accent/30">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-industrial-accent">{product.subtitle}</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow space-y-5">
                <h3 className="text-2xl font-bold font-orbitron group-hover:text-industrial-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-industrial-chrome leading-relaxed text-sm">
                  {product.description}
                </p>
                
                <div className="space-y-3 pt-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center text-xs text-industrial-steel font-medium">
                      <Settings size={14} className="text-industrial-accent/60 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 mt-auto">
                  <motion.button
                    whileHover={{ gap: '1rem' }}
                    className="flex items-center text-white text-sm font-bold uppercase tracking-widest group/btn border-b border-industrial-accent/0 hover:border-industrial-accent transition-all pb-1"
                  >
                    Specifications <ArrowRight size={16} className="ml-2 text-industrial-accent" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
