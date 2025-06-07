'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Play, 
  Pause,
  Globe, 
  Megaphone, 
  Smartphone,
  Star,
  Users,
  Award,
  Zap
} from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Transform Your Digital Presence",
    subtitle: "Professional Web Development & Design",
    description: "Elevate your brand with stunning, responsive websites that convert visitors into customers and drive measurable business growth.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    bgGradient: "from-blue-500/20 via-purple-500/20 to-indigo-600/30",
    accentColor: "blue",
    ctaText: "Start Your Project",
    secondaryText: "View Portfolio",
    icon: Globe,
    stats: { number: "150+", label: "Projects Delivered" },
    features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"]
  },
  {
    id: 3,
    title: "Amplify Your Brand's Voice",
    subtitle: "Strategic Social Media Marketing",
    description: "Build meaningful connections with your audience and drive engagement through data-driven social media strategies that deliver results.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2039&q=80",
    bgGradient: "from-orange-500/20 via-red-500/20 to-pink-600/30",
    accentColor: "orange",
    ctaText: "Grow Your Brand",
    secondaryText: "Case Studies",
    icon: Megaphone,
    stats: { number: "300%", label: "Avg. Growth Rate" },
    features: ["Content Strategy", "Community Management", "Analytics & Insights", "Paid Campaigns"]
  },
  {
    id: 4,
    title: "Build Tomorrow's Mobile Experience",
    subtitle: "Cross-Platform App Development",
    description: "Create powerful, intuitive mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    bgGradient: "from-violet-500/20 via-purple-500/20 to-indigo-600/30",
    accentColor: "violet",
    ctaText: "Build Your App",
    secondaryText: "See Demos",
    icon: Smartphone,
    stats: { number: "50+", label: "Apps Launched" },
    features: ["Native Performance", "Cross-Platform", "UI/UX Design", "App Store Ready"]
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
    // Initialize mouse position after mount
    setMousePosition({ x: 50, y: 50 });
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !isMounted) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMounted]);

  // Mouse tracking for parallax effect
  useEffect(() => {
    if (!isMounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMounted]);

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
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  // Don't render complex animations until mounted to prevent hydration errors
  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={currentSlideData.image}
            alt={`${currentSlideData.subtitle} Background`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
          <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgGradient}`} />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-white space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-blue-500/20 backdrop-blur-sm border border-blue-400/30">
                  <IconComponent className="w-8 h-8 text-blue-400" />
                </div>
                <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm">
                  {currentSlideData.subtitle}
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                {currentSlideData.title}
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                {currentSlideData.description}
              </p>
              
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">
                    {currentSlideData.stats.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {currentSlideData.stats.label}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-300">5.0 Rating</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                  {currentSlideData.ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                  <Play className="w-5 h-5" />
                  {currentSlideData.secondaryText}
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                {currentSlideData.features.map((feature, index) => (
                  <div
                    key={feature}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="font-semibold text-white">{feature}</h3>
                    </div>
                    <p className="text-sm text-gray-300">
                      Professional implementation with cutting-edge technology and best practices.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlideData.image}
            alt={`${currentSlideData.subtitle} Background`}
            fill
            className="object-cover"
            priority
          />
          {/* Multi-layered overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />          <div
            className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgGradient}`}
            style={{
              backgroundPosition: isMounted && mousePosition ? `${mousePosition.x}% ${mousePosition.y}%` : '50% 50%'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Animated particles - Simplified to avoid hydration issues */}
      {isMounted && (
        <div className="absolute inset-0 z-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}-${currentSlide}`}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 15 + (i % 5),
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${(i * 7) % 100}%`
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white space-y-8"
            >
              {/* Icon and Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-2xl bg-blue-500/20 backdrop-blur-sm border border-blue-400/30">
                  <IconComponent className="w-8 h-8 text-blue-400" />
                </div>
                <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm">
                  {currentSlideData.subtitle}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              >
                {currentSlideData.title}
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                {currentSlideData.description}
              </motion.p>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">
                    {currentSlideData.stats.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {currentSlideData.stats.label}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-300">5.0 Rating</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group px-8 py-4 text-white rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl ${
                    currentSlideData.accentColor === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                    currentSlideData.accentColor === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-600' :
                    currentSlideData.accentColor === 'orange' ? 'bg-orange-500 hover:bg-orange-600' :
                    'bg-violet-500 hover:bg-violet-600'
                  }`}
                >
                  {currentSlideData.ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5" />
                  {currentSlideData.secondaryText}
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right Content - Features Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`features-${currentSlide}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-6">
                {currentSlideData.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`flex items-center gap-3 mb-3`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        currentSlideData.accentColor === 'blue' ? 'bg-blue-500/20' :
                        currentSlideData.accentColor === 'emerald' ? 'bg-emerald-500/20' :
                        currentSlideData.accentColor === 'orange' ? 'bg-orange-500/20' :
                        'bg-violet-500/20'
                      }`}>
                        <Zap className={`w-5 h-5 ${
                          currentSlideData.accentColor === 'blue' ? 'text-blue-400' :
                          currentSlideData.accentColor === 'emerald' ? 'text-emerald-400' :
                          currentSlideData.accentColor === 'orange' ? 'text-orange-400' :
                          'text-violet-400'
                        }`} />
                      </div>
                      <h3 className="font-semibold text-white">{feature}</h3>
                    </div>
                    <p className="text-sm text-gray-300">
                      Professional implementation with cutting-edge technology and best practices.
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center gap-6 bg-black/20 backdrop-blur-lg rounded-full px-8 py-4 border border-white/10">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="p-3 text-white hover:text-blue-300 transition-colors duration-200 rounded-full hover:bg-white/10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Slide Indicators */}
          <div className="flex gap-3">
            {slides.map((slide, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? `scale-125 ${
                        slide.accentColor === 'blue' ? 'bg-blue-400' :
                        slide.accentColor === 'emerald' ? 'bg-emerald-400' :
                        slide.accentColor === 'orange' ? 'bg-orange-400' :
                        'bg-violet-400'
                      }` 
                    : 'bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentSlide && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute inset-0 rounded-full ${
                      slide.accentColor === 'blue' ? 'bg-blue-400' :
                      slide.accentColor === 'emerald' ? 'bg-emerald-400' :
                      slide.accentColor === 'orange' ? 'bg-orange-400' :
                      'bg-violet-400'
                    }`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="p-3 text-white hover:text-blue-300 transition-colors duration-200 rounded-full hover:bg-white/10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Auto-play Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleAutoPlay}
            className={`ml-4 p-3 transition-colors duration-200 rounded-full border border-white/20 ${
              isAutoPlaying 
                ? 'text-green-400 bg-green-400/10 hover:bg-green-400/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Side Navigation - Desktop Only */}
      <motion.button
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 p-4 bg-black/20 backdrop-blur-lg text-white rounded-full hover:bg-black/40 transition-all duration-300 hidden lg:block border border-white/10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 p-4 bg-black/20 backdrop-blur-lg text-white rounded-full hover:bg-black/40 transition-all duration-300 hidden lg:block border border-white/10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7" />
      </motion.button>

      {/* Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black/20 z-30">
        <motion.div
          className={`h-full ${
            currentSlideData.accentColor === 'blue' ? 'bg-blue-400' :
            currentSlideData.accentColor === 'emerald' ? 'bg-emerald-400' :
            currentSlideData.accentColor === 'orange' ? 'bg-orange-400' :
            'bg-violet-400'
          }`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          key={currentSlide}
          transition={{ duration: isAutoPlaying ? 6 : 0, ease: "linear" }}
        />
      </div>

      {/* Floating Trust Indicators */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-8 right-8 z-30 hidden xl:block"
      >
        <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
          <div className="flex items-center gap-3 text-white">
            <div className="flex items-center gap-1">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">10,000+ Clients</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-1">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Award Winning</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;