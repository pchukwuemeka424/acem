'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'Web Design', href: '#web-design' },
    { name: 'Web Development', href: '#web-development' },
    { name: 'Mobile Development', href: '#mobile-development' },
    { name: 'Social Media Marketing', href: '#social-media' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-lg relative w-full z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between" style={{ height: '120px' }}>
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/assets/images/acehub.png" 
                alt="AceHub Logo" 
                width={80} 
                height={80}
                className="w-70 h-20"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#founder" className="text-gray-700 hover:text-blue-600 transition-colors">
              Founder
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <div className="px-3 py-2">
                <span className="font-semibold text-gray-900">Services</span>
                {services.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-1 text-gray-600 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Projects
              </Link>
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="#founder" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Founder
              </Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
