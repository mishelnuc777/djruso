import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { djData } from '../data/djData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Acerca de', href: '#about' },
    { name: 'Música', href: '#music' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Paquetes', href: '#packages' },
    { name: 'Eventos', href: '#events' },
    { name: 'Contacto', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-black tracking-tighter uppercase text-white hover:text-blue-400 transition-colors">
          {djData.artistName}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all"
          >
            Reservar Ahora
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="block text-center mt-4 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Reservar Ahora
          </a>
        </div>
      )}
    </header>
  );
}
