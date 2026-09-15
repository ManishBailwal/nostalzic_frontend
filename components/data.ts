// app/experiences/components/data.ts

export interface Experience {
  id: number;
  title: string;
  location: string;
  city: string;
  image: string;
  price: number;
  rating: number;
  guests: number;
  duration: string;
  category:
    | "Birthday"
    | "Anniversary"
    | "Proposal"
    | "Wedding"
    | "Corporate";

  featured: boolean;

  availableSlots: string[];

  amenities: string[];

  description: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Romantic Dome Dinner",
    city: "Mumbai",
    location: "Navi Mumbai",
    image: "/heroImage.png",
    price: 2499,
    rating: 4.9,
    guests: 2,
    duration: "2 Hours",
    category: "Proposal",
    featured: true,
    availableSlots: [
      "6:00 PM",
      "7:00 PM",
      "8:00 PM",
      "9:00 PM",
    ],
    amenities: [
      "Private Dome",
      "Candle Light",
      "Decoration",
      "Music",
    ],
    description:
      "A romantic private dome setup with candles, flowers and elegant décor."
  },

  {
    id: 2,
    title: "Luxury Birthday Celebration",
    city: "Mumbai",
    location: "Navi Mumbai",
    image: "/birthday.jpg",
    price: 4999,
    rating: 4.8,
    guests: 10,
    duration: "3 Hours",
    category: "Birthday",
    featured: true,
    availableSlots: [
      "5:00 PM",
      "6:00 PM",
      "7:00 PM",
      "8:00 PM",
    ],
    amenities: [
      "Balloon Decor",
      "Cake Table",
      "LED Lighting",
      "Music",
    ],
    description:
      "Celebrate birthdays with premium decoration, music and customized themes."
  },

  {
    id: 3,
    title: "Anniversary Under The Stars",
    city: "Mumbai",
    location: "Panvel",
    image: "/anniversary.jpg",
    price: 3999,
    rating: 4.9,
    guests: 2,
    duration: "2 Hours",
    category: "Anniversary",
    featured: false,
    availableSlots: [
      "7:00 PM",
      "8:00 PM",
      "9:00 PM",
    ],
    amenities: [
      "Private Seating",
      "Flowers",
      "Candle Light",
      "Photography",
    ],
    description:
      "Celebrate your anniversary with a beautifully curated outdoor experience."
  },

  {
    id: 4,
    title: "Dream Wedding Setup",
    city: "Mumbai",
    location: "Thane",
    image: "/wedding.jpg",
    price: 15999,
    rating: 5.0,
    guests: 100,
    duration: "6 Hours",
    category: "Wedding",
    featured: true,
    availableSlots: [
      "Morning",
      "Afternoon",
      "Evening",
    ],
    amenities: [
      "Luxury Decoration",
      "Stage",
      "Dining",
      "Photography",
    ],
    description:
      "Elegant wedding venue with premium floral decoration and luxury seating."
  },

  {
    id: 5,
    title: "Corporate Celebration",
    city: "Mumbai",
    location: "Vashi",
    image: "/corporate.jpg",
    price: 7999,
    rating: 4.7,
    guests: 40,
    duration: "4 Hours",
    category: "Corporate",
    featured: false,
    availableSlots: [
      "11:00 AM",
      "2:00 PM",
      "6:00 PM",
    ],
    amenities: [
      "Projector",
      "Sound System",
      "Refreshments",
      "Decoration",
    ],
    description:
      "Perfect venue for corporate parties, launches and team celebrations."
  },

  {
    id: 6,
    title: "Luxury Proposal Experience",
    city: "Mumbai",
    location: "Bandra",
    image: "/proposal.jpg",
    price: 6999,
    rating: 5.0,
    guests: 2,
    duration: "2 Hours",
    category: "Proposal",
    featured: true,
    availableSlots: [
      "6:00 PM",
      "7:00 PM",
      "8:00 PM",
    ],
    amenities: [
      "Rose Path",
      "Live Music",
      "Photography",
      "Champagne",
    ],
    description:
      "Create an unforgettable proposal with luxury décor and personalized arrangements."
  }
];