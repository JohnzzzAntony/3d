"use client";

import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";

const galleryImages = [
  { src: "/images/shot-blast-1.png", title: "Kinetic Frame X", category: "Surface Architecture" },
  { src: "/images/conveyor-system.png", title: "Linear Flow Core", category: "Logistics Sync" },
  { src: "/images/sandblasting-cabinet.png", title: "Abrasive Chamber", category: "Component Lab" },
  { src: "/images/cnc-machining.png", title: "Precision Cell", category: "Fabrication" },
  { src: "/images/hydraulic-press.png", title: "Magnitude Press", category: "Heavy Structural" },
  { src: "/images/quality-control.png", title: "Integrity Lab", category: "Audit Sector" },
];

export default function ImageGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-32 space-y-8">
           <div className="w-1 h-20 bg-gradient-to-b from-white/20 to-transparent" />
           <h2 className="text-5xl lg:text-8xl font-orbitron font-black text-gradient leading-none">
             VISUAL <br /> <span className="opacity-40 italic font-light">EVIDENCE.</span>
           </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="relative rounded-[3rem] overflow-hidden glass-card cursor-pointer group border border-white/5 break-inside-avoid"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700 z-10" />
              <Image
                src={image.src}
                alt={image.title}
                width={800}
                height={600}
                className="w-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 z-20 translate-y-6 group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-2">{image.category}</div>
                <div className="text-2xl font-orbitron font-bold text-white">{image.title}</div>
              </div>
              <div className="absolute top-8 right-8 z-20 w-12 h-12 rounded-full glass-premium flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-white/10">
                <Maximize2 size={16} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-8 backdrop-blur-3xl"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-12 right-12 text-zinc-500 hover:text-white" onClick={() => setSelected(null)}>
              <X size={40} />
            </button>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-6xl w-full aspect-[4/3] rounded-[4rem] overflow-hidden border border-white/10"
            >
               <Image src={galleryImages[selected].src} alt={galleryImages[selected].title} fill className="object-cover grayscale" />
               <div className="absolute bottom-0 left-0 right-0 p-16 bg-gradient-to-t from-black via-black/40 to-transparent">
                  <div className="text-[12px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-4">{galleryImages[selected].category}</div>
                  <div className="text-5xl font-orbitron font-black text-white">{galleryImages[selected].title}</div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
