import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Create WhatsApp message
    const whatsappMessage = `Hello Micky's Creative!

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/2349026891298?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendWhatsAppMessage = () => {
    const message = "Hello Micky's Creative! I'm interested in your photography services. Please let me know more details.";
    const whatsappUrl = `https://wa.me/2349026891298?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
<div className="bg-background-ivory rounded-2xl shadow-2xl p-8 border border-accent-gold/30">
      <h3 className="text-3xl font-bold text-textcolor-darkgrey mb-8">Get In Touch</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-textcolor-darkgrey mb-3">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-4 border-2 border-accent-gold/50 rounded-xl focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-all duration-300 text-textcolor-darkgrey"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-textcolor-darkgrey mb-3">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 border-2 border-accent-gold/50 rounded-xl focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-all duration-300 text-textcolor-darkgrey"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-textcolor-darkgrey mb-3">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-4 border-2 border-accent-gold/50 rounded-xl focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-all duration-300 text-textcolor-darkgrey"
              placeholder="Your phone number"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-textcolor-darkgrey mb-3">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-4 border-2 border-accent-gold/50 rounded-xl focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-all duration-300 text-textcolor-darkgrey"
            >
              <option value="">Select a service</option>
              <option value="Portrait Photography">Portrait Photography</option>
              <option value="Pre-Wedding Photography">Pre-Wedding Photography</option>
              <option value="Wedding Photography">Wedding Photography</option>
              <option value="Fashion Photography">Fashion Photography</option>
              <option value="Event Photography">Event Photography</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-textcolor-darkgrey mb-3">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-accent-gold/50 rounded-xl focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-all duration-300 resize-none text-textcolor-darkgrey"
            placeholder="Tell us about your photography needs, preferred dates, and any specific requirements..."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="flex-1 bg-primary-charcoalBlack text-textcolor-white px-6 py-4 rounded-xl font-semibold hover:bg-accent-gold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </button>
          
          <button
            type="button"
            onClick={sendWhatsAppMessage}
            className="flex-1 bg-accent-gold text-primary-charcoalBlack px-6 py-4 rounded-xl font-semibold hover:bg-accent-gold-hover hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;