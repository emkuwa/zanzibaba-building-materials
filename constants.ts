
import { Product, FAQItem, Category, Testimonial } from './types';
import { Truck, ShieldCheck, DollarSign, Users } from 'lucide-react';

export const CATEGORIES: Category[] = [
  'Cement',
  'Tiles',
  'Timber & Boards',
  'Sand & Aggregates',
  'Steel & Metal',
  'Other Materials'
];

export const PRODUCTS: Product[] = [
  // Cement
  {
    id: 'c1',
    name: 'Dangote Cement 42.5N (50kg)',
    category: 'Cement',
    priceRange: 'TZS 16,500 – 18,500',
    description: 'Suitable for blocks, foundations, slabs. High strength.',
    images: [
      'https://i.imgur.com/HMpPrsK.jpg',
      'https://images.unsplash.com/photo-1590082726359-7681d89753e5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1622350731187-84f938f3813c?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // Tiles
  {
    id: 't_col',
    name: 'Full Tiles Collection',
    category: 'Tiles',
    priceRange: 'Starting from TZS 30,000',
    description: 'Wide range of Floor, Wall, Bathroom, and Kitchen tiles. Click to view full catalog.',
    images: [
      'https://i.imgur.com/EpV8xkE.jpg',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502005229766-3c8ef95a5d78?auto=format&fit=crop&w=800&q=80'
    ],
    externalLink: 'https://zanzibaba-tile-catalog-18594927203.us-west1.run.app'
  },

  // Timber & Boards
  {
    id: 'tb1',
    name: 'Timber Poles (Miti)',
    category: 'Timber & Boards',
    priceRange: 'TZS 5,000 – 9,000 per piece',
    description: 'Strong treated poles for construction.',
    images: [
      'https://i.imgur.com/CJXxXWg.jpeg',
      'https://i.imgur.com/CJXxXWg.jpeg',
      'https://i.imgur.com/CJXxXWg.jpeg'
    ]
  },
  {
    id: 'tb2',
    name: 'Marine Boards (8ft x 4ft)',
    category: 'Timber & Boards',
    priceRange: 'TZS 65,000 – 85,000',
    description: 'High-quality boards for formwork and construction. Available in 12mm & 18mm.',
    images: [
      'https://i.imgur.com/uTQhpQs.jpeg',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542665093-85cb96e4ce7a?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'tb3',
    name: 'Treated Timber 1" x 10" x 12ft',
    category: 'Timber & Boards',
    priceRange: 'TZS 20,000 – 25,000 per piece',
    description: 'Treated timber for roofing and structural support.',
    images: [
      'https://i.imgur.com/YyTTHaB.jpg',
      'https://i.imgur.com/YyTTHaB.jpg',
      'https://i.imgur.com/YyTTHaB.jpg'
    ]
  },
  {
    id: 'tb4',
    name: 'Treated Timber 1" x 8" x 12ft',
    category: 'Timber & Boards',
    priceRange: 'TZS 17,000 – 20,000 per piece',
    description: 'Treated timber for general construction use.',
    images: [
      'https://i.imgur.com/qQH1pz1.jpg',
      'https://i.imgur.com/qQH1pz1.jpg',
      'https://i.imgur.com/qQH1pz1.jpg'
    ]
  },
  {
    id: 'tb5',
    name: 'Treated Timber 1" x 6" x 12ft',
    category: 'Timber & Boards',
    priceRange: 'TZS 12,000 – 15,000 per piece',
    description: 'Versatile treated timber.',
    images: [
      'https://i.imgur.com/Gy7HLoZ.jpg',
      'https://i.imgur.com/Gy7HLoZ.jpg',
      'https://i.imgur.com/Gy7HLoZ.jpg'
    ]
  },
  {
    id: 'tb6',
    name: 'Treated Timber 2" x 6" x 18ft',
    category: 'Timber & Boards',
    priceRange: 'TZS 25,000 – 30,000 per piece',
    description: 'Heavy duty treated timber.',
    images: [
      'https://i.imgur.com/QYAXvxQ.jpg',
      'https://i.imgur.com/QYAXvxQ.jpg',
      'https://i.imgur.com/QYAXvxQ.jpg'
    ]
  },
  {
    id: 'tb7',
    name: 'Treated Timber 2" x 2" x 18ft',
    category: 'Timber & Boards',
    priceRange: 'TZS 8,000 – 10,000 per piece',
    description: 'Light structural timber.',
    images: [
      'https://i.imgur.com/xF1hwCk.jpg',
      'https://i.imgur.com/xF1hwCk.jpg',
      'https://i.imgur.com/xF1hwCk.jpg'
    ]
  },
  {
    id: 'tb8',
    name: 'Treated Timber 2" x 4" x 18ft',
    category: 'Timber & Boards',
    priceRange: 'TZS 15,000 – 20,000 per piece',
    description: 'Standard framing timber.',
    images: [
      'https://i.imgur.com/S63XYET.jpg',
      'https://i.imgur.com/S63XYET.jpg',
      'https://i.imgur.com/S63XYET.jpg'
    ]
  },
  {
    id: 'tb_door',
    name: 'Wooden Doors',
    category: 'Timber & Boards',
    priceRange: 'TZS 450,000 – 1,200,000',
    description: 'High quality wooden doors.',
    images: [
      'https://i.imgur.com/hBtfkCQ.jpg',
      'https://i.imgur.com/dTtWXJ0.jpg',
      'https://i.imgur.com/hBtfkCQ.jpg'
    ]
  },
  {
    id: 'tb_sdoor',
    name: 'Wooden Sliding Door',
    category: 'Timber & Boards',
    priceRange: 'TZS 2,500,000 – 5,000,000',
    description: 'Custom made wooden sliding door.',
    images: [
      'https://i.imgur.com/kbFlnru.jpg',
      'https://i.imgur.com/kh7TxEr.jpg',
      'https://i.imgur.com/kbFlnru.jpg'
    ]
  },
  {
    id: 'tb_bed',
    name: 'Wooden Bed',
    category: 'Timber & Boards',
    priceRange: 'TZS 800,000 – 1,500,000',
    description: 'Custom made wooden bed.',
    images: [
      'https://i.imgur.com/Xe2uXzX.jpg',
      'https://i.imgur.com/Xe2uXzX.jpg',
      'https://i.imgur.com/Xe2uXzX.jpg'
    ]
  },
  {
    id: 'tb_kitchen',
    name: 'Kitchen Cabinet',
    category: 'Timber & Boards',
    priceRange: 'TZS 250,000 – 500,000 per sqm',
    description: 'Custom made kitchen cabinets.',
    images: [
      'https://i.imgur.com/r2RCMN5.jpg',
      'https://i.imgur.com/r2RCMN5.jpg',
      'https://i.imgur.com/r2RCMN5.jpg'
    ]
  },

  // Sand & Aggregates
  {
    id: 'sa2',
    name: 'White Sand (20 Ton / 15m³ Truck)',
    category: 'Sand & Aggregates',
    priceRange: 'TZS 950,000 – 1,200,000',
    description: 'Ideal for plastering and finishing.',
    images: [
      'https://i.imgur.com/JcwXkHV.jpeg',
      'https://i.imgur.com/JcwXkHV.jpeg',
      'https://i.imgur.com/JcwXkHV.jpeg'
    ]
  },
  {
    id: 'sa3',
    name: 'Aggregates / Kokoto (20 Ton / 15m³ Truck)',
    category: 'Sand & Aggregates',
    priceRange: 'TZS 950,000 – 1,200,000',
    description: 'For concrete and structural works.',
    images: [
      'https://i.imgur.com/ALnfXlT.jpeg',
      'https://i.imgur.com/ALnfXlT.jpeg',
      'https://i.imgur.com/ALnfXlT.jpeg'
    ]
  },

  // Steel & Metal
  {
    id: 'st1',
    name: 'Steel Bars (Nondo) 12mm',
    category: 'Steel & Metal',
    priceRange: 'TZS 30,000 – 32,000 per piece',
    description: 'Reinforcement bars. ~94 pieces per Ton. Bulk Price: TZS 2,350,000 - 2,500,000 per Ton.',
    images: [
      'https://i.imgur.com/Xh5iOWc.jpeg',
      'https://i.imgur.com/Xh5iOWc.jpeg',
      'https://i.imgur.com/Xh5iOWc.jpeg'
    ]
  },
  {
    id: 'st1b',
    name: 'Steel Bars (Nondo) 10mm',
    category: 'Steel & Metal',
    priceRange: 'TZS 20,000 – 22,000 per piece',
    description: 'Reinforcement bars. ~135 pieces per Ton. Bulk Price: TZS 2,350,000 - 2,500,000 per Ton.',
    images: [
      'https://i.imgur.com/Xh5iOWc.jpeg',
      'https://i.imgur.com/Xh5iOWc.jpeg',
      'https://i.imgur.com/Xh5iOWc.jpeg'
    ]
  },
  {
    id: 'st1c',
    name: 'Steel Bars (Nondo) 8mm',
    category: 'Steel & Metal',
    priceRange: 'TZS 14,000 – 16,000 per piece',
    description: 'Reinforcement bars. ~211 pieces per Ton. Bulk Price: TZS 2,350,000 - 2,500,000 per Ton.',
    images: [
      'https://i.imgur.com/Xh5iOWc.jpeg',
      'https://i.imgur.com/Xh5iOWc.jpeg',
      'https://i.imgur.com/Xh5iOWc.jpeg'
    ]
  },
  {
    id: 'st3',
    name: 'Coated Metal Roof Tiles (130cm x 42cm)',
    category: 'Steel & Metal',
    priceRange: 'TZS 22,000 – 25,000',
    description: 'Available in different colours.',
    images: [
      'https://i.imgur.com/aJcKdt6.jpg',
      'https://i.imgur.com/aJcKdt6.jpg',
      'https://i.imgur.com/aJcKdt6.jpg'
    ]
  },
  {
    id: 'st4',
    name: 'Misumari (Nails) - 25kg Bag',
    category: 'Steel & Metal',
    priceRange: 'TZS 80,000 – 120,000',
    description: 'High quality construction nails.',
    images: [
      'https://i.imgur.com/xUGPa7c.jpg',
      'https://i.imgur.com/xUGPa7c.jpg',
      'https://i.imgur.com/xUGPa7c.jpg'
    ]
  },

  // Other Materials
  {
    id: 'om2',
    name: 'Paint (20L bucket)',
    category: 'Other Materials',
    priceRange: 'TZS 45,000 – 85,000',
    description: 'Interior and exterior quality paint.',
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1632759132204-6a8b79c3725b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'om3',
    name: 'Cement Blocks (Tofali)',
    category: 'Other Materials',
    priceRange: 'TZS 1,300 – 1,500',
    description: 'Standard high-strength construction blocks.',
    images: [
      'https://i.imgur.com/HUdQsle.jpg',
      'https://i.imgur.com/HUdQsle.jpg',
      'https://i.imgur.com/HUdQsle.jpg'
    ]
  },
  {
    id: 'om4',
    name: 'Gypsum Board',
    category: 'Other Materials',
    priceRange: 'TZS 19,000 – 22,000',
    description: 'Standard Gypsum Board.',
    images: [
      'https://i.imgur.com/y09n6Hy.jpg',
      'https://i.imgur.com/y09n6Hy.jpg',
      'https://i.imgur.com/y09n6Hy.jpg'
    ]
  },
  {
    id: 'om_upvc_door',
    name: 'UPVC Sliding Door',
    category: 'Other Materials',
    priceRange: 'TZS 3,000,000 – 6,000,000',
    description: 'Custom made UPVC sliding door.',
    images: [
      'https://i.imgur.com/ASYbBV4.jpg',
      'https://i.imgur.com/ASYbBV4.jpg',
      'https://i.imgur.com/ASYbBV4.jpg'
    ]
  },
  {
    id: 'om_upvc_window',
    name: 'UPVC Sliding Window',
    category: 'Other Materials',
    priceRange: 'TZS 350,000 – 600,000',
    description: 'Custom made UPVC sliding window.',
    images: [
      'https://i.imgur.com/8P1lTzV.jpg',
      'https://i.imgur.com/8P1lTzV.jpg',
      'https://i.imgur.com/8P1lTzV.jpg'
    ]
  }
];

export const FEATURES = [
  {
    title: 'Quality Products',
    desc: 'We source only the best materials from trusted manufacturers.',
    icon: ShieldCheck
  },
  {
    title: 'Fair Pricing',
    desc: 'Competitive prices and transparent quotations with no hidden fees.',
    icon: DollarSign
  },
  {
    title: 'Fast Delivery',
    desc: 'Reliable delivery network across Zanzibar.',
    icon: Truck
  },
  {
    title: 'Expert Support',
    desc: 'Our team helps you choose the right materials for your project.',
    icon: Users
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do you deliver to all parts of Zanzibar?',
    answer: 'Yes, we deliver to Stone Town, Paje, Nungwi, Jambiani, and all other regions of Unguja and Pemba.'
  },
  {
    question: 'Are prices fixed?',
    answer: 'Prices vary based on quantity and location, but we always provide a transparent quotation.'
  },
  {
    question: 'Can I order in bulk?',
    answer: 'Yes, discounts are available for bulk orders.'
  },
  {
    question: 'Do you supply contractors and hardware shops?',
    answer: 'Yes, we work with both individuals and large projects.'
  }
];

export const CONTACT_INFO = {
  address: 'Office No 13, Chonja Business Complex, Gereji Area, Paje, Zanzibar',
  phone: '+255 716002790',
  email: 'info@zanzibaba.com',
  website: 'www.zanzibaba.com'
};
