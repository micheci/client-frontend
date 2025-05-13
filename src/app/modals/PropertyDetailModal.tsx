import React, { useRef, useEffect } from "react";
import { Property } from "../interfaces/Iproperties";
import Image from "next/image";
import RequestTourForm from "../components/RequestTourForm";

interface PropertyDetailModalProps {
  property: Property;
  onClose: () => void;
}

const PropertyDetailModal = ({
  property,
  onClose,
}: PropertyDetailModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const tourFormRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const scrollToTourForm = () => {
    tourFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const amenitiesList = [
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
  ];

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-6 w-[90%] max-w-4xl h-[90%] overflow-y-auto relative text-black scroll-smooth"
      >
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

        {/* Title & Button */}
        <div className="mb-4 flex justify-between items-center flex-wrap gap-2">
          <div>
            <h2 className="text-2xl font-bold text-black">{property.title}</h2>
            <p className="text-gray-600">{property.address}</p>
          </div>
          <button
            onClick={scrollToTourForm}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Request a Tour
          </button>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Description</h3>
          <p className="text-sm">{property.description}</p>
        </div>

        {/* Pricing & Details */}
        <h3 className="font-semibold text-lg mb-2">Pricing & Details</h3>
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

        {/* Features & Amenities */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Features & Amenities</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {amenitiesList.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">•</span>
                {item.label}: {item.value ? "Yes" : "No"}
              </li>
            ))}
          </ul>
        </div>

        {/* Location Placeholder */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Location</h3>
          <p className="text-sm text-gray-700">Coming soon...</p>
        </div>

        {/* Tour Form at Bottom */}
        <div ref={tourFormRef} className="mt-8">
          <h3 className="font-semibold text-lg mb-2">Request a Tour</h3>
          <RequestTourForm />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailModal;
