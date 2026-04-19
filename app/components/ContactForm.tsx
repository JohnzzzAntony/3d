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
    { icon: Mail, label: "Secure Link", value: "ops@industrial-systems.com" },
    { icon: Phone, label: "Direct Comms", value: "+1 (800) 900-SPEC" },
    { icon: MapPin, label: "Location", value: "Industrial Alpha, Zone 4, MI" },
  ];

  return (
    <section ref={ref} id="contact" className="py-32 relative bg-white overflow-hidden">
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
              <span className="inline-flex items-center px-3 py-1 bg-industrial-accent/5 rounded-md border border-industrial-accent/10">
                <Terminal size={12} className="text-industrial-accent mr-2" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-industrial-accent">Engineering Gateway</span>
              </span>
              <h2 className="text-4xl sm:text-5xl font-orbitron font-extrabold leading-none text-slate-900">
                INITIALIZE <br />
                <span className="text-industrial-accent">PROJECT</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-lg">
                Connect with our engineering technical board to define custom parameters.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-1 gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.label}
                    whileHover={{ x: 10, backgroundColor: "rgba(0,0,0,0.02)" }}
                    className="flex items-center space-x-6 p-6 rounded-2xl bg-slate-50 border border-black/5 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-industrial-accent/5 border border-industrial-accent/10 flex items-center justify-center transition-all group-hover:scale-110">
                      <Icon className="text-industrial-accent" size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-black mb-1">{item.label}</div>
                      <div className="font-orbitron font-bold text-slate-900 tracking-widest">{item.value}</div>
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
            <div className="bg-slate-50 rounded-[2.5rem] p-8 sm:p-12 border border-black/5 shadow-xl">
              {formState === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-24 h-24 rounded-full bg-green-500/5 border border-green-500/10 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-black text-slate-900 uppercase tracking-tighter">Transmission Sent</h3>
                  <p className="text-slate-500 font-medium">Our engineering sector is analyzing your request.</p>
                  <button onClick={() => setFormState("idle")} className="text-industrial-accent text-xs font-black uppercase tracking-[0.4em]">New Inquiry</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Entity Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-none focus:border-industrial-accent transition-all font-bold text-slate-900 placeholder:text-slate-300"
                        placeholder="IDENTIFIER"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Email Node</label>
                      <input
                        type="email"
                        required
                        className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-none focus:border-industrial-accent transition-all font-bold text-slate-900 placeholder:text-slate-300"
                        placeholder="NODE@SYSTEM.COM"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Input Specifications</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-none focus:border-industrial-accent transition-all font-bold text-slate-900 placeholder:text-slate-300 resize-none"
                      placeholder="SPECIFY REQUIREMENTS..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={formState === "submitting"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-industrial-accent hover:bg-industrial-accentHover py-6 rounded-2xl text-white font-black uppercase tracking-[0.4em] flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all"
                  >
                    {formState === "submitting" ? <span>Analyzing...</span> : <span>Establish Connection</span>}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
