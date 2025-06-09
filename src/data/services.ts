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