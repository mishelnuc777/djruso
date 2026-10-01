import { DJData } from '../types/dj';

export const djData: DJData = {
  artistName: "[NOMBRE DEL ARTISTA]",
  slogan: "[ESLOGAN DEL DJ]",
  shortDescription: "[BREVE DESCRIPCIÓN / SUBTÍTULO]",
  biography: "[BIOGRAFÍA DEL DJ] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  yearsOfExperience: "[AÑOS DE EXPERIENCIA]",
  numberOfEvents: "[NÚMERO DE EVENTOS]",
  heroImage: "https://images.unsplash.com/photo-1571266028243-cb40fce7573b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  heroVideo: "/assets/videos/IMG_3623.MP4",
  profileImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  genres: [
    "House",
    "Tech House",
    "Electrónica",
    "Reguetón",
    "Latino",
    "Comercial"
  ],
  statistics: [
    { label: "Años de Experiencia", value: "[AÑOS]" },
    { label: "Eventos Realizados", value: "[EVENTOS]" },
    { label: "Ciudades Visitadas", value: "[CIUDADES]" },
    { label: "Clientes Satisfechos", value: "100%" }
  ],
  socialMedia: [
    { platform: "Instagram", url: "[URL DE INSTAGRAM]", icon: "instagram" },
    { platform: "Facebook", url: "[URL DE FACEBOOK]", icon: "facebook" },
    { platform: "SoundCloud", url: "[URL DE SOUNDCLOUD]", icon: "music" },
    { platform: "Spotify", url: "[URL DE SPOTIFY]", icon: "headphones" },
    { platform: "YouTube", url: "[URL DE YOUTUBE]", icon: "youtube" }
  ],
  contact: {
    email: "[CORREO ELECTRÓNICO]",
    phone: "[NÚMERO DE WHATSAPP]",
    location: "[UBICACIÓN]"
  },
  musicSets: [
    {
      id: "set-1",
      title: "[NOMBRE DEL SET 1]",
      genre: "Tech House",
      duration: "1:30:00",
      platform: "SoundCloud",
      url: "#",
      coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "set-2",
      title: "[NOMBRE DEL SET 2]",
      genre: "Reguetón / Latino",
      duration: "2:00:00",
      platform: "YouTube",
      url: "#",
      coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "set-3",
      title: "[NOMBRE DEL SET 3]",
      genre: "House Comercial",
      duration: "1:00:00",
      platform: "Mixcloud",
      url: "#",
      coverImage: "https://images.unsplash.com/photo-1571266028243-cb40fce7573b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  gallery: [
    { id: "gal-1", url: "https://images.unsplash.com/photo-1571266028243-cb40fce7573b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "DJ tocando en vivo" },
    { id: "gal-2", url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Público en festival" },
    { id: "gal-3", url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Equipo de DJ de cerca" },
    { id: "gal-4", url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Show de láser en discoteca" },
    { id: "gal-5", url: "https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Manos del DJ en el mezclador" },
    { id: "gal-6", url: "https://images.unsplash.com/photo-1520694119335-e1150c9f13e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Escenario de evento al aire libre" }
  ],
  packages: [
    {
      id: "pkg-1",
      name: "PAQUETE BÁSICO",
      description: "[DESCRIPCIÓN DEL PAQUETE]",
      price: "[PRECIO]",
      duration: "Hasta 3 horas",
      guests: "Hasta 50 invitados",
      includes: [
        "Presentación de DJ",
        "Sistema de sonido",
        "Iluminación básica"
      ]
    },
    {
      id: "pkg-2",
      name: "PAQUETE PREMIUM",
      description: "[DESCRIPCIÓN DEL PAQUETE]",
      price: "[PRECIO]",
      duration: "Hasta 5 horas",
      guests: "Hasta 150 invitados",
      isPopular: true,
      includes: [
        "Presentación de DJ",
        "Sistema de sonido profesional",
        "Iluminación profesional",
        "Efectos especiales (Máquina de humo)"
      ]
    },
    {
      id: "pkg-3",
      name: "PAQUETE VIP",
      description: "[DESCRIPCIÓN DEL PAQUETE]",
      price: "[PRECIO]",
      duration: "Ilimitada",
      guests: "150+ invitados",
      includes: [
        "Presentación de DJ",
        "Sistema de sonido premium",
        "Show de iluminación avanzado",
        "Efectos especiales (Chispas frías, Humo)",
        "Experiencia personalizada"
      ]
    }
  ],
  events: [
    {
      id: "evt-1",
      title: "[NOMBRE DEL EVENTO]",
      date: "[FECHA]",
      location: "[UBICACIÓN]",
      description: "[BREVE DESCRIPCIÓN DEL EVENTO]",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "evt-2",
      title: "[NOMBRE DEL EVENTO 2]",
      date: "[FECHA 2]",
      location: "[UBICACIÓN 2]",
      description: "[BREVE DESCRIPCIÓN DEL EVENTO 2]",
      image: "https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      clientName: "[NOMBRE DEL CLIENTE]",
      event: "[TIPO DE EVENTO / FECHA]",
      comment: "[TESTIMONIO DEL CLIENTE]",
      rating: 5
    },
    {
      id: "test-2",
      clientName: "[NOMBRE DEL CLIENTE 2]",
      event: "[TIPO DE EVENTO / FECHA 2]",
      comment: "[TESTIMONIO DEL CLIENTE 2]",
      rating: 5
    }
  ]
};
