"use client";
import { useState } from "react";
import Hero from "../app/components/Hero";
import Navbar from "./components/Navbar";
import PropertyGrid from "./components/PropertyGrid";
import SearchBar from "./components/SearchBar";
import PropertyDetailModal from "./modals/PropertyDetailModal";
import { Property } from "./interfaces/Iproperties";

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <>
      <div className="bg-white min-h-screen">
        <Navbar />

        {/* Padded section only for Hero and SearchBar */}
        <div className="px-4 sm:px-8 lg:px-12 py-6 bg-gray-700 shadow-md rounded-xl max-w-7xl mx-auto my-4">
          <Hero />
          <div className="relative mt-4">
            <SearchBar />
          </div>
        </div>

        {/* Full-width section below */}
        <PropertyGrid onSelectProperty={handlePropertyClick} />

        {isModalOpen && selectedProperty && (
          <PropertyDetailModal
            property={selectedProperty}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
}
