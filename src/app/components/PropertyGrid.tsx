import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const properties = [
    {
      id: 1,
      title: "Beautiful Villa in California",
      location: "California, USA",
      price: "1,200,000",
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    },
    {
      id: 2,
      title: "Cozy Apartment in New York",
      location: "New York, USA",
      price: "800,000",
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    },
    {
      id: 3,
      title: "Luxury Penthouse in Miami",
      location: "Miami, USA",
      price: "2,500,000",
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    },
    {
      id: 4,
      title: "Charming Cottage in Vermont",
      location: "Vermont, USA",
      price: "600,000",
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    },
    {
      id: 5,
      title: "Modern House in Seattle",
      location: "Seattle, USA",
      price: "950,000",
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    },
    {
      id: 6,
      title: "Spacious Townhouse in Chicago",
      location: "Chicago, USA",
      price: "750,000",
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    },
  ];
  return (
    <div className="bg-white p-6">
      {/* Centered and moved lower */}
      <h1 className="text-center text-2xl font-bold mt-10 mb-6 text-black">
        Popular properties this month
      </h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
