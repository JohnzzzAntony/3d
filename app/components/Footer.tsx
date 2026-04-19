import { Github, Linkedin, Twitter, Facebook, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Solutions: ["Shot Blast Machines", "Sandblasting Units", "Conveyor Hubs", "Robotic Arms", "Surface Analyzers"],
    Resources: ["Engineering Specs", "Material Science", "Support Portal", "Case Studies", "Training"],
    Corporate: ["Operational Alpha", "Manufacturing Hub", "Career Nexus", "Sustainability", "Partners"],
    Compliance: ["ISO Standards", "Safety Protocols", "WEEE Directive", "REACH Policy", "Privacy"],
  };

  return (
    <footer className="relative bg-industrial-950 pt-32 pb-12 overflow-hidden">
      {/* Structural Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-industrial-accent/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-industrial-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-24">
          {/* Brand Identity */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-industrial-accent rounded-xl rotate-45 flex items-center justify-center">
                <span className="font-orbitron font-black text-white text-xl -rotate-45">W</span>
              </div>
              <div className="flex flex-col">
                <span className="font-orbitron font-bold text-2xl tracking-tighter">
                  WEKA <span className="text-industrial-accent">GLOBAL</span>
                </span>
                <span className="text-[9px] text-industrial-chrome uppercase tracking-[0.4em] font-bold">Industrial Vanguard</span>
              </div>
            </div>
            
            <p className="text-industrial-chrome text-sm leading-relaxed max-w-sm font-medium">
              Architecting the future of industrial surface preparation. Delivering precision-engineered 
              machinery for high-stakes manufacturing environments since 1987.
            </p>

            <div className="flex space-x-3">
              {[Twitter, Linkedin, Facebook, Github].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-industrial-chrome hover:text-industrial-accent hover:bg-white/10 border border-white/5 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            
            <div className="pt-4 flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-industrial-steel">
              <ShieldCheck size={16} className="text-industrial-accent" />
              <span>Verified Secure Chain</span>
            </div>
          </div>
          
          {/* Link Clusters */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="font-orbitron font-bold text-xs uppercase tracking-[0.3em] text-white">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="group flex items-center text-industrial-chrome hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                      {link} 
                      <ArrowUpRight size={10} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-industrial-accent" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Cinematic Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-industrial-steel text-[10px] font-bold uppercase tracking-[0.2em]">
              © {currentYear} Weka Machineries & Tools FZE. Terminal Alpha.
            </p>
            <div className="flex items-center space-x-6">
              {["System Status", "Compliance", "Architecture"].map(item => (
                <span key={item} className="flex items-center text-[9px] font-black uppercase tracking-[0.2em] text-industrial-steel/60">
                  <div className="w-1 h-1 bg-green-500 rounded-full mr-2 animate-pulse" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.3em] text-industrial-steel">
            <a href="#" className="hover:text-industrial-accent transition-colors">Nodes</a>
            <a href="#" className="hover:text-industrial-accent transition-colors">Encryption</a>
            <a href="#" className="hover:text-industrial-accent transition-colors">Gateway</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
