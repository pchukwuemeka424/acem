'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Monitor,
  Smartphone,
  Share2,
  Code,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'web-design',
      icon: Monitor,
      title: 'Web Design',
      description: 'Beautiful, responsive, and user-friendly websites that captivate your audience and drive conversions.',
      features: ['Responsive Design', 'UI/UX Optimization', 'Brand Integration', 'Performance Focused'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      description: 'Robust, scalable web applications built with cutting-edge technologies and best practices.',
      features: ['Full-Stack Development', 'API Integration', 'Database Design', 'Cloud Deployment'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'App Store Optimization', 'Push Notifications'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'social-media',
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns that build brand awareness and engage your target audience.',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
          alt="Services Background"
          fill
          className="object-cover opacity-5"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">`
        {/* Services Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105">
                  Learn More
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
