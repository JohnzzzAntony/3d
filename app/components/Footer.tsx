"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowUpRight, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-industrial-accent rounded-lg flex items-center justify-center font-orbitron font-black text-white">W</div>
              <span className="font-orbitron font-bold text-xl tracking-tighter text-slate-900">WEKA MACHINES</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Global leaders in surface preparation and industrial automation since 1987. 
              Engineering excellence for a resilient future.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center hover:border-industrial-accent hover:text-industrial-accent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-orbitron font-bold text-sm uppercase tracking-widest mb-8">Solutions</h4>
            <ul className="space-y-4">
              {["Surface Prep", "Material Handling", "Automation", "Technical Audit"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-industrial-accent text-sm font-medium transition-colors flex items-center group">
                    <span>{link}</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-orbitron font-bold text-sm uppercase tracking-widest mb-8">Corporate</h4>
            <ul className="space-y-4">
              {["Global Reach", "Sustainability", "R&D Labs", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-industrial-accent text-sm font-medium transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-black/5 space-y-6">
            <div className="flex items-center space-x-3 text-industrial-accent">
              <ShieldCheck size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Secure Protocol</span>
            </div>
            <div className="text-slate-900 font-orbitron font-bold text-lg leading-tight">
              Ready to modernize your production?
            </div>
            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-industrial-accent transition-colors">
              Request Audit
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 gap-6">
          <div className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            © {currentYear} WEKA Machineries FZE. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-8">
             <div className="flex items-center space-x-2 text-green-600">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] uppercase font-bold tracking-widest">Global Status: Online</span>
             </div>
             <div className="flex items-center space-x-2 text-slate-400 cursor-pointer hover:text-slate-900 transition-colors">
               <Globe size={14} />
               <span className="text-[10px] uppercase font-bold tracking-widest">EN-US</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
