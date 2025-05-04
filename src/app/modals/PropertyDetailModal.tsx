import React, { useEffect, useRef, useState } from "react";
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
  const sections = [
    { label: "Pricing", id: "pricing" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
    { label: "Amenities", id: "amenities" },
    { label: "Fees & Supplies", id: "fees" },
    { label: "Location", id: "location" },
  ];

  const imageRef = useRef<HTMLDivElement | null>(null);
  const [showStickyMenu, setShowStickyMenu] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyMenu(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-60px" }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

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
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-6 w-[90%] max-w-4xl h-[90%] overflow-y-auto relative text-black scroll-smooth">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black text-xl hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Sticky Shortcut Menu */}
        <div
          className={`z-10 bg-white/80 backdrop-blur-sm mb-4 p-2 rounded shadow flex flex-wrap gap-2 justify-center sticky top-0 ${
            !showStickyMenu ? "mt-2" : ""
          }`}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              {section.label}
            </a>
          ))}
        </div>

        {/* Image Carousel */}
        <div
          ref={imageRef}
          className="overflow-x-auto whitespace-nowrap space-x-2 mb-4 flex"
        >
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
        <div
          id="contact"
          className="mb-4 flex justify-between items-center flex-wrap gap-2"
        >
          <div>
            <h2 className="text-2xl font-bold text-black">{property.title}</h2>
            <p className="text-gray-600">{property.address}</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-300 text-white px-4 py-2 rounded-lg transition cursor-pointer">
            Request Tour
          </button>
        </div>

        {/* Description */}
        <div id="about" className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Description</h3>
          <p className="text-sm">{property.description}</p>
        </div>

        {/* Core Info */}
        <h3 id="pricing" className="font-semibold text-lg mb-2">
          Pricing & Details
        </h3>

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
        <div id="amenities" className="mb-4">
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

        <div id="location" className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Location</h3>
          <p className="text-sm text-gray-700">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailModal;
