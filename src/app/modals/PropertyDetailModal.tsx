import React from "react";
import { Property } from "../interfaces/Iproperties";

interface PropertyDetailModalProps {
  property: Property;
  onClose: () => void;
}

const PropertyDetailModal = ({
  property,
  onClose,
}: PropertyDetailModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-6 w-[80%] h-[80%] overflow-y-auto relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        {/* Placeholder for carousel */}
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-md mb-4">
          <p className="text-gray-500">[ Image Carousel Here ]</p>
        </div>

        {/* Content */}
        <div className="mt-4">
          <h2 className="text-2xl text-center font-bold mb-2 text-black">
            {property.title}
          </h2>
          <p className="text-gray-700 mb-2">{property.address}</p>
          <p className="mb-1">Bedrooms: {property.bedrooms}</p>
          <p className="mb-4">Bathrooms: {property.bathrooms}</p>

          {/* More Details... */}
          <p className="text-sm text-gray-600">
            Add more details like price, description, amenities, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailModal;
