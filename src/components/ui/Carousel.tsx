'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string | React.ReactNode;
  backgroundImage?: string;
  buttonText: string;
  buttonAction: () => void;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel = ({ slides, autoPlay = true, interval = 5000 }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, slides.length, interval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Dynamic Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          {slides[currentSlide].backgroundImage ? (
            <Image
              src={slides[currentSlide].backgroundImage!}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 w-full h-full" />
          )}
          
          {/* Multiple Overlay Layers */}
          {/* Base Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 z-10" />
          
          {/* Gradient Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 z-11" />
          
          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-12" />
          
          {/* Animated Color Overlay based on slide */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={`absolute inset-0 z-13 ${
              currentSlide === 0 ? 'bg-blue-500/10' :
              currentSlide === 1 ? 'bg-purple-500/10' :
              currentSlide === 2 ? 'bg-green-500/10' :
              'bg-orange-500/10'
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 z-20">
        {/* Animated Geometric Shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear",
            delay: 1 
          }}
          className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
            delay: 2 
          }}
          className="absolute bottom-20 left-40 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"
        />

        {/* Additional Floating Elements */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-green-500/10 rounded-full blur-lg"
        />
        
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5 
          }}
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-yellow-500/10 rounded-full blur-lg"
        />

        {/* Tech-themed Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" 
               style={{
                 backgroundImage: `
                   linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%, transparent),
                   linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%, transparent)
                 `,
                 backgroundSize: '50px 50px'
               }}
          />
        </div>
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center z-30"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left relative"
            >
              {/* Enhanced Content Background Overlay */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute inset-0 -m-8 p-8"
              >
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20"></div>
                
                {/* Subtle Gradient Overlay */}
                <div className={`absolute inset-0 rounded-3xl ${
                  currentSlide === 0 ? 'bg-gradient-to-br from-blue-50/80 to-purple-50/80' :
                  currentSlide === 1 ? 'bg-gradient-to-br from-purple-50/80 to-pink-50/80' :
                  currentSlide === 2 ? 'bg-gradient-to-br from-green-50/80 to-blue-50/80' :
                  'bg-gradient-to-br from-orange-50/80 to-red-50/80'
                }`}></div>
                
                {/* Animated Border Effect */}
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                      '0 0 40px rgba(139, 92, 246, 0.4)',
                      '0 0 20px rgba(59, 130, 246, 0.3)'
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 rounded-3xl"
                />
                
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-10"
                     style={{
                       backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), 
                                        radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
                     }}
                ></div>
              </motion.div>
              
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
                >
                  {slides[currentSlide].title}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {' '}{slides[currentSlide].subtitle}
                  </span>
                </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <button
                  onClick={slides[currentSlide].buttonAction}
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  {slides[currentSlide].buttonText}
                  <motion.div
                    className="transform group-hover:translate-x-1 transition-transform"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.div>
                </button>
              </motion.div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
                {typeof slides[currentSlide].image === 'string' ? (
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-contain"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {slides[currentSlide].image}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Navigation Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
      >
        <div className="relative">
          {/* Navigation Background with Glassmorphism */}
          <div className="absolute inset-0 bg-white/90 backdrop-blur-lg rounded-full shadow-2xl border border-white/30"></div>
          
          {/* Subtle Glow Effect */}
          <motion.div
            animate={{ 
              boxShadow: [
                '0 8px 32px rgba(59, 130, 246, 0.15)',
                '0 8px 32px rgba(139, 92, 246, 0.25)',
                '0 8px 32px rgba(59, 130, 246, 0.15)'
              ]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 rounded-full"
          />
          
          <div className="relative flex items-center space-x-4 px-6 py-3">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={toggleAutoPlay}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ml-2"
              aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-gray-600" />
              ) : (
                <Play className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Side Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
      </button>
    </div>
  );
};

export default Carousel;
