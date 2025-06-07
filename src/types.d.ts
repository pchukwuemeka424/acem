// Global type definitions

// Service interface
interface Service {
  id: string;
  icon?: any; // For Lucide React icons
  title: string;
  description: string;
  features?: string[];
  color?: string;
}

// Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  category: string;
}

// Testimonial interface
interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image?: string;
}

// Team Member interface
interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio?: string;
  image?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}

// Contact Form Data interface
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

// Hero Slide interface
interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bgGradient?: string;
  accentColor?: string;
  ctaText?: string;
}