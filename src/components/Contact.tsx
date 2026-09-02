import { motion } from 'motion/react';
import { djData } from '../data/djData';
import { MapPin, Mail, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const instagram = djData.socialMedia.find(s => s.platform === 'Instagram')?.url || '#';
  const facebook = djData.socialMedia.find(s => s.platform === 'Facebook')?.url || '#';

  return (
    <section id="contact" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-medium tracking-[0.2em] uppercase text-sm mb-3"
          >
            Reservas y Consultas
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase"
          >
            Reserva tu Evento
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Hagámoslo realidad.</h4>
              <p className="text-zinc-400 leading-relaxed mb-8">
                ¿Listo para elevar la energía de tu evento? Completa el formulario para solicitar una reserva o contáctanos directamente vía WhatsApp o correo electrónico. Te responderemos en menos de 24 horas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                  <Phone className="text-blue-500" size={24} />
                </div>
                <div>
                  <h5 className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-1">Teléfono / WhatsApp</h5>
                  <p className="text-white font-medium text-lg">{djData.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                  <Mail className="text-blue-500" size={24} />
                </div>
                <div>
                  <h5 className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-1">Correo Electrónico</h5>
                  <p className="text-white font-medium text-lg">{djData.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="text-blue-500" size={24} />
                </div>
                <div>
                  <h5 className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-1">Ubicación</h5>
                  <p className="text-white font-medium text-lg">{djData.contact.location}</p>
                </div>
              </div>
            </div>

            {/* Social Media Links inside Contact */}
            <div className="pt-2 border-t border-zinc-800">
              <h5 className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-4">Síguenos en Redes</h5>
              <div className="flex gap-4">
                <a 
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#E1306C] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#1877F2] transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href={`https://wa.me/${djData.contact.phone.replace(/[^0-9]/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full transition-colors"
              >
                <MessageCircle size={20} />
                Chat en WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Booking Form (Frontend Only) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-400">Teléfono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="eventType" className="text-sm font-medium text-zinc-400">Tipo de Evento</label>
                  <select 
                    id="eventType"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                  >
                    <option value="">Selecciona el evento</option>
                    <option value="club">Discoteca / Club</option>
                    <option value="festival">Festival</option>
                    <option value="private">Evento Privado</option>
                    <option value="wedding">Boda</option>
                    <option value="corporate">Corporativo</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-zinc-400">Fecha del Evento</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="guests" className="text-sm font-medium text-zinc-400">Invitados Estimados</label>
                <select 
                  id="guests"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                >
                  <option value="">Selecciona cantidad</option>
                  <option value="under-50">Menos de 50</option>
                  <option value="50-150">50 - 150</option>
                  <option value="150-300">150 - 300</option>
                  <option value="300-500">300 - 500</option>
                  <option value="500+">Más de 500</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Detalles Adicionales</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Cuéntanos más sobre tu evento..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all"
              >
                Solicitar Reserva
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
