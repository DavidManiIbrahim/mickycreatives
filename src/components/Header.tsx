import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';
import Logo from '.../../public/image/mickys creative icon.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background-softcream/95 backdrop-blur-md shadow-lg border-b border-primary-charcoal-700' : 'bg-primary-charcoalBlack/20 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary-charcoalBlack rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-4 h-4 bg-black" />
            </div>
            <div className="logo-container bg-black">
            <img src={Logo} alt="" width={30} height={30} />
            </div>

              <span className={`font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-textcolor-darkgrey' : 'text-textcolor-white drop-shadow-lg'
                }`}>
                Micky's Creative
              </span>
          </Link>
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition-all duration-300 hover:scale-105 ${isActive(item.path)
                  ? (isScrolled ? 'text-textcolor-darkgrey border-b-2 border-accent-gold' : 'text-textcolor-white border-b-2 border-accent-gold')
                  : (isScrolled ? 'text-textcolor-darkgrey hover:text-accent-gold' : 'text-textcolor-white/90 hover:text-textcolor-white')
                }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary-charcoalBlack text-textcolor-white px-6 py-2 rounded-full font-medium hover:bg-accent-gold hover:text-primary-charcoalBlack hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Book Us Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'text-textcolor-darkgrey hover:bg-background-ivory' : 'text-textcolor-white hover:bg-background-ivory/20'
            }`}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-ivory/95 backdrop-blur-md border-t border-primary-charcoal-700 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 font-medium transition-colors duration-300 ${isActive(item.path)
                    ? 'text-textcolor-darkgrey bg-background-ivory border-l-4 border-accent-gold'
                    : 'text-textcolor-darkgrey hover:text-accent-gold hover:bg-background-ivory/50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mx-4 bg-primary-charcoalBlack text-textcolor-white px-6 py-3 rounded-full font-medium text-center hover:bg-accent-gold hover:text-primary-charcoalBlack transition-all duration-300"
            >
              Book Us Now
            </Link>
          </nav>
        </div>
      )}
    </div>
    </header >
  );
};

export default Header;
