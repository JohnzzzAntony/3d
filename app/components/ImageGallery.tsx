"use client";

import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, Search } from "lucide-react";

const galleryImages = [
  { src: "/images/shot-blast-1.png", title: "Shot Blast Machine Pro X500", category: "Surface Preparation" },
  { src: "/images/conveyor-system.png", title: "Automated Conveyor System", category: "Material Handling" },
  { src: "/images/sandblasting-cabinet.png", title: "Industrial Sandblasting Cabinet", category: "Surface Treatment" },
  { src: "/images/cnc-machining.png", title: "CNC Precision Machining", category: "Manufacturing" },
  { src: "/images/hydraulic-press.png", title: "Hydraulic Press 500 Ton", category: "Heavy Machinery" },
  { src: "/images/quality-control.png", title: "Quality Control Lab", category: "Testing" },
];

export default function ImageGallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20
  });

  const scale = useTransform(smoothProgress, [0, 0.5], [0.95, 1]);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-industrial-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Archive Selection</span>
          <h2 className="text-4xl lg:text-5xl font-orbitron font-black mb-4 text-slate-900">
            SYSTEM <span className="text-slate-400">GALLERY</span>
          </h2>
          <div className="w-24 h-1 bg-industrial-accent mx-auto" />
        </motion.div>

        <motion.div 
          style={{ scale }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square overflow-hidden rounded-[3rem] cursor-pointer group border border-black/5 bg-white shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 z-20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <p className="text-industrial-accent text-[10px] uppercase tracking-[0.2em] font-black mb-3">{image.category}</p>
                <h3 className="text-slate-900 font-orbitron font-bold text-2xl leading-tight">{image.title}</h3>
              </div>
              <div className="absolute top-8 right-8 z-20 w-14 h-14 rounded-2xl bg-white/40 backdrop-blur-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white shadow-xl">
                <Search className="w-6 h-6 text-industrial-accent" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-white/95 flex items-center justify-center p-6 backdrop-blur-2xl"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors" onClick={() => setSelectedImage(null)}>
                <X className="w-12 h-12" />
              </motion.button>
              
              <motion.div className="relative max-w-6xl w-full aspect-[16/10] rounded-[4rem] overflow-hidden border border-black/5 shadow-2xl bg-white">
                <Image src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].title} fill className="object-contain p-8" />
                <div className="absolute bottom-0 left-0 right-0 p-16 bg-gradient-to-t from-white via-white/80 to-transparent">
                   <p className="text-industrial-accent text-sm font-black uppercase tracking-[0.4em] mb-4">{galleryImages[selectedImage].category}</p>
                   <h2 className="text-4xl font-orbitron font-black text-slate-900">{galleryImages[selectedImage].title}</h2>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
