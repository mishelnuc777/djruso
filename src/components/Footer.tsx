import { djData } from '../data/djData';
import { Instagram, Youtube, Music, Headphones, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'instagram': return <Instagram size={20} />;
      case 'facebook': return <Facebook size={20} />;
      case 'youtube': return <Youtube size={20} />;
      case 'headphones': return <Headphones size={20} />;
      case 'music': return <Music size={20} />;
      default: return <Music size={20} />;
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase mb-4">
              {djData.artistName}
            </h2>
            <p className="text-zinc-400 text-sm max-w-sm mb-8 leading-relaxed">
              {djData.shortDescription}
            </p>
            <div className="flex gap-4">
              {djData.socialMedia.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
                  aria-label={social.platform}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', id: 'home' }, 
                { name: 'Acerca de', id: 'about' }, 
                { name: 'Música', id: 'music' }, 
                { name: 'Galería', id: 'gallery' }, 
                { name: 'Paquetes', id: 'packages' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={`#${item.id}`}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>{djData.contact.email}</li>
              <li>{djData.contact.phone}</li>
              <li>{djData.contact.location}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            &copy; {currentYear} {djData.artistName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
