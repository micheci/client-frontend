import React from "react";
import { Property } from "../interfaces/Iproperties";
import Image from "next/image";

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
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-6 w-[90%] max-w-4xl h-[90%] overflow-y-auto relative text-black">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black text-xl hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Image Carousel */}
        <div className="overflow-x-auto whitespace-nowrap space-x-2 mb-4 flex">
          {property.images.map((url, index) => (
            <div
              key={index}
              className="relative inline-block h-48 w-72 min-w-[18rem] rounded-lg overflow-hidden"
            >
              <Image
                src={url}
                alt={`Property image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Title & Address */}
        <div className="mb-4 flex justify-between items-center flex-wrap gap-2">
          <div>
            <h2 className="text-2xl font-bold text-black">{property.title}</h2>
            <p className="text-gray-600">{property.address}</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-300 text-white px-4 py-2 rounded-lg transition cursor-pointer">
            Request Tour
          </button>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Description</h3>
          <p className="text-sm">{property.description}</p>
        </div>

        {/* Core Info */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 text-sm">
          <p>
            <strong>Price:</strong> ${property.price}
          </p>
          <p>
            <strong>Bedrooms:</strong> {property.bedrooms}
          </p>
          <p>
            <strong>Bathrooms:</strong> {property.bathrooms}
          </p>
          <p>
            <strong>Parking Spaces:</strong> {property.parkingSpaces ?? "N/A"}
          </p>
          <p>
            <strong>HOA Fees:</strong> {property.hoaFees ?? "N/A"}
          </p>
          <p>
            <strong>Outdoor Space:</strong> {property.outdoorSpace || "N/A"}
          </p>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Features & Amenities</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {[
              { label: "Air Conditioning", value: property.airConditioning },
              { label: "Attic", value: property.attic },
              { label: "Basement", value: property.basement },
              { label: "Finished Basement", value: property.finishedBasement },
              { label: "Fireplace", value: property.fireplace },
              { label: "Garage", value: property.garage },
              { label: "Pets Allowed", value: property.petsAllowed },
              { label: "Remodeled", value: property.remodeled },
              { label: "Security System", value: property.securitySystem },
              { label: "Smart Home", value: property.smartHome },
              { label: "Swimming Pool", value: property.swimmingPool },
              { label: "Walk-In Closets", value: property.walkInClosets },
              { label: "Fence", value: property.fence },
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">•</span>
                {item.label}: {item.value ? "Yes" : "No"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailModal;
