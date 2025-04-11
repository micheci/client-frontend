export interface Property {
  _id: string;
  agentId: string;
  title: string;
  address: string;
  price: number;
  description: string;
  images: string[]; // array of image URLs
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  garage: boolean;
  parkingSpaces: number | null;
  swimmingPool: boolean;
  fireplace: boolean;
  basement: boolean;
  finishedBasement: boolean;
  attic: boolean;
  airConditioning: boolean;
  remodeled: boolean;
  outdoorSpace: string;
  securitySystem: boolean;
  smartHome: boolean;
  fence: boolean;
  hoaFees: number | null;
  petsAllowed: boolean;
  walkInClosets: boolean;
}
