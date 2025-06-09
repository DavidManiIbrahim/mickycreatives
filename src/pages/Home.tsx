import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Heart, Star, Users, Award, Zap, Shield } from 'lucide-react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';

const Home: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: 'Professional Excellence',
      description: 'State-of-the-art equipment and masterful technique for stunning results',
      color: 'from-gray-900 to-black'
    },
    {
      icon: Heart,
      title: 'Passionate Artistry',
      description: 'Every shot is crafted with love, capturing the essence of your precious moments',
      color: 'from-black to-gray-800'
    },
    {
      icon: Star,
      title: 'Creative Vision',
      description: 'Unique artistic perspective combined with technical expertise for exceptional photography',
      color: 'from-gray-800 to-gray-900'
    },
    {
      icon: Users,
      title: 'Personal Touch',
      description: 'Tailored sessions that reflect your individual personality and authentic style',
      color: 'from-black to-gray-700'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '1000+', label: 'Photos Captured', icon: Camera },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  const testimonials = [
    {
      name: 'Aisha Mohammed',
      role: 'Bride',
      content: 'Micky\'s Creative captured our wedding day perfectly. Every emotion, every moment was beautifully preserved.',
      rating: 5
    },
    {
      name: 'David Adamu',
      role: 'Corporate Client',
      content: 'Professional, creative, and reliable. Their corporate event photography exceeded all our expectations.',
      rating: 5
    },
    {
      name: 'Fatima Ibrahim',
      role: 'Fashion Model',
      content: 'The fashion shoot was incredible! They brought out the best in every outfit and pose.',
      rating: 5
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-black"></div>
              <Star className="w-6 h-6 text-black" />
              <div className="w-12 h-0.5 bg-black"></div>
            </div>
            <h2 className="text-5xl font-bold text-black mb-6">
              Welcome to Micky's Creative
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Based in the heart of Yola, Nigeria, we specialize in capturing life's most precious moments 
              with unparalleled artistic flair and professional excellence. From intimate portraits to grand 
              celebrations, we transform fleeting moments into timeless masterpieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-black"></div>
              <Camera className="w-6 h-6 text-black" />
              <div className="w-12 h-0.5 bg-black"></div>
            </div>
            <h2 className="text-5xl font-bold text-black mb-6">Featured Masterpieces</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our collection of breathtaking moments captured through our lens. 
              Each photograph tells a unique story of love, joy, beauty, and celebration.
            </p>
          </div>

          <Gallery limit={6} />

          <div className="text-center mt-16">
            <Link
              to="/portfolio"
              className="group inline-flex items-center space-x-3 bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Explore Full Portfolio</span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-black"></div>
              <Zap className="w-6 h-6 text-black" />
              <div className="w-12 h-0.5 bg-black"></div>
            </div>
            <h2 className="text-5xl font-bold text-black mb-6">Our Signature Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional photography services crafted with precision and delivered with passion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Portrait Photography',
                image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749436941/2_4_ewrtz4.jpg',
                description: 'Capturing your essence with artistic precision and professional excellence'
              },
              {
                title: 'Wedding Photography',
                image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749436941/2_4_ewrtz4.jpg',
                description: 'Complete wedding day coverage with cinematic storytelling approach'
              },
              {
                title: 'Fashion Photography',
                image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749436941/2_4_ewrtz4.jpg',
                description: 'High-end fashion photography that showcases style and sophistication'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-200 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="group inline-flex items-center space-x-3 border-2 border-black text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Discover All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-white"></div>
              <Heart className="w-6 h-6 text-white" />
              <div className="w-12 h-0.5 bg-white"></div>
            </div>
            <h2 className="text-5xl font-bold mb-6">Client Love Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what our amazing clients have to say about their experience with Micky's Creative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Camera className="w-16 h-16 mx-auto mb-6 text-white" />
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Ready to Create Magic Together?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Let's transform your precious moments into timeless masterpieces. Contact us today 
            to discuss your photography vision and bring your dreams to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>Book Your Session Now</span>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
            <a
              href="tel:09026891298"
              className="group border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>Call Us Now</span>
              <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;