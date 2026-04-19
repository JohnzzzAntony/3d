"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-industrial-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-industrial-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Visual Inventory</span>
          <h2 className="text-4xl lg:text-5xl font-orbitron font-black mb-4">
            EQUIPMENT <span className="text-industrial-accent">GALLERY</span>
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
              className="relative aspect-[4/3] overflow-hidden rounded-[2rem] cursor-pointer group border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-industrial-accent text-[10px] uppercase tracking-[0.2em] font-black mb-2">{image.category}</p>
                <h3 className="text-white font-orbitron font-bold text-xl leading-tight">{image.title}</h3>
              </div>
              <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-2xl bg-industrial-accent/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-industrial-accent/30">
                <Search className="w-5 h-5 text-industrial-accent" />
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
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 backdrop-blur-2xl"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-10 h-10" />
              </motion.button>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative max-w-6xl w-full aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/10"
              >
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black via-black/40 to-transparent">
                   <p className="text-industrial-accent text-xs font-black uppercase tracking-[0.3em] mb-2">
                    {galleryImages[selectedImage].category}
                   </p>
                   <h2 className="text-3xl font-orbitron font-black text-white">
                    {galleryImages[selectedImage].title}
                   </h2>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
