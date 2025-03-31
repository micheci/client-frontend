import { Property } from "../interfaces/Iproperties";

const properties = [
  {
    id: 1,
    title: "Beautiful Cozy Villa in California ",
    location: "California, USA",
    price: "1,200,000",
    image:
      "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    bedrooms: "4",
    bathrooms: "3",
    sqft: "3500",
  },
  {
    id: 2,
    title: "Cozy Apartment in New York",
    location: "New York, USA",
    price: "800,000",
    image:
      "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    bedrooms: "2",
    bathrooms: "1",
    sqft: "1200",
  },
  {
    id: 3,
    title: "Luxury Penthouse in Miami",
    location: "Miami, USA",
    price: "2,500,000",
    image:
      "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    bedrooms: "5",
    bathrooms: "4",
    sqft: "4500",
  },
  {
    id: 4,
    title: "Charming Cottage in Vermont",
    location: "Vermont, USA",
    price: "600,000",
    image:
      "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    bedrooms: "3",
    bathrooms: "2",
    sqft: "1800",
  },
  {
    id: 5,
    title: "Modern House in Seattle",
    location: "Seattle, USA",
    price: "950,000",
    image:
      "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    bedrooms: "4",
    bathrooms: "3",
    sqft: "2500",
  },
  {
    id: 6,
    title: "Spacious Townhouse in Chicago",
    location: "Chicago, USA",
    price: "750,000",
    image:
      "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    bedrooms: "3",
    bathrooms: "2",
    sqft: "2200",
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
