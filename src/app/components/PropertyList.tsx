// /components/PropertyList.tsx

import React from "react";
import PropertyCard from "./PropertyCard";
import { Property } from "../interfaces/Iproperties";

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
