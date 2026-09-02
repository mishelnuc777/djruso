import { motion } from 'motion/react';
import { djData } from '../data/djData';
import { Check } from 'lucide-react';

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-medium tracking-[0.2em] uppercase text-sm mb-3"
          >
            Servicios y Precios
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Paquetes para Eventos
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {djData.packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-zinc-900 rounded-3xl p-8 lg:p-10 border ${
                pkg.isPopular 
                  ? 'border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.1)]' 
                  : 'border-zinc-800'
              } flex flex-col h-full`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                <p className="text-zinc-400 text-sm">{pkg.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-black text-white">{pkg.price}</span>
              </div>

              <div className="space-y-4 mb-8 text-sm text-zinc-300">
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500">Duración</span>
                  <span className="font-medium text-white">{pkg.duration}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500">Capacidad</span>
                  <span className="font-medium text-white">{pkg.guests}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check size={18} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full block text-center py-4 rounded-full font-semibold transition-all ${
                  pkg.isPopular 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
              >
                Seleccionar Paquete
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
