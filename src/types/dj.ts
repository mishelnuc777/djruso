export interface Statistic {
  label: string;
  value: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string; // will map to a Lucide icon
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface MusicSet {
  id: string;
  title: string;
  genre: string;
  duration: string;
  platform: string;
  url: string;
  coverImage: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  guests: string;
  includes: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  event: string;
  comment: string;
  rating?: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

export interface DJData {
  artistName: string;
  slogan: string;
  shortDescription: string;
  biography: string;
  yearsOfExperience: string;
  numberOfEvents: string;
  heroImage: string;
  profileImage: string;
  genres: string[];
  statistics: Statistic[];
  socialMedia: SocialMedia[];
  contact: ContactInfo;
  musicSets: MusicSet[];
  events: Event[];
  packages: Package[];
  testimonials: Testimonial[];
  gallery: GalleryImage[];
}
