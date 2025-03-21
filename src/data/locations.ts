
export interface Location {
  id: string;
  name: string;
  type: 'temple' | 'hotel';
  description: string;
  shortDescription: string;
  address: string;
  images: string[];
  rating: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  amenities?: string[];
  priceRange?: string;
  website?: string;
  phone?: string;
  openingHours?: string;
  featured?: boolean;
  tags: string[];
}

export const locations: Location[] = [
  {
    id: 'krishna-janmasthan',
    name: 'Krishna Janmasthan Temple',
    type: 'temple',
    description: 'Krishna Janmasthan Temple Complex is a group of Hindu temples in Mathura, India. These temples are built around the place where Lord Krishna is said to have been born. The temple complex houses the main shrine dedicated to Lord Krishna, along with many other shrines. The complex is one of the most sacred places for Hindus and attracts thousands of pilgrims and tourists every year. The architecture of the temple complex is a beautiful blend of different styles, reflecting the rich cultural heritage of India.',
    shortDescription: 'The sacred birthplace of Lord Krishna, featuring ancient temples and spiritual significance.',
    address: 'Krishna Janmasthan Temple Complex, Mathura, Uttar Pradesh 281001',
    images: [
      'https://images.unsplash.com/photo-1591777334728-783c11d777ec?q=80&w=1000',
      'https://images.unsplash.com/photo-1591777334750-43556ed1cbf9?q=80&w=1000'
    ],
    rating: 4.8,
    coordinates: {
      lat: 27.5046,
      lng: 77.6731
    },
    openingHours: '5:30 AM - 12:00 PM, 4:00 PM - 9:00 PM',
    featured: true,
    tags: ['spiritual', 'historic', 'architecture']
  },
  {
    id: 'dwarkadhish',
    name: 'Dwarkadhish Temple',
    type: 'temple',
    description: 'Dwarkadhish Temple is a Hindu temple dedicated to Lord Krishna, who is worshipped here as Dwarkadhish, or the King of Dwarka. The temple was constructed in 1814 by Seth Gokul Das Parikh, who was the treasurer of the Estate of Gwalior. The main deity is a black marble image of Lord Krishna. The temple is known for its beautiful architecture and intricate carvings. It is especially popular during the festivals of Janmashtami and Holi, when special ceremonies and celebrations are held.',
    shortDescription: 'A magnificent temple dedicated to Lord Krishna as the King of Dwarka, featuring stunning architecture.',
    address: 'Vishram Ghat, Mathura, Uttar Pradesh 281001',
    images: [
      'https://images.unsplash.com/photo-1593005510329-8a4035a7238f?q=80&w=1000',
      'https://images.unsplash.com/photo-1593005510509-5d6c4e59d42d?q=80&w=1000'
    ],
    rating: 4.7,
    coordinates: {
      lat: 27.5037,
      lng: 77.6713
    },
    openingHours: '5:30 AM - 12:00 PM, 4:00 PM - 9:00 PM',
    featured: true,
    tags: ['spiritual', 'architecture', 'historic']
  },
  {
    id: 'vishram-ghat',
    name: 'Vishram Ghat',
    type: 'temple',
    description: 'Vishram Ghat is the main ghat in Mathura, situated on the banks of the River Yamuna. According to Hindu mythology, Lord Krishna rested here after killing the evil king Kansa. The ghat is known for its evening Aarti ceremony, where hundreds of lamps are lit and offered to the River Yamuna. The atmosphere is filled with devotional songs and the sound of bells, creating a spiritual and mystical ambiance. Vishram Ghat is also a popular spot for pilgrims to take a holy dip in the Yamuna, believing it cleanses them of their sins.',
    shortDescription: 'A sacred riverfront where Lord Krishna is said to have rested, known for its evening Aarti ceremony.',
    address: 'Vishram Ghat, Mathura, Uttar Pradesh 281001',
    images: [
      'https://images.unsplash.com/photo-1565356345925-2ba582f15296?q=80&w=1000',
      'https://images.unsplash.com/photo-1565356345990-31de3406c7f4?q=80&w=1000'
    ],
    rating: 4.6,
    coordinates: {
      lat: 27.5026,
      lng: 77.6725
    },
    openingHours: 'Open 24 hours',
    featured: true,
    tags: ['spiritual', 'river', 'ceremony']
  },
  {
    id: 'radha-kund',
    name: 'Radha Kund',
    type: 'temple',
    description: 'Radha Kund is a sacred pond located in the Mathura district, about 26 km from the city of Mathura. According to Hindu mythology, it was created by Lord Krishna after killing the demon Aristasura. Radha Kund is considered one of the most sacred places in the Braj region and is closely associated with Radha, the beloved of Lord Krishna. Pilgrims often take a dip in the holy waters of Radha Kund, believing it bestows divine blessings and purifies the soul. The area around Radha Kund is also home to many temples and ashrams.',
    shortDescription: 'A sacred pond associated with Radha and Krishna, believed to bestow divine blessings.',
    address: 'Radha Kund, Mathura District, Uttar Pradesh',
    images: [
      'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=1000',
      'https://images.unsplash.com/photo-1564507004842-7df778c8c028?q=80&w=1000'
    ],
    rating: 4.5,
    coordinates: {
      lat: 27.5213,
      lng: 77.4896
    },
    tags: ['spiritual', 'historic', 'nature']
  },
  {
    id: 'radharam-resort',
    name: 'Radha Ram Resort',
    type: 'hotel',
    description: 'Radha Ram Resort is a luxurious hotel located in the heart of Mathura, offering a perfect blend of modern amenities and traditional hospitality. The hotel features spacious rooms with elegant décor, a multi-cuisine restaurant serving delicious food, a swimming pool, a fitness center, and a spa. The resort is known for its warm hospitality and personalized service, ensuring a comfortable and memorable stay for guests. The location of the resort makes it an ideal choice for both pilgrims and tourists, as it is close to many popular attractions in Mathura.',
    shortDescription: 'A luxurious resort offering modern amenities with traditional charm, located close to major attractions.',
    address: 'Delhi-Mathura Highway, Mathura, Uttar Pradesh 281001',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000'
    ],
    rating: 4.3,
    coordinates: {
      lat: 27.4982,
      lng: 77.6736
    },
    amenities: ['Wi-Fi', 'Restaurant', 'Swimming Pool', 'Spa', 'Fitness Center', 'Conference Hall'],
    priceRange: '₹₹₹',
    website: 'https://example.com/radharram-resort',
    phone: '+91 1234567890',
    featured: true,
    tags: ['luxury', 'family-friendly', 'business']
  },
  {
    id: 'krishna-palace',
    name: 'Krishna Palace Hotel',
    type: 'hotel',
    description: 'Krishna Palace Hotel is a premium hotel in Mathura, designed to provide a comfortable and luxurious stay for guests. The hotel offers a range of accommodations, from deluxe rooms to premium suites, all tastefully decorated and equipped with modern amenities. The hotel features a multi-cuisine restaurant serving delicious Indian and international dishes, a coffee shop, a bar, a fitness center, and a spa. The hotel also offers facilities for business meetings and events, making it an ideal choice for both leisure and business travelers.',
    shortDescription: 'A premium hotel offering luxurious accommodations and excellent services for a comfortable stay.',
    address: 'Civil Lines, Mathura, Uttar Pradesh 281001',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000',
      'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=1000'
    ],
    rating: 4.4,
    coordinates: {
      lat: 27.4953,
      lng: 77.6731
    },
    amenities: ['Wi-Fi', 'Restaurant', 'Bar', 'Spa', 'Fitness Center', 'Room Service', 'Conference Hall'],
    priceRange: '₹₹₹₹',
    website: 'https://example.com/krishna-palace',
    phone: '+91 9876543210',
    featured: true,
    tags: ['luxury', 'business', 'family-friendly']
  },
  {
    id: 'vrindavan-inn',
    name: 'Vrindavan Inn',
    type: 'hotel',
    description: 'Vrindavan Inn is a budget-friendly hotel located in the holy city of Mathura, offering comfortable accommodations at affordable prices. The hotel features clean and cozy rooms, a restaurant serving vegetarian food, free Wi-Fi, and 24-hour front desk service. The hotel is known for its friendly staff and warm hospitality, making guests feel at home. The location of the hotel is convenient, as it is close to many temples and tourist attractions in Mathura. Vrindavan Inn is an ideal choice for pilgrims and budget travelers looking for a comfortable stay without spending too much.',
    shortDescription: 'A budget-friendly hotel offering comfortable accommodations and warm hospitality.',
    address: 'Temple Road, Mathura, Uttar Pradesh 281001',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000',
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1000'
    ],
    rating: 4.0,
    coordinates: {
      lat: 27.5013,
      lng: 77.6751
    },
    amenities: ['Wi-Fi', 'Restaurant', 'Room Service', '24-hour Front Desk'],
    priceRange: '₹₹',
    website: 'https://example.com/vrindavan-inn',
    phone: '+91 5678901234',
    tags: ['budget', 'pilgrim-friendly', 'convenient']
  }
];

export const getLocationById = (id: string): Location | undefined => {
  return locations.find(location => location.id === id);
};

export const getLocationsByType = (type: 'temple' | 'hotel'): Location[] => {
  return locations.filter(location => location.type === type);
};

export const getFeaturedLocations = (): Location[] => {
  return locations.filter(location => location.featured);
};

export const searchLocations = (query: string): Location[] => {
  const searchTerm = query.toLowerCase();
  return locations.filter(location => 
    location.name.toLowerCase().includes(searchTerm) ||
    location.description.toLowerCase().includes(searchTerm) ||
    location.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};
