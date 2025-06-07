'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, Github } from 'lucide-react';

interface ProjectSlide {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

interface ProjectCarouselProps {
  projects: ProjectSlide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const ProjectCarousel = ({ 
  projects, 
  autoPlay = true, 
  interval = 4000,
  className = ""
}: ProjectCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying || projects.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, projects.length, interval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (projects.length === 0) return null;

  const currentProject = projects[currentSlide];

  return (
    <div className={`relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl overflow-hidden shadow-2xl ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
               backgroundSize: '32px 32px'
             }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 min-h-[500px]"
          >
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative h-80 lg:h-full bg-white rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {currentProject.category}
                  </span>
                </div>
                
                {/* Project Number */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {currentSlide + 1} / {projects.length}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {currentProject.title}
                </h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">
                  {currentProject.category}
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                {currentProject.description}
              </motion.p>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-3"
              >
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-4 pt-4"
              >
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </button>
                
                <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  <Github className="w-4 h-4" />
                  View Code
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-md rounded-full px-5 py-3 border border-gray-200 shadow-lg">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>

          {/* Play/Pause Button */}
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          <button
            onClick={toggleAutoPlay}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-gray-700" />
            ) : (
              <Play className="w-4 h-4 text-gray-700" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Side Navigation - Hidden on Mobile */}
      <button
        onClick={prevSlide}
        className="hidden lg:block absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 group border border-gray-200 shadow-lg"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden lg:block absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 group border border-gray-200 shadow-lg"
        aria-label="Next project"
      >
        <ChevronRight className="w-5 h-5 text-gray-700 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default ProjectCarousel;
