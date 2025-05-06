import React from "react";
import Image from "next/image";
import { Property } from "../interfaces/Iproperties";

const PropertyCardListing: React.FC<{ property: Property }> = ({
  property,
}) => {
  return (
    <div className="p-4">
      <div className="flex rounded-xl overflow-hidden border bg-white shadow-2xl">
        {/* Image on the left */}
        <div className="w-1/2">
          <Image
            src="https://res.cloudinary.com/dvuqgmyxv/image/upload/v1741294302/logl2synlnphkampsf9l.jpg"
            alt={property.title}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info on the right */}
        <div className="w-1/2 p-4 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-black">{property.title}</h3>
          <p className="text-gray-900 mt-2">${property.price}</p>
          <p className="text-gray-900 mt-2">
            {property.bedrooms} bedrooms | {property.bathrooms} bathrooms |{" "}
          </p>
          <p className="text-gray-900 mt-2">{property.sqft} sqft</p>
          <p className="text-gray-900 mt-2">{property.address}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardListing;
