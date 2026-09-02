import { motion } from 'motion/react';
import { djData } from '../data/djData';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <img 
                src={djData.profileImage} 
                alt={`Perfil de ${djData.artistName}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/20 rounded-full blur-[60px] pointer-events-none"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-500 font-medium tracking-[0.2em] uppercase text-sm mb-3">Sobre el Artista</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {djData.artistName}
            </h3>
            
            <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed mb-12">
              <p>{djData.biography}</p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {djData.statistics.map((stat, index) => (
                <div key={index} className="flex flex-col border-l border-zinc-800 pl-4">
                  <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
