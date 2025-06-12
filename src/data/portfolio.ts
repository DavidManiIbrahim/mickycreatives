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
    image: "/image/Portrait/1 (1).jpg",
    description: 'Professional business portrait with natural lighting'
  },
  {
    id: 'p2',
    title: 'Creative Portrait',
    category: 'portrait',
    image: "/image/Portrait/1 (10).jpg",
    description: 'Artistic portrait with dramatic lighting'
  },
  {
    id: 'p3',
    title: 'Family Portrait',
    category: 'portrait',
    image: "/image/Portrait/1 (15).jpg",
    description: 'Beautiful family moment captured naturally'
  },
  {
    id: 'p4',
    title: 'Creative Portrait',
    category: 'portrait',
    image: "/image/Portrait/1 (12).jpg",
    description: 'Artistic portrait with dramatic lighting'
  },
  {
    id: 'p5',
    title: 'Professional Headshot',
    category: 'portrait',
    image: "/image/Portrait/1 (20).jpg",
    description: 'Professional business portrait with natural lighting'
  },
  {
    id: 'p6',
    title: 'Creative Portrait',
    category: 'portrait',
    image: "/image/Portrait/1 (16).jpg",
    description: 'Artistic portrait with dramatic lighting'
  },
   {
    id: 'p7',
    title: 'Professional Headshot',
    category: 'portrait',
    image: "/image/Portrait/1 (27).jpg",
    description: 'Professional business portrait with natural lighting'
  },
  {
    id: 'p8',
    title: 'Professional Headshot',
    category: 'portrait',
    image: "/image/Portrait/1 (23).jpg",
    description: 'Professional business portrait with natural lighting'
  },


  // Wedding
  {
    id: 'w1',
    title: 'Wedding Ceremony',
    category: 'wedding',
    image: '/image/Weddings/2 (1).jpg',
    description: 'Beautiful wedding ceremony moments'
  },
  {
    id: 'w2',
    title: 'Reception Joy',
    category: 'wedding',
    image: '/image/Weddings/2 (10).jpg',
    description: 'Celebration and joy at wedding reception'
  },
  {
    id: 'w3',
    title: 'Bride & Groom',
    category: 'wedding',
    image: '/image/Weddings/2 (3).jpg',
    description: 'Intimate moments between bride and groom'
  },
  {
    id: 'w4',
    title: 'Bride & Groom',
    category: 'wedding',
    image: '/image/Weddings/2 (9).jpg',
    description: 'Intimate moments between bride and groom'
  },
  {
    id: 'w5',
    title: 'Bride & Groom',
    category: 'wedding',
    image: '/image/Weddings/2 (4).jpg',
    description: 'Intimate moments between bride and groom'
  },
  {
    id: 'w6',
    title: 'Bride & Groom',
    category: 'wedding',
    image: '/image/Weddings/2 (5).jpg',
    description: 'Intimate moments between bride and groom'
  },
  

  // Event
  {
    id: 'e1',
    title: 'Corporate Event',
    category: 'event',
    image: '/image/Events/3 (6).jpg',
    description: 'Professional corporate event coverage'
  },
  {
    id: 'e2',
    title: 'Birthday Celebration',
    category: 'event',
    image: '/image/Events/3 (12).jpg',
    description: 'Joyful birthday celebration moments'
  },
  {
    id: 'e3',
    title: 'Conference Coverage',
    category: 'event',
    image: '/image/Events/3 (20).jpg',
    description: 'Professional conference and seminar photography'
  },
  {
    id: 'e4',
    title: 'Corporate Event',
    category: 'event',
    image: '/image/Events/3 (25).jpg',
    description: 'Professional corporate event coverage'
  },
  {
    id: 'e5',
    title: 'Birthday Celebration',
    category: 'event',
    image: '/image/Events/3 (53).jpg',
    description: 'Joyful birthday celebration moments'
  },
  {
    id: 'e6',
    title: 'Corporate Event',
    category: 'event',
    image: '/image/Events/3 (37).jpg',
    description: 'Professional corporate event coverage'
  },
  {
    id: 'e7',
    title: 'Birthday Celebration',
    category: 'event',
    image: '/image/Events/3 (58).jpg',
    description: 'Joyful birthday celebration moments'
  },
  {
    id: 'e8',
    title: 'Birthday Celebration',
    category: 'event',
    image: '/image/Events/3 (27).jpg',
    description: 'Joyful birthday celebration moments'
  },

];

export const heroImages = [
  '/image/Events/3 (6).jpg',
  '/image/Events/3 (53).jpg',
  '/image/Weddings/2 (1).jpg',
  '/image/Weddings/2 (9).jpg',
  '/image/Portrait/1 (22).jpg',
  '/image/Portrait/1 (17).jpg',
];