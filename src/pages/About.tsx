import React from 'react';
import { Award, Camera, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                About Micky's Creative
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Founded with a passion for capturing life's most precious moments, 
                Micky's Creative has become Yola's premier photography studio, known 
                for artistic excellence and professional service.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dikmotd52/image/upload/v1749516777/IMG-20250610-WA0007_gnqb9w.jpg"
                alt="Professional Photographer"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Camera className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              What started as a passion for capturing beautiful moments has evolved into 
              Yola's most trusted photography studio. At Micky's Creative, we believe that 
              every photograph tells a story, and every story deserves to be told with 
              artistry and authenticity.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Our journey began with a simple camera and an eye for beauty. Over the years, 
              we've had the privilege of documenting countless love stories, family milestones, 
              fashion moments, and corporate events. Each session teaches us something new 
              about the art of photography and the importance of human connection.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Based in the heart of Yola, Nigeria, we draw inspiration from our vibrant 
              community and the natural beauty of our surroundings. Whether we're capturing 
              the intimate exchange of vows, the confident stride of a model, or the joy 
              of a family celebration, we approach each project with fresh eyes and creative vision.
            </p>
            
            <p className="text-lg leading-relaxed">
              Today, Micky's Creative stands as a testament to the power of passion, 
              dedication, and the belief that photography is more than just taking pictures—
              it's about preserving memories that will be treasured for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide every shot we take
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion',
                description: 'We pour our heart into every photograph, ensuring each image reflects genuine emotion and artistry.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for perfection in every aspect of our work, from composition to final delivery.'
              },
              {
                icon: Users,
                title: 'Connection',
                description: 'We build meaningful relationships with our clients, creating a comfortable environment for authentic moments.'
              },
              {
                icon: Camera,
                title: 'Innovation',
                description: 'We stay current with the latest techniques and technology to deliver cutting-edge photography.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Our Philosophy</h2>
          <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
            "Photography is not just about capturing what you see, but about revealing 
            what might otherwise go unnoticed. Every person has a story, every moment 
            has beauty, and every photograph has the power to connect us to something greater."
          </p>
          <div className="text-yellow-200 text-lg font-medium">
            — Micky's Creative Team
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;