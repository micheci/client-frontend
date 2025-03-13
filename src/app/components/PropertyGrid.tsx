import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const properties = [
    {
      id: 1,
      title: "Beautiful Villa in California",
      location: "California, USA",
      price: "1,200,000",
      image: "https://via.placeholder.com/300x200?text=Property+1",
    },
    {
      id: 2,
      title: "Cozy Apartment in New York",
      location: "New York, USA",
      price: "800,000",
      image: "https://via.placeholder.com/300x200?text=Property+2",
    },
    {
      id: 3,
      title: "Luxury Penthouse in Miami",
      location: "Miami, USA",
      price: "2,500,000",
      image: "https://via.placeholder.com/300x200?text=Property+3",
    },
    {
      id: 4,
      title: "Charming Cottage in Vermont",
      location: "Vermont, USA",
      price: "600,000",
      image: "https://via.placeholder.com/300x200?text=Property+4",
    },
    {
      id: 5,
      title: "Modern House in Seattle",
      location: "Seattle, USA",
      price: "950,000",
      image: "https://via.placeholder.com/300x200?text=Property+5",
    },
    {
      id: 6,
      title: "Spacious Townhouse in Chicago",
      location: "Chicago, USA",
      price: "750,000",
      image: "https://via.placeholder.com/300x200?text=Property+6",
    },
  ];
  return (
    <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
