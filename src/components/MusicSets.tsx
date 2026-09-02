import { motion } from 'motion/react';
import { djData } from '../data/djData';
import { PlayCircle, Clock } from 'lucide-react';

export default function MusicSets() {
  return (
    <section id="music" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 font-medium tracking-[0.2em] uppercase text-sm mb-3"
            >
              Últimos Mixes
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            >
              Sets Destacados
            </motion.h3>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href={djData.socialMedia.find(s => s.platform === "SoundCloud")?.url || "#"}
            className="mt-6 md:mt-0 text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
          >
            Escuchar todos los sets <span aria-hidden="true">&rarr;</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {djData.musicSets.map((set, index) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col"
            >
              {/* Cover Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={set.coverImage} 
                  alt={set.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <a href={set.url} className="text-white opacity-80 hover:opacity-100 hover:scale-110 transition-all">
                    <PlayCircle size={64} strokeWidth={1} />
                  </a>
                </div>
              </div>
              
              {/* Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white leading-tight">{set.title}</h4>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-full uppercase tracking-wider">
                    {set.platform}
                  </span>
                </div>
                
                <div className="flex items-center text-zinc-400 text-sm gap-4">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {set.genre}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {set.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
