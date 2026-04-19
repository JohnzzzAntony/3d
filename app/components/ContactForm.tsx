"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Terminal, HelpCircle, HardDrive } from "lucide-react";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", project: "Select Category", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormState("success");
    setTimeout(() => setFormState("idle"), 5000);
  };

  const contactInfo = [
    { icon: Mail, label: "Secure Uplink", value: "ops@weka-machineries.com" },
    { icon: Phone, label: "Direct Comms", value: "+1 (800) 900-SPEC" },
    { icon: MapPin, label: "Core Location", value: "Industrial Alpha, Zone 4, MI" },
  ];

  return (
    <section ref={ref} id="contact" className="py-32 relative bg-industrial-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-industrial-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Information Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <span className="inline-flex items-center px-3 py-1 bg-industrial-accent/10 rounded-md border border-industrial-accent/20">
                <Terminal size={12} className="text-industrial-accent mr-2" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-industrial-accent">Initialization Protocol</span>
              </span>
              <h2 className="text-4xl sm:text-5xl font-orbitron font-extrabold leading-none">
                CONFIGURE YOUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-accent to-orange-500">NEXT PROJECT</span>
              </h2>
              <p className="text-industrial-chrome text-lg font-medium leading-relaxed max-w-lg">
                Engage with our engineering board to define parameters for your custom industrial ecosystem. 
                Average response latency: &lt; 4.2 Hours.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-1 gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.label}
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="flex items-center space-x-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-industrial-accent/10 border border-industrial-accent/20 flex items-center justify-center transition-all group-hover:scale-110">
                      <Icon className="text-industrial-accent" size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.4em] text-industrial-steel font-black mb-1">{item.label}</div>
                      <div className="font-orbitron font-bold text-white tracking-widest">{item.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-12 xl:col-span-7"
          >
            <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem]">
              <div className="bg-industrial-900 rounded-[2.2rem] p-8 sm:p-12 border border-white/5">
                {formState === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 space-y-6"
                  >
                    <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-orbitron font-black uppercase tracking-tighter">Transmission Successful</h3>
                    <p className="text-industrial-chrome font-medium">Your request has been queued for immediate analysis by our engineering sector.</p>
                    <button 
                      onClick={() => setFormState("idle")}
                      className="text-industrial-accent text-xs font-black uppercase tracking-[0.4em] hover:text-white transition-colors"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-industrial-steel ml-1">Entity Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-6 py-4 bg-black/40 border border-white/5 rounded-2xl focus:outline-none focus:border-industrial-accent focus:bg-black/60 transition-all font-bold text-white placeholder:text-white/10"
                          placeholder="IDENTIFIER"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-industrial-steel ml-1">Gateway Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-6 py-4 bg-black/40 border border-white/5 rounded-2xl focus:outline-none focus:border-industrial-accent focus:bg-black/60 transition-all font-bold text-white placeholder:text-white/10"
                          placeholder="NODE@PROTOCOL.COM"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-industrial-steel ml-1">Project Category</label>
                      <select 
                         className="w-full px-6 py-4 bg-black/40 border border-white/5 rounded-2xl focus:outline-none focus:border-industrial-accent focus:bg-black/60 transition-all font-bold text-white/50 appearance-none"
                         value={formData.project}
                         onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      >
                        <option>Surface Preparation</option>
                        <option>System Integration</option>
                        <option>Custom Modification</option>
                        <option>Technical Audit</option>
                      </select>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-industrial-steel ml-1">Input Parameters</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-6 py-4 bg-black/40 border border-white/5 rounded-2xl focus:outline-none focus:border-industrial-accent focus:bg-black/60 transition-all font-bold text-white placeholder:text-white/10 resize-none"
                        placeholder="SPECIFY REQUIREMENTS..."
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={formState === "submitting"}
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(255, 107, 53, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-industrial-accent hover:bg-industrial-accentHover disabled:opacity-50 disabled:cursor-not-allowed py-6 rounded-2xl font-black uppercase tracking-[0.4em] flex items-center justify-center space-x-3 transition-all"
                    >
                      {formState === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Encrypting...</span>
                        </>
                      ) : (
                        <>
                          <span>Establish Connection</span>
                          <Send size={18} />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-12 opacity-30">
              <div className="flex items-center space-x-2">
                <HardDrive size={14} />
                <span className="text-[9px] font-black tracking-widest uppercase">ECC-256 Storage</span>
              </div>
              <div className="flex items-center space-x-2">
                <HelpCircle size={14} />
                <span className="text-[9px] font-black tracking-widest uppercase">Level 3 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
