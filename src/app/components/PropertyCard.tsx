import React from "react";
import Image from "next/image";
import { Property } from "../interfaces/Iproperties";

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="border rounded-xl shadow-lg overflow-hidden">
      <Image
        src={
          "https://res.cloudinary.com/dvuqgmyxv/image/upload/v1741294302/logl2synlnphkampsf9l.jpg"
        }
        //src={property.images[0]}
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
        <p className="text-gray-600">{property.address}</p>
        <p className="text-gray-900 font-bold mt-2">${property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
