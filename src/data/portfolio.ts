export interface PortfolioItem {
  id: string;
  title: string;
  category: 'portrait' | 'wedding' | 'event';
  image: string;
  description: string;
}



export const portfolioItems: PortfolioItem[] = [
  // Portrait
  {
    id: 'p1',
    title: 'Professional Headshot',
    category: 'portrait',
    image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749434749/3_6_kflmoo.jpg',
    description: 'Professional business portrait with natural lighting'
  },
  {
    id: 'p2',
    title: 'Creative Portrait',
    category: 'portrait',
    image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749434758/3_5_ugech2.jpg',
    description: 'Artistic portrait with dramatic lighting'
  },
  {
    id: 'p3',
    title: 'Family Portrait',
    category: 'portrait',
    image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749434776/3_29_lt6un6.jpg',
    description: 'Beautiful family moment captured naturally'
  },

  
  // Wedding
  {
    id: 'w1',
    title: 'Wedding Ceremony',
    category: 'wedding',
    image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749434755/3_7_moa8bh.jpg',
    description: 'Beautiful wedding ceremony moments'
  },
  {
    id: 'w2',
    title: 'Reception Joy',
    category: 'wedding',
    image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749434766/3_28_ogrglw.jpg',
    description: 'Celebration and joy at wedding reception'
  },
  {
    id: 'w3',
    title: 'Bride & Groom',
    category: 'wedding',
    image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749434764/3_25_b23qoh.jpg',
    description: 'Intimate moments between bride and groom'
  },
  {
    id: 'w4',
    title: 'Bride & Groom',
    category: 'wedding',
    image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749436941/2_4_ewrtz4.jpg',
    description: 'Intimate moments between bride and groom'
  },
  {
    id: 'w4',
    title: 'Bride & Groom',
    category: 'wedding',
    image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749436940/2_1_vrsy2r.jpg',
    description: 'Intimate moments between bride and groom'
  },
  
  // Event
  {
    id: 'e1',
    title: 'Corporate Event',
    category: 'event',
    image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749434776/3_30_zifwqg.jpg',
    description: 'Professional corporate event coverage'
  },
  {
    id: 'e2',
    title: 'Birthday Celebration',
    category: 'event',
    image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749434788/3_2_oiawtc.jpg',
    description: 'Joyful birthday celebration moments'
  },
  {
    id: 'e3',
    title: 'Conference Coverage',
    category: 'event',
    image: 'https://res.cloudinary.com/dikmotd52/image/upload/v1749434764/3_24_kqbwwx.jpg',
    description: 'Professional conference and seminar photography'
  }
];

export const heroImages = [
  'https://res.cloudinary.com/dikmotd52/image/upload/v1749434764/3_24_kqbwwx.jpg',
  'https://res.cloudinary.com/dikmotd52/image/upload/v1749434788/3_2_oiawtc.jpg',
  'https://res.cloudinary.com/dikmotd52/image/upload/v1749434776/3_30_zifwqg.jpg',
  'https://res.cloudinary.com/dikmotd52/image/upload/v1749434765/3_27_gcoo7j.jpg',
  'https://res.cloudinary.com/dikmotd52/image/upload/v1749434758/3_5_ugech2.jpg',
   'https://res.cloudinary.com/dikmotd52/image/upload/v1749434749/3_6_kflmoo.jpg'
];