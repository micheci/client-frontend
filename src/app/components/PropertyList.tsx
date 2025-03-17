// /components/PropertyList.tsx

import React from "react";
import PropertyCard from "./PropertyCard";

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

const PropertyList = ({ properties }: { properties: Property[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {properties.map((property) => (
        <div key={property.id} className="col-span-1">
          {" "}
          {/* Ensures each card takes up one column slot */}
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
