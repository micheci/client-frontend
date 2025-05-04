import React from "react";
import Image from "next/image";
import { Property } from "../interfaces/Iproperties";

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="p-4">
      <div className="rounded-xl overflow-hidden border bg-white shadow-2xl">
        {/* Image wrapper with padding */}
        <div className="p-4">
          <Image
            src="https://res.cloudinary.com/dvuqgmyxv/image/upload/v1741294302/logl2synlnphkampsf9l.jpg"
            alt={property.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <div className="px-4 pb-4">
          <h3 className="text-lg font-semibold text-black">{property.title}</h3>
          <p className="text-gray-900  mt-2">${property.price}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
