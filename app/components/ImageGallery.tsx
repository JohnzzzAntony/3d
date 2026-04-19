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
  
  // Apply a smooth spring to the scroll progress for "floating" animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  const scale = useTransform(smoothProgress, [0, 0.5], [0.85, 1]);
  const y = useTransform(smoothProgress, [0, 1], [-50, 50]); // Added parallax movement
  
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
              style={{ y: index % 2 === 0 ? y : 0 }} // Staggered parallax for flowing effect
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ y: -15, transition: { duration: 0.4 } }}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] cursor-pointer group border border-white/5 bg-industrial-900 will-change-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <Image
                src={image.src}
                alt={image.title}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 z-20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <p className="text-industrial-accent text-[10px] uppercase tracking-[0.2em] font-black mb-3">{image.category}</p>
                <h3 className="text-white font-orbitron font-bold text-2xl leading-tight">{image.title}</h3>
              </div>
              <div className="absolute top-8 right-8 z-20 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/10 scale-50 group-hover:scale-100">
                <Search className="w-6 h-6 text-white" />
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
              className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-6 backdrop-blur-3xl"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-12 h-12" />
              </motion.button>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative max-w-7xl w-full aspect-[16/9] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-16 bg-gradient-to-t from-black via-black/60 to-transparent">
                   <p className="text-industrial-accent text-sm font-black uppercase tracking-[0.4em] mb-4">
                    {galleryImages[selectedImage].category}
                   </p>
                   <h2 className="text-5xl font-orbitron font-black text-white tracking-tighter">
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
