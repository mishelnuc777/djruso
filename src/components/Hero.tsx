import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { djData } from '../data/djData';
import { ArrowRight, Disc3 } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  // Attempt video playback safely when heroVideo is configured
  useEffect(() => {
    if (!djData.heroVideo || videoFailed) return;

    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Ensure DOM properties for muted and autoplay compliance
    videoEl.defaultMuted = true;
    videoEl.muted = true;

    const attemptPlay = () => {
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setVideoLoaded(true);
          })
          .catch(() => {
            // Autoplay deferred or restricted by browser policy; do not unmount video
          });
      }
    };

    attemptPlay();

    // Trigger on first user interaction if browser policy required a user gesture
    const handleInteraction = () => {
      attemptPlay();
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('click', handleInteraction, { passive: true, once: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true, once: true });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [videoFailed]);

  const hasVideoSource = Boolean(djData.heroVideo && !videoFailed);

  const isPlaceholder = (val?: string): boolean => {
    if (!val) return true;
    const trimmed = val.trim();
    return trimmed.startsWith('[') && trimmed.endsWith(']');
  };

  const artistName = isPlaceholder(djData.artistName) ? 'DJ RUSO' : djData.artistName;
  const displaySlogan = isPlaceholder(djData.slogan) ? 'Desde la última loma de Caspigasi' : djData.slogan;
  const displayTagline = djData.tagline || 'DJ de DJs';
  const stageName = djData.stageName || 'Bryan Acosta';
  const displayDescription = isPlaceholder(djData.shortDescription)
    ? 'Propuesta musical versátil para todo tipo de eventos: reguetón, música electrónica y diversos géneros, con sets dinámicos, mezclas y remixes.'
    : djData.shortDescription;

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-black"
    >
      {/* =========================================================================
          BACKGROUND MEDIA LAYER (Image Fallback / Future Video)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Base Fallback Image (always present for instant rendering & poster) */}
        <img 
          src={djData.heroImage} 
          alt={`Presentación oficial de ${artistName} - DJ para eventos en Quito`} 
          className={`w-full h-full object-cover object-center scale-100 transition-opacity duration-1000 ${
            hasVideoSource && videoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          loading="eager"
          decoding="async"
        />

        {/* Video Element - Activates dynamically if djData.heroVideo is configured */}
        {djData.heroVideo && !videoFailed && (
          <video
            ref={videoRef}
            src={djData.heroVideo}
            poster={djData.heroImage}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            onPlaying={() => setVideoLoaded(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          />
        )}

        {/* =========================================================================
            CINEMATIC OVERLAYS (Guarantees legibility while letting video shine)
            ========================================================================= */}
        
        {/* 1. Base dark tint to protect against bright video strobes/flashes */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        {/* 2. Directional horizontal gradient: stronger on left to anchor typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 md:via-black/65 to-black/30 md:to-transparent pointer-events-none"></div>

        {/* 3. Vertical top & bottom gradient: seamlessly blends navbar and footer transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-black pointer-events-none"></div>

        {/* 4. Peripheral vignette: concentrates focus on artist identity */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#000000_90%)] pointer-events-none"></div>

        {/* 5. Subtle ambient stage glow behind text anchor */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] sm:w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      </div>

      {/* =========================================================================
          HERO CONTENT (Asymmetric, Left-biased Cinematic Framing)
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-28 pb-20 md:py-24">
        <div className="max-w-3xl">
          
          {/* Identity Phrase & Origin Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800/90 backdrop-blur-md mb-5 w-fit shadow-lg shadow-black/50"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-zinc-300">
              «{displaySlogan.replace(/^«|»$/g, '')}»
            </span>
          </motion.div>

          {/* Distinctive Phrase: DJ de DJs & Artist Name */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="w-6 h-[1.5px] bg-blue-500"></span>
            <span className="text-blue-400 font-extrabold tracking-[0.28em] uppercase text-xs sm:text-sm">
              {displayTagline}
            </span>
            <span className="text-zinc-600 text-xs">•</span>
            <span className="text-zinc-400 text-xs sm:text-sm font-semibold tracking-wider">
              {stageName}
            </span>
          </motion.div>
          
          {/* Monumental Brand Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.88] mb-6 select-none drop-shadow-2xl break-words"
          >
            {artistName}
          </motion.h1>
          
          {/* Versatile Music Short Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-xl mb-9 font-normal leading-relaxed text-balance"
          >
            {displayDescription}
          </motion.p>

          {/* CTA Action Cluster */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Dominant CTA: Reservar Ahora */}
            <a 
              href="#contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_40px_rgba(37,99,235,0.65)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group"
            >
              <span>Reservar Ahora</span>
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Secondary CTA: Escuchar Sesiones */}
            <a 
              href="#music"
              className="px-7 py-4 bg-zinc-950/70 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all backdrop-blur-md flex items-center justify-center gap-2.5 group"
            >
              <Disc3 size={17} className="text-blue-400 group-hover:rotate-45 transition-transform duration-300" />
              <span>Escuchar Sesiones</span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* =========================================================================
          DISCREET SCROLL INDICATOR
          ========================================================================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-6 sm:left-8 lg:left-12 flex items-center gap-3 pointer-events-none"
      >
        <div className="w-8 h-[1px] bg-gradient-to-r from-blue-500 to-transparent"></div>
        <span className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.25em]">
          Deslizar para explorar
        </span>
      </motion.div>
    </section>
  );
}
