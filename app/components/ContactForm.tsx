"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, Terminal, Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 2000));
    setStatus("success");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section ref={ref} id="contact" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24">
          
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-600">Establish Link</div>
              <h2 className="text-6xl lg:text-8xl font-orbitron font-black text-gradient leading-[0.8] tracking-tighter">
                SECURE <br /> <span className="opacity-40 italic font-light">CHANNEL.</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              {[
                { icon: Mail, value: "gateway@industrial.ops" },
                { icon: Phone, value: "+1.800.CORE.SYNC" },
                { icon: MapPin, value: "Sector Alpha-7, MI" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center space-x-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all">
                       <Icon size={18} className="text-zinc-600 group-hover:text-white" />
                    </div>
                    <span className="font-orbitron font-bold text-lg tracking-widest text-zinc-500 group-hover:text-white transition-colors">{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass-card rounded-[3rem] p-10 lg:p-16 border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
             
             {status === "success" ? (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center space-y-8">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <CheckCircle className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-orbitron font-black uppercase tracking-tighter">Transmission Confirmed</h3>
                  <p className="text-zinc-500 font-medium">Data packets successfully routed to engineering.</p>
                  <button onClick={() => setStatus("idle")} className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 hover:text-white">New Transmission</button>
               </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-10">
                 <div className="space-y-8">
                   <div className="relative">
                      <input type="text" required placeholder="User Entity" className="w-full bg-transparent border-b border-white/10 py-4 font-semibold text-lg focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800" />
                   </div>
                   <div className="relative">
                      <input type="email" required placeholder="Binary Link (Email)" className="w-full bg-transparent border-b border-white/10 py-4 font-semibold text-lg focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800" />
                   </div>
                   <div className="relative">
                      <textarea required rows={4} placeholder="Input Parameters" className="w-full bg-transparent border-b border-white/10 py-4 font-semibold text-lg focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800 resize-none" />
                   </div>
                 </div>
                 
                 <motion.button
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   disabled={status === "sending"}
                   className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.5em] text-[10px] rounded-2xl hover:bg-zinc-200 transition-colors shadow-2xl shadow-white/10 disabled:opacity-50"
                 >
                   {status === "sending" ? "Syncing..." : "Transmit Data"}
                 </motion.button>
               </form>
             )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
