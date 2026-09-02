import { motion } from 'motion/react';
import { djData } from '../data/djData';
import { Disc3 } from 'lucide-react';

export default function Genres() {
  return (
    <section className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-medium tracking-[0.2em] uppercase text-sm mb-3"
          >
            Firma Sonora
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Estilos Musicales y Géneros
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {djData.genres.map((genre, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-950 border border-zinc-800 hover:border-blue-500/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center group transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-900 text-zinc-500 group-hover:text-blue-400 group-hover:bg-blue-500/10 flex items-center justify-center mb-4 transition-colors">
                <Disc3 size={24} />
              </div>
              <span className="text-white font-medium text-sm md:text-base">{genre}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
