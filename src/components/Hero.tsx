import { motion } from 'motion/react';
import { djData } from '../data/djData';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={djData.heroImage} 
          alt="DJ Performance" 
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Dark gradient overlay for readability and dramatic effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950"></div>
        {/* Subtle radial glow effect simulating stage lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-400 font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
        >
          {djData.slogan}
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase mb-6"
        >
          {djData.artistName}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          {djData.shortDescription}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Reservar Ahora
          </a>
          <a 
            href="#packages"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white font-semibold rounded-full transition-all"
          >
            Ver Paquetes
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest">Deslizar</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
