import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { djData } from '../data/djData';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-medium tracking-[0.2em] uppercase text-sm mb-3"
          >
            Experiencia Visual
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Galería de Eventos
          </motion.h3>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {djData.gallery.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group overflow-hidden rounded-xl bg-zinc-800 cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className={`w-full ${index === 0 ? 'aspect-square md:aspect-auto h-full' : 'aspect-square'}`}>
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-zinc-950/80 text-white p-3 rounded-full backdrop-blur-sm">
                  <ZoomIn size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-zinc-950/95 flex items-center justify-center p-4 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-zinc-900/50 p-2 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage}
              alt="Vista ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
