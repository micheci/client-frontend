import { Property } from "../interfaces/Iproperties";

const properties = [
  {
    _id: "67c8bedcfabb0edd376edef1",
    agentId: "67914e6051f4fc21f83a1b88",
    title: "Vintage 1997 House",
    address: "315 N Utica Ave, 722",
    price: 2332,
    description: "New house for sale, new owners just updated",
    images: [
      "https://res.cloudinary.com/dx2vtx5uw/image/upload/v1712439007/home1.jpg",
      "https://res.cloudinary.com/dx2vtx5uw/image/upload/v1712439006/home2.jpg",
    ],
    bedrooms: 2,
    bathrooms: 3,
    garage: false,
    parkingSpaces: null,
    swimmingPool: false,
    fireplace: false,
    basement: false,
    finishedBasement: false,
    attic: false,
    airConditioning: false,
    remodeled: false,
    outdoorSpace: "",
    securitySystem: false,
    smartHome: false,
    fence: false,
    hoaFees: null,
    petsAllowed: false,
    walkInClosets: false,
  },
  {
    _id: "67c8bedcfabb0edd376edef2",
    agentId: "67914e6051f4fc21f83a1b88",
    title: "Modern Lakefront Villa",
    address: "400 Lakeside Dr, Austin, TX",
    price: 1200000,
    description: "Stunning lake view villa with modern finishes.",
    images: [
      "https://res.cloudinary.com/dx2vtx5uw/image/upload/v1712439007/home3.jpg",
      "https://res.cloudinary.com/dx2vtx5uw/image/upload/v1712439006/home4.jpg",
    ],
    bedrooms: 4,
    bathrooms: 4,
    garage: true,
    parkingSpaces: 2,
    swimmingPool: true,
    fireplace: true,
    basement: false,
    finishedBasement: false,
    attic: false,
    airConditioning: true,
    remodeled: true,
    outdoorSpace: "Patio with firepit",
    securitySystem: true,
    smartHome: true,
    fence: true,
    hoaFees: 250,
    petsAllowed: true,
    walkInClosets: true,
  },
  {
    _id: "67c8bedcfabb0edd376edef3",
    agentId: "67914e6051f4fc21f83a1b88",
    title: "Luxury High-Rise Condo",
    address: "1200 Main St, Dallas, TX",
    price: 950000,
    description: "Panoramic city views from the heart of downtown.",
    images: [
      "https://res.cloudinary.com/dx2vtx5uw/image/upload/v1712439006/home5.jpg",
    ],
    bedrooms: 3,
    bathrooms: 2,
    garage: true,
    parkingSpaces: 1,
    swimmingPool: true,
    fireplace: false,
    basement: false,
    finishedBasement: false,
    attic: false,
    airConditioning: true,
    remodeled: true,
    outdoorSpace: "Balcony",
    securitySystem: true,
    smartHome: true,
    fence: false,
    hoaFees: 450,
    petsAllowed: true,
    walkInClosets: true,
  },
  {
    _id: "67c8bedcfabb0edd376edef4",
    agentId: "67914e6051f4fc21f83a1b88",
    title: "Cozy Bungalow",
    address: "817 Cedarwood Ln, Fort Worth, TX",
    price: 275000,
    description: "Perfect starter home with large backyard.",
    images: [
      "https://res.cloudinary.com/dx2vtx5uw/image/upload/v1712439006/home6.jpg",
    ],
    bedrooms: 2,
    bathrooms: 1,
    garage: false,
    parkingSpaces: 1,
    swimmingPool: false,
    fireplace: false,
    basement: false,
    finishedBasement: false,
    attic: true,
    airConditioning: true,
    remodeled: false,
    outdoorSpace: "Fenced yard",
    securitySystem: false,
    smartHome: false,
    fence: true,
    hoaFees: null,
    petsAllowed: true,
    walkInClosets: false,
  },
  {
    _id: "67c8bedcfabb0edd376edef5",
    agentId: "67914e6051f4fc21f83a1b88",
    title: "Hilltop Mansion",
    address: "903 Bluff Heights, El Paso, TX",
    price: 2000000,
    description: "Private estate with unmatched mountain views.",
    images: [
      "https://res.cloudinary.com/dx2vtx5uw/image/upload/v1712439007/home7.jpg",
    ],
    bedrooms: 6,
    bathrooms: 5,
    garage: true,
    parkingSpaces: 3,
    swimmingPool: true,
    fireplace: true,
    basement: true,
    finishedBasement: true,
    attic: true,
    airConditioning: true,
    remodeled: true,
    outdoorSpace: "Terrace & Garden",
    securitySystem: true,
    smartHome: true,
    fence: true,
    hoaFees: 500,
    petsAllowed: true,
    walkInClosets: true,
  },
  {
    _id: "67c8bedcfabb0edd376edef6",
    agentId: "67914e6051f4fc21f83a1b88",
    title: "Downtown Studio",
    address: "55 Commerce St, Dallas, TX",
    price: 199000,
    description: "Minimalist living in a prime location.",
    images: [
      "https://res.cloudinary.com/dx2vtx5uw/image/upload/v1712439006/home8.jpg",
    ],
    bedrooms: 1,
    bathrooms: 1,
    garage: false,
    parkingSpaces: null,
    swimmingPool: false,
    fireplace: false,
    basement: false,
    finishedBasement: false,
    attic: false,
    airConditioning: true,
    remodeled: true,
    outdoorSpace: "",
    securitySystem: false,
    smartHome: false,
    fence: false,
    hoaFees: 120,
    petsAllowed: false,
    walkInClosets: false,
  },
  {
    _id: "67c8bedcfabb0edd376edef7",
    agentId: "67914e6051f4fc21f83a1b88",
    title: "Remodeled Ranch Home",
    address: "1045 Oak Valley Rd, Waco, TX",
    price: 350000,
    description: "Freshly updated ranch with big open space.",
    images: [
      "https://res.cloudinary.com/dx2vtx5uw/image/upload/v1712439007/home9.jpg",
    ],
    bedrooms: 3,
    bathrooms: 2,
    garage: true,
    parkingSpaces: 2,
    swimmingPool: false,
    fireplace: true,
    basement: false,
    finishedBasement: false,
    attic: true,
    airConditioning: true,
    remodeled: true,
    outdoorSpace: "Deck",
    securitySystem: true,
    smartHome: false,
    fence: true,
    hoaFees: null,
    petsAllowed: true,
    walkInClosets: true,
  },
  {
    _id: "67c8bedcfabb0edd376edef8",
    agentId: "67914e6051f4fc21f83a1b88",
    title: "Smart Eco-Friendly Home",
    address: "88 Green Valley Blvd, Plano, TX",
    price: 670000,
    description: "Sustainable design and solar-powered.",
    images: [
      "https://res.cloudinary.com/dx2vtx5uw/image/upload/v1712439006/home10.jpg",
    ],
    bedrooms: 3,
    bathrooms: 2,
    garage: true,
    parkingSpaces: 2,
    swimmingPool: false,
    fireplace: true,
    basement: false,
    finishedBasement: false,
    attic: true,
    airConditioning: true,
    remodeled: true,
    outdoorSpace: "Eco-garden",
    securitySystem: true,
    smartHome: true,
    fence: true,
    hoaFees: 100,
    petsAllowed: true,
    walkInClosets: true,
  },
  {
    _id: "67c8bedcfabb0edd376edef9",
    agentId: "67914e6051f4fc21f83a1b88",
    title: "Luxury Suburban Home",
    address: "245 Park Ridge Dr, Frisco, TX",
    price: 875000,
    description: "Elegant home in gated community.",
    images: [
      "https://res.cloudinary.com/dx2vtx5uw/image/upload/v1712439007/home1.jpg",
    ],
    bedrooms: 4,
    bathrooms: 3,
    garage: true,
    parkingSpaces: 2,
    swimmingPool: true,
    fireplace: true,
    basement: false,
    finishedBasement: false,
    attic: true,
    airConditioning: true,
    remodeled: false,
    outdoorSpace: "Covered patio",
    securitySystem: true,
    smartHome: false,
    fence: true,
    hoaFees: 200,
    petsAllowed: true,
    walkInClosets: true,
  },
  {
    _id: "67c8bedcfabb0edd376edefa",
    agentId: "67914e6051f4fc21f83a1b88",
    title: "Farmhouse with Land",
    address: "179 Country Rd 101, Denton, TX",
    price: 450000,
    description: "Farmhouse with 5 acres of private land.",
    images: [
      "https://res.cloudinary.com/dx2vtx5uw/image/upload/v1712439006/home6.jpg",
    ],
    bedrooms: 3,
    bathrooms: 2,
    garage: false,
    parkingSpaces: 4,
    swimmingPool: false,
    fireplace: true,
    basement: false,
    finishedBasement: false,
    attic: false,
    airConditioning: true,
    remodeled: false,
    outdoorSpace: "Pasture and barn",
    securitySystem: false,
    smartHome: false,
    fence: true,
    hoaFees: null,
    petsAllowed: true,
    walkInClosets: true,
  },
];

const PropertyService = {
  getProperties: async (): Promise<Property[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(properties), 500); // Simulate API delay
    });
  },
};

export default PropertyService;
