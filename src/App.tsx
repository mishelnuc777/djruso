import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Genres from './components/Genres';
import MusicSets from './components/MusicSets';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Genres />
        <MusicSets />
        <Gallery />
        <Packages />
        <Events />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
