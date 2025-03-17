import React from "react";
import Image from "next/image";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  bedrooms: string;
  bathrooms: string;
  sqft: string;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="border rounded-xl shadow-lg overflow-hidden">
      <Image
        src={property.image}
        alt={property.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 bg-orange-500">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-600">
          {property.bedrooms} bedrooms| {property.bathrooms} bathrooms |{" "}
          {property.sqft} sqft
        </p>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-gray-900 font-bold mt-2">${property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
