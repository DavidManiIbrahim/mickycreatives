import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '09026891298',
      action: 'tel:09026891298'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@mickyscreative.com',
      action: 'mailto:info@mickyscreative.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Yola, Adamawa State, Nigeria',
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Sat: 9AM - 6PM',
      action: null
    }
  ];

  const sendWhatsAppMessage = () => {
    const message = "Hello Micky's Creative! I'm interested in your photography services. Please let me know more details.";
    const whatsappUrl = `https://wa.me/2349026891298?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Let's Create Together</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to capture your special moments? Get in touch with us to discuss your 
            photography needs and let's bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      {item.action ? (
                        <a
                          href={item.action}
                          className="text-gray-600 hover:text-yellow-600 transition-colors duration-300"
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={sendWhatsAppMessage}
                className="w-full bg-green-500 text-white px-6 py-4 rounded-lg font-medium hover:bg-green-600 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mb-8"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chat on WhatsApp</span>
              </button>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">Yola, Adamawa State</p>
                  <p className="text-sm">Nigeria</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about our photography services
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'How far in advance should I book my session?',
                answer: 'We recommend booking at least 2-3 weeks in advance, especially for weddings and special events. However, we do our best to accommodate last-minute requests when possible.'
              },
              {
                question: 'What happens if it rains on the day of our outdoor shoot?',
                answer: 'We always have backup plans! We can reschedule for another day or move to a covered location. Your comfort and the quality of photos are our priorities.'
              },
              {
                question: 'How long does it take to receive our photos?',
                answer: 'Edited photos are typically delivered within 1-2 weeks for portraits and pre-wedding sessions, and 2-3 weeks for weddings. We provide a sneak peek within 24-48 hours.'
              },
              {
                question: 'Do you travel outside of Yola for shoots?',
                answer: 'Yes! We love destination shoots. Travel fees may apply depending on the location and duration of the trip. Contact us to discuss your specific needs.'
              },
              {
                question: 'Can we request specific editing styles?',
                answer: 'Absolutely! We discuss your preferred editing style during our consultation. We can show you samples and work together to achieve the look you envision.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;