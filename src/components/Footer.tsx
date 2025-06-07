import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Phone, MapPin, Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: '📸 Portfolio', path: '/portfolio' },
    { name: '📞 Contact Us', path: '/contact' },
    { name: '📋 Services Provided', path: '/services' },
    { name: '📆 Book Us Now', path: '/contact' }
  ];

  return (
    <footer className="bg-blend-lighten text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-primary-charcoal-900" />
              </div>
              <span className="font-bold text-3xl text-accent-gold">Micky's Creative</span>
            </div>
            <p className="mb-8 max-w-md leading-relaxed text-black/80">
              Professional photography services in Yola, Nigeria. Capturing moments, creating art. 
              Specializing in portrait, wedding, pre-wedding, fashion, and event photography with 
              unmatched artistic excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent-gold/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary-charcoal-900 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent-gold/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary-charcoal-900 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-accent-gold">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-accent-gold transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:border-b border-accent-gold transition-all duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-accent-gold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-accent-gold/10 rounded-full flex items-center justify-center group-hover:bg-accent-gold group-hover:text-primary-charcoal-900 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href="tel:09026891298"
                  className="text-white hover:text-accent-gold transition-colors duration-300"
                >
                  09026891298
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-accent-gold/10 rounded-full flex items-center justify-center group-hover:bg-accent-gold group-hover:text-primary-charcoal-900 transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-white">Yola, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-accent-gold/10 rounded-full flex items-center justify-center group-hover:bg-accent-gold group-hover:text-primary-charcoal-900 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <a
                  href="mailto:info@mickyscreative.com"
                  className="text-white hover:text-accent-gold transition-colors duration-300"
                >
                  mickyscreative@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-charcoal-700 pt-8 mt-12 text-center">
          <p className="text-white text-sm">
            © 2025 Micky's Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
