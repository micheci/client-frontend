import React from "react";
import PropertyCard from "./PropertyCard";
import { Property } from "../interfaces/Iproperties";

interface PropertyListProps {
  properties: Property[];
  onSelectProperty: (id: number | string) => void;
}

const PropertyList = ({ properties, onSelectProperty }: PropertyListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {properties.map((property) => (
        <div
          key={property._id}
          className="col-span-1 cursor-pointer"
          onClick={() => onSelectProperty(property._id)}
        >
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
