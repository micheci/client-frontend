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
      <Navbar />
      <Hero />
      <div className="relative">
        <SearchBar />
      </div>
      <PropertyGrid onSelectProperty={handlePropertyClick} />
      {isModalOpen && selectedProperty && (
        <PropertyDetailModal property={selectedProperty} onClose={closeModal} />
      )}
    </>
  );
}
