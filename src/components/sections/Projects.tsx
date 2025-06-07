'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCarousel from '../ui/ProjectCarousel';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AfriVendor',
      category: 'E-Commerce Platform',
      description: 'Modern African marketplace platform connecting local vendors with global customers. Features advanced payment integration, vendor management, and real-time inventory tracking.',
      image: '/assets/projects/afrivendor.png',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'GeoMapping Solution',
      category: 'Web Development',
      description: 'Advanced geographical mapping and data visualization platform for real estate and urban planning with interactive mapping features.',
      image: '/assets/projects/geo.png',
      technologies: ['React', 'Mapbox', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Glory Enterprise',
      category: 'Business Website',
      description: 'Professional corporate website with modern design, responsive layout, and comprehensive business management features.',
      image: '/assets/projects/glory.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'KwikFix Services',
      category: 'Service Platform',
      description: 'On-demand service booking platform connecting customers with skilled professionals for home repairs and maintenance services.',
      image: '/assets/projects/kwikwfix.png',
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Nwakibeya Foundation',
      category: 'Non-Profit Website',
      description: 'Charitable organization website with donation system, volunteer management, and impact tracking dashboard for community development.',
      image: '/assets/projects/nwakibeya.png',
      technologies: ['WordPress', 'PHP', 'PayPal API', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const categories = ['All', 'E-Commerce Platform', 'Web Development', 'Business Website', 'Service Platform', 'Non-Profit Website'];
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Showcasing our latest work and successful projects across various industries
          </p>
        </motion.div>

        {/* Interactive Project Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <ProjectCarousel 
            projects={projects}
            autoPlay={true}
            interval={5000}
            className="max-w-6xl mx-auto"
          />
        </motion.div>

  
      </div>
    </section>
  );
};

export default Projects;
