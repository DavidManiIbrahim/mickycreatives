import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';
import { heroImages } from '../data/portfolio';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
            {/* Enhanced gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
            {/* Additional radial gradient to create focus on center */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40" />
          </div>
        ))}
      </div>

      {/* Hero Content with enhanced blending */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-5xl mx-auto px-4">
          {/* Text shadow and backdrop blur for better blending */}
          <div className="backdrop-blur-sm bg-black/10 rounded-3xl p-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in-delay-1 tracking-tight drop-shadow-2xl">
              <span className="block text-shadow-lg">Micky's</span>
              <span className="block text-5xl md:text-7xl font-light italic text-shadow-lg bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text">Creative</span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-6 font-light animate-fade-in-delay-2 tracking-wide drop-shadow-lg">
              Capturing Moments, Creating Art
            </p>
            
            <p className="text-lg md:text-xl font-bold mb-12 text-white/90 max-w-3xl mx-auto animate-fade-in-delay-3 leading-relaxed drop-shadow-md">
              Professional photography services in Yola, Nigeria. Specializing in portrait, 
              wedding, and event photography with artistic excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-4">
              <Link
                to="/contact"
                className="group bg-white/95 backdrop-blur-sm text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 border border-white/20"
              >
                <span>Book Us Now</span>
                <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ChevronRight className="w-4 h-4 text-black" />
                </div>
              </Link>
              
              <Link
                to="/portfolio"
                className="group border-2 border-white/80 backdrop-blur-sm bg-white/5 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3"
              >
                <Play className="w-5 h-5" />
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        <div className="backdrop-blur-sm bg-black/20 rounded-full p-3 border border-white/10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`mx-1 transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 h-3 bg-white rounded-full shadow-lg' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm bg-black/10">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse shadow-sm"></div>
        </div>
      </div> */}

     
     
    </section>
  );
};

export default Hero;