export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  duration: string;
  deliverables: string;
}

export const services: Service[] = [
  {
    id: 'portrait',
    title: 'Portrait Photography',
    description: 'Professional portrait sessions that capture your personality and essence with artistic flair.',
    features: [
      'Professional studio or outdoor sessions',
      'Multiple outfit changes encouraged',
      'Creative lighting and posing direction',
      'Individual, couple, or family portraits',
      'Business headshots and corporate portraits'
    ],
    duration: '1-2 hours',
    deliverables: '20-30 professionally edited high-resolution images'
  },
  {
    id: 'prewedding',
    title: 'Pre-Wedding Photography',
    description: 'Romantic and creative engagement sessions that tell your unique love story.',
    features: [
      'Consultation to plan perfect locations',
      'Multiple location shoots available',
      'Wardrobe styling guidance',
      'Creative concepts and themes',
      'Candid and posed shots'
    ],
    duration: '2-3 hours',
    deliverables: '40-60 professionally edited images + online gallery'
  },
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description: 'Comprehensive wedding day coverage capturing every precious moment of your special day.',
    features: [
      'Full day wedding coverage',
      'Bridal preparation and ceremony',
      'Reception and celebration moments',
      'Candid and formal group photos',
      'Second photographer available',
      'Same-day preview images'
    ],
    duration: '8-12 hours',
    deliverables: '200-400 edited images + wedding album design'
  },
  {
    id: 'fashion',
    title: 'Fashion Photography',
    description: 'High-end fashion and commercial photography for brands, designers, and models.',
    features: [
      'Editorial and commercial fashion shoots',
      'Model portfolio development',
      'Brand and product photography',
      'Creative direction and styling',
      'Studio and location options'
    ],
    duration: '3-4 hours',
    deliverables: '30-50 professionally retouched images'
  },
  {
    id: 'event',
    title: 'Event Photography',
    description: 'Professional event coverage for corporate functions, celebrations, and special occasions.',
    features: [
      'Corporate events and conferences',
      'Birthday and anniversary celebrations',
      'Cultural and social gatherings',
      'Award ceremonies and galas',
      'Candid and formal documentation'
    ],
    duration: '4-8 hours',
    deliverables: '100-200 edited images + online gallery'
  }
];