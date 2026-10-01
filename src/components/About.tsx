import { motion } from 'motion/react';
import { djData } from '../data/djData';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const isPlaceholder = (val?: string): boolean => {
    if (!val) return true;
    const trimmed = val.trim();
    return trimmed.startsWith('[') && trimmed.endsWith(']');
  };

  const artistName = isPlaceholder(djData.artistName) ? 'DJ RUSO' : djData.artistName;
  const hasRealDescription = !isPlaceholder(djData.shortDescription);
  const biographyText = djData.biography.replace(/^\[BIOGRAFÍA DEL DJ\]\s*/i, '');

  // Filter out any placeholder stats (e.g. "[AÑOS]", "[EVENTOS]") or unconfirmed figures
  const confirmedStats = djData.statistics.filter(stat => {
    const val = stat.value.trim();
    const isStatPlaceholder = val.startsWith('[') && val.endsWith(']');
    const isUnverified = val === '100%'; // Do not display unverified claims until confirmed
    return !isStatPlaceholder && !isUnverified;
  });

  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Cinematic Editorial Photo Frame
              ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Architectural Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/90 shadow-2xl group">
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <img 
                  src={djData.profileImage} 
                  alt={`Retrato profesional de ${artistName} en cabina`} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle dark gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 pointer-events-none"></div>

                {/* Corner signature tag */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-blue-400 font-bold block">
                      En Cabina
                    </span>
                    <span className="text-white text-base font-black tracking-tight uppercase">
                      {artistName}
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Subtle decorative glow */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
          </motion.div>

          {/* =========================================================================
              RIGHT COLUMN: Artist Presentation & Identity
              ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-blue-500"></span>
              <span className="text-blue-400 font-semibold tracking-[0.25em] uppercase text-xs">
                Perfil & Trayectoria
              </span>
            </div>

            {/* Powerful Artist Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-6 leading-tight">
              Detrás de la Música
            </h2>
            
            {/* Lead Short Description (only if not a placeholder) */}
            {hasRealDescription && (
              <div className="border-l-2 border-blue-500/80 pl-4 sm:pl-5 mb-6">
                <p className="text-zinc-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-balance">
                  {djData.shortDescription}
                </p>
              </div>
            )}

            {/* Full Biography */}
            <div className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-8">
              <p>{biographyText}</p>
            </div>

            {/* Confirmed Statistics (Cleanly rendered only if real confirmed data exists) */}
            {confirmedStats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 mb-8 border-t border-zinc-900">
                {confirmedStats.map((stat, index) => (
                  <div key={index} className="flex flex-col border-l border-zinc-800/80 pl-4">
                    <span className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-semibold">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Discrete CTA to Contact */}
            <div className="pt-2">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white text-xs uppercase tracking-wider font-bold transition-all group"
              >
                <span>Consultar Fechas & Disponibilidad</span>
                <ArrowRight size={15} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
