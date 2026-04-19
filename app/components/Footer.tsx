"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowUpRight, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-32 pb-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-20 mb-32">
          
          <div className="md:col-span-12 lg:col-span-5 space-y-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-orbitron font-black text-black text-xl shadow-2xl">M</div>
              <span className="font-orbitron font-black text-2xl tracking-[0.3em] text-gradient">MACHINERIES</span>
            </div>
            <p className="text-zinc-500 text-lg leading-relaxed font-medium max-w-md">
              The benchmark in industrial precision. Engineering resilience for the global manufacturing sector through structural synchronization.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-2 space-y-8">
            <h4 className="text-white font-orbitron font-bold text-xs uppercase tracking-[0.4em]">Sector</h4>
            <ul className="space-y-4">
              {["Evolution", "Lab Sync", "Gallery", "Audit"].map((link) => (
                <li key={link}><a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2 space-y-8">
            <h4 className="text-white font-orbitron font-bold text-xs uppercase tracking-[0.4em]">Resource</h4>
            <ul className="space-y-4">
              {["Blueprint", "Protocol", "Network", "Safety"].map((link) => (
                <li key={link}><a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
             <div className="glass-card rounded-[2.5rem] p-10 border border-white/10 space-y-8">
                <div className="text-2xl font-orbitron font-bold text-white tracking-widest">Modernize your <br /> production.</div>
                <button className="w-full py-5 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-zinc-200 transition-colors">
                  Initialize Audit
                </button>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-10">
          <div className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.5em]">
            © {currentYear} Global Machineries Elite Group. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-12 opacity-40">
             <div className="flex items-center space-x-3 text-white">
               <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
               <span className="text-[9px] uppercase font-black tracking-[0.5em]">Network: AES-256</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
