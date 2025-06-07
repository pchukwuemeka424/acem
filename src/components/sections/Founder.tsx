'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Linkedin, 
  Twitter, 
  Award, 
  BookOpen, 
  Users, 
  Target, 
  Zap, 
  Brain,
  Star,
  TrendingUp,
  Globe,
  Code,
  Lightbulb,
  Heart
} from 'lucide-react';

const Founder = () => {
  const achievements = [
    { icon: Award, number: '25+', label: 'Industry Awards', color: 'from-yellow-400 to-orange-500' },
    { icon: Users, number: '1500+', label: 'Professionals Trained', color: 'from-blue-500 to-cyan-500' },
    { icon: Target, number: '750+', label: 'Successful Projects', color: 'from-purple-500 to-pink-500' },
    { icon: Globe, number: '15+', label: 'Countries Served', color: 'from-green-500 to-emerald-500' },
  ];

  const expertise = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in modern web technologies, mobile development, and system architecture'
    },
    {
      icon: Brain,
      title: 'Data Analytics & AI',
      description: 'Advanced analytics, machine learning, and business intelligence solutions'
    },
    {
      icon: Zap,
      title: 'Cybersecurity',
      description: 'Comprehensive security frameworks and risk management strategies'
    },
    {
      icon: TrendingUp,
      title: 'Business Strategy',
      description: 'Digital transformation, growth hacking, and strategic business planning'
    }
  ];

  return (
    <section id="founder" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Meet The Visionary
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading the future of technology with passion, innovation, and unwavering commitment to excellence
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 mb-20">
            
            {/* Founder Image & Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="xl:col-span-5"
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="relative">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl transform rotate-6"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-blue-500 to-cyan-500 rounded-3xl transform -rotate-3"></div>
                    
                    {/* Image */}
                    <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                      <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                        <Image
                          src="/assets/images/prince_chukwuemeka.jpeg"
                          alt="Prince Chukwuemeka - Founder & CEO"
                          width={500}
                          height={600}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Achievement Cards */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">10+</div>
                        <div className="text-xs text-gray-600">Years Experience</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">100%</div>
                        <div className="text-xs text-gray-600">Client Satisfaction</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Founder Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="xl:col-span-7"
            >
              <div className="space-y-8">
                {/* Name & Title */}
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                    Prince Chukwuemeka
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold">
                      Founder & CEO
                    </span>
                    <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      Tech Visionary
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With over a decade of transformative experience in technology and business development, 
                    <strong className="text-blue-600"> Prince Chukwuemeka</strong> founded AceHub with an ambitious mission: 
                    to democratize technology and make complex digital solutions accessible to businesses of all sizes.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    As a certified expert across multiple disciplines—from data analytics and cybersecurity to 
                    business analysis and full-stack development—Prince has successfully guided over 750 projects 
                    and mentored more than 1,500 professionals worldwide. His unique blend of technical mastery 
                    and strategic business acumen has made him a sought-after consultant and thought leader.
                  </p>
                </div>

                {/* Quote */}
                <div className="relative">
                  <div className="absolute -left-4 -top-2 text-6xl text-blue-200 font-serif">"</div>
                  <blockquote className="pl-8 pr-4 py-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
                    <p className="text-xl text-gray-800 font-medium leading-relaxed mb-4">
                      Innovation isn't just about creating something new—it's about solving real problems 
                      that matter. Every line of code, every strategy, every solution we craft at AceHub 
                      is designed to create meaningful impact in people's lives and businesses.
                    </p>
                    <cite className="text-blue-600 font-semibold">— Prince Chukwuemeka</cite>
                  </blockquote>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 font-medium">Connect with Prince:</span>
                  <div className="flex space-x-3">
                    <a 
                      href="#" 
                      className="group relative w-12 h-12 bg-white hover:bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-200"
                    >
                      <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    </a>
                    <a 
                      href="#" 
                      className="group relative w-12 h-12 bg-white hover:bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-200"
                    >
                      <Twitter className="w-6 h-6 text-gray-600 group-hover:text-blue-400 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Remarkable Achievements</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Numbers that reflect a decade of dedication, innovation, and impact across the global tech landscape
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group-hover:-translate-y-2">
                      <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                      <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Expertise</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Multidisciplinary mastery spanning the full spectrum of modern technology and business strategy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group-hover:border-blue-200">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl"></div>
              <div className="relative bg-gradient-to-r from-blue-600/95 via-purple-600/95 to-indigo-700/95 rounded-3xl p-12 text-white text-center backdrop-blur-sm">
                <div className="max-w-4xl mx-auto">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Building Tomorrow's Digital Landscape
                  </h3>
                  <p className="text-xl leading-relaxed mb-8 text-blue-100">
                    Prince's vision extends beyond traditional boundaries—creating an ecosystem where 
                    cutting-edge technology serves humanity, where innovation drives positive change, and 
                    where every digital solution contributes to a more connected, efficient, and empowered world.
                  </p>
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-lg font-semibold">
                    <span>Leading the future, one innovation at a time</span>
                    <Star className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
