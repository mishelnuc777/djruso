import { motion } from 'motion/react';
import { djData } from '../data/djData';
import { Check, ArrowRight, Clock, Users, Sparkles } from 'lucide-react';

export default function Packages() {
  // Helper to detect raw placeholder strings (e.g. "[PRECIO]", "[DURACIÓN]")
  const isPlaceholder = (val?: string): boolean => {
    if (!val) return true;
    const trimmed = val.trim();
    return trimmed.startsWith('[') && trimmed.endsWith(']');
  };

  // Helper to format package name cleanly
  const getDisplayName = (name: string): string => {
    if (isPlaceholder(name)) {
      return name.slice(1, -1).trim();
    }
    return name;
  };

  return (
    <section id="packages" className="py-24 md:py-32 bg-black relative border-t border-zinc-900 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* =========================================================================
            SECTION HEADER (Powerful Commercial Framing)
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <span className="w-6 h-[1px] bg-blue-500"></span>
            <span className="text-blue-400 font-semibold tracking-[0.25em] uppercase text-xs">
              Formatos de Contratación
            </span>
            <span className="w-6 h-[1px] bg-blue-500"></span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-4"
          >
            Elige la Experiencia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed"
          >
            Configuraciones de cabina y sonido diseñadas para adaptarse al tamaño, atmósfera y requerimientos técnicos de tu evento.
          </motion.p>
        </div>

        {/* =========================================================================
            PACKAGES EDITORIAL GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {djData.packages.map((pkg, index) => {
            const isFeatured = Boolean(pkg.isPopular);
            const hasValidPrice = !isPlaceholder(pkg.price);
            const hasValidDescription = !isPlaceholder(pkg.description);
            const hasValidDuration = !isPlaceholder(pkg.duration);
            const hasValidGuests = !isPlaceholder(pkg.guests);
            const validIncludes = pkg.includes.filter(item => !isPlaceholder(item));

            const packageName = getDisplayName(pkg.name);
            const tierNumber = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group ${
                  isFeatured 
                    ? 'bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-black border-2 border-blue-500/70 shadow-[0_0_40px_rgba(37,99,235,0.12)] lg:-translate-y-2' 
                    : 'bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700/90'
                }`}
              >
                {/* Featured Badge (only if explicitly marked in data) */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-8">
                    <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] py-1 px-3.5 rounded-full shadow-lg shadow-blue-600/30">
                      <Sparkles size={11} />
                      <span>Destacado</span>
                    </span>
                  </div>
                )}
                
                <div>
                  {/* Top Bar: Tier Index & Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase block mb-1">
                        Opción {tierNumber}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                        {packageName}
                      </h3>
                    </div>
                  </div>

                  {/* Optional Description (only shown if real content exists) */}
                  {hasValidDescription && (
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {pkg.description}
                    </p>
                  )}

                  {/* Price Section (Completely hidden if placeholder; no fake $0 or $XXX) */}
                  {hasValidPrice && (
                    <div className="mb-6 pb-6 border-b border-zinc-800/80">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                  )}

                  {/* Quick Technical Specs (Duration & Guests) */}
                  {(hasValidDuration || hasValidGuests) && (
                    <div className="space-y-2.5 mb-6 py-4 border-y border-zinc-900 text-xs text-zinc-300">
                      {hasValidDuration && (
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500 font-medium flex items-center gap-2">
                            <Clock size={14} className="text-zinc-400" />
                            <span>Duración</span>
                          </span>
                          <span className="font-semibold text-zinc-200">{pkg.duration}</span>
                        </div>
                      )}
                      {hasValidGuests && (
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500 font-medium flex items-center gap-2">
                            <Users size={14} className="text-zinc-400" />
                            <span>Capacidad</span>
                          </span>
                          <span className="font-semibold text-zinc-200">{pkg.guests}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Included Services Checklist */}
                  {validIncludes.length > 0 && (
                    <div className="mb-8">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-3">
                        Servicios Incluidos
                      </span>
                      <ul className="space-y-3">
                        {validIncludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-snug">
                            <div className="w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={11} className="text-blue-400" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Booking Call to Action */}
                <div className="pt-4 border-t border-zinc-900">
                  <a 
                    href="#contact"
                    aria-label={`Reservar ${packageName}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isFeatured 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]' 
                        : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800'
                    }`}
                  >
                    <span>Reservar Ahora</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
