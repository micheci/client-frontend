import React from "react";
import { Property } from "../interfaces/Iproperties";
import PropertyCardListing from "./PropertyCardListings";

interface PropertyListProps {
  properties: Property[];
  onSelectProperty: (id: string) => void;
}

const PropertyList = ({ properties, onSelectProperty }: PropertyListProps) => {
  return (
    <div className="grid grid-cols-1 gap-2 bg-gray-100">
      <h1 className="text-2xl font-bold mt-4 text-black">Property Listings</h1>{" "}
      {properties.map((property) => (
        <div
          key={property._id}
          className="col-span-1 cursor-pointer"
          onClick={() => onSelectProperty(property._id)}
        >
          <PropertyCardListing property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
