// src/components/Layout.tsx
import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Facebook, Instagram, Menu, X } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-textcolor-darkgrey bg-background-ivory">
      {/* Header */}
      <header className="bg-background-ivory shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="https://res.cloudinary.com/dikmotd52/image/upload/v1749422577/micky_s_creative_icon_trans_bb1jj0.png" alt="logo" width={50} />
            <h1 className="text-2xl font-bold tracking-wide text-primary-deepForestGreen">
              Micky’s Creative
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary-deepForestGreen font-semibold' : 'text-textcolor-darkgrey'}>Home</NavLink>
            <NavLink to="/about" className="text-textcolor-darkgrey hover:text-accent-gold">About</NavLink>
            <NavLink to="/portfolio" className="text-textcolor-darkgrey hover:text-accent-gold">Portfolio</NavLink>
            <NavLink to="/gallery" className="text-textcolor-darkgrey hover:text-accent-gold">Gallery</NavLink>
            <NavLink to="/services" className="text-textcolor-darkgrey hover:text-accent-gold">Services</NavLink>
            <NavLink to="/contact" className="text-textcolor-darkgrey hover:text-accent-gold">Contact</NavLink>
          </nav>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <nav className="flex flex-col space-y-2 bg-background-ivory border-t pt-4">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-textcolor-darkgrey hover:text-accent-gold">Home</NavLink>
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="text-textcolor-darkgrey hover:text-accent-gold">About</NavLink>
              <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-textcolor-darkgrey hover:text-accent-gold">Portfolio</NavLink>
              <NavLink to="/gallery" onClick={() => setIsMenuOpen(false)} className="text-textcolor-darkgrey hover:text-accent-gold">Gallery</NavLink>
              <NavLink to="/services" onClick={() => setIsMenuOpen(false)} className="text-textcolor-darkgrey hover:text-accent-gold">Services</NavLink>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="text-textcolor-darkgrey hover:text-accent-gold">Contact</NavLink>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-sm border-t border-primary-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-bold text-accent-gold">Micky’s Creative</h2>
            <p className="mt-2 text-textcolor-darkgray">Capturing Moments, Creating Art.</p>
            <p className="mt-2">Phone: <a href="tel:09026891298" className="text-accent-gold">09026891298</a></p>
            <p className="text-textcolor-darkgray">Location: Yola, Nigeria</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-gray">Quick Links</h3>
            <ul className="space-y-1">
              <li><NavLink to="/portfolio" className="text-dark hover:text-accent-gold">📸 Portfolio</NavLink></li>
              <li><NavLink to="/services" className="text-gray hover:text-accent-gold">📋 Services Provided</NavLink></li>
              <li><NavLink to="/contact" className="text-gray hover:text-accent-gold">📞 Contact Us</NavLink></li>
              <li><NavLink to="/contact" className="text-gray hover:text-accent-gold">📆 Book Us Now</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-dark">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-accent-gold hover:text-accent-gold-hover" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-accent-gold hover:text-accent-gold-hover" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center py-4 border-t border-primary-charcoal-700 text-textcolor-darkgray">
          © 2025 Micky’s Creative. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
