import React from "react";
import Image from "next/image";
import { Property } from "../interfaces/Iproperties";

interface Props {
  property: Property;
  large?: boolean;
  small?: boolean;
}

const PropertyCard: React.FC<Props> = ({
  property,
  large = false,
  small = false,
}) => {
  const heightClass = large ? "h-[400px]" : small ? "h-[200px]" : "h-[300px]";

  const imageHeight = large ? 250 : small ? 150 : 200;

  return (
    <div
      className={`border rounded-xl shadow-lg overflow-hidden ${heightClass}`}
    >
      <Image
        src={
          "https://res.cloudinary.com/dvuqgmyxv/image/upload/v1741294302/logl2synlnphkampsf9l.jpg"
          // property.images[0]
        }
        alt={property.title}
        width={600}
        height={imageHeight}
        className="w-full object-cover"
      />
      <div className={`p-4 ${large ? "bg-orange-400" : "bg-orange-500"}`}>
        <h3 className={`font-semibold ${large ? "text-xl" : "text-lg"}`}>
          {property.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {property.bedrooms} bedrooms | {property.bathrooms} bathrooms |{" "}
          {property.sqft} sqft
        </p>
        <p className="text-gray-600 text-sm">{property.address}</p>
        <p className="text-gray-900 font-bold mt-2 text-base">
          ${property.price}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
