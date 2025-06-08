import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';
import { heroImages } from '../data/portfolio';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [nextSlide, setNextSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
<section className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-charcoalBlack/30 via-primary-charcoalBlack/20 to-primary-charcoalBlack/60" />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-primary-charcoalBlack/30 backdrop-blur-sm rounded-full flex items-center justify-center text-textcolor-white hover:bg-primary-charcoalBlack/50 transition-all duration-300 hover:scale-110 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-primary-charcoalBlack/30 backdrop-blur-sm rounded-full flex items-center justify-center text-textcolor-white hover:bg-primary-charcoalBlack/50 transition-all duration-300 hover:scale-110 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 h-3 bg-textcolor-white rounded-full' 
                : 'w-3 h-3 bg-textcolor-white/50 hover:bg-textcolor-white/70 rounded-full'
            }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-textcolor-white max-w-5xl mx-auto px-4">
          <div className="mb-6 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-textcolor-white" />
              <span className="text-lg font-medium tracking-wider">PREMIUM PHOTOGRAPHY</span>
              <Star className="w-6 h-6 text-textcolor-white" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in-delay-1 tracking-tight">
            <span className="block">Micky's</span>
            <span className="block text-5xl md:text-7xl font-light italic">Creative</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-6 font-light animate-fade-in-delay-2 tracking-wide">
            Capturing Moments, Creating Art
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-textcolor-white/80 max-w-3xl mx-auto animate-fade-in-delay-3 leading-relaxed">
            Professional photography services in Yola, Nigeria. Specializing in portrait, 
            wedding, pre-wedding, fashion, and event photography with artistic excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-4">
            <Link
              to="/contact"
              className="group bg-textcolor-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-background-softcream hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Book Us Now</span>
              <div className="w-8 h-8 bg-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ChevronRight className="w-4 h-4 text-black" />
              </div>
            </Link>
            
            <Link
              to="/portfolio"
              className="group border-2 border-textcolor-white text-textcolor-white px-10 py-4 rounded-full text-lg font-semibold hover: hover:text-primary-charcoalBlack hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <Play className="w-5 h-5" />
              <span>View Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-textcolor-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-textcolor-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;