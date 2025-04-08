"use client";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import PropertyList from "../components/PropertyList";
import PropertySearchBar from "../components/PropertySearchBar";
import { properties } from "../store/PropertyStore";
import { useHookstate } from "@hookstate/core";

const PropertiesPage = () => {
  const propertyState = useHookstate(properties.propertiesState);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(
    null
  );

  useEffect(() => {
    properties.getProperties();
  }, []);

  // Filter properties based on the search term
  const filteredProperties = propertyState.propertyData.value.filter(
    (property) =>
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSelectProperty = (propertyId: number) => {
    setSelectedPropertyId(propertyId);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Search Bar (Fixed at the top) */}
      <div className="w-full p-4 bg-gray-100 shadow-md">
        <PropertySearchBar onSearch={handleSearch} />
      </div>

      {/* Content Area */}
      <div className="flex flex-1 lg:flex-row overflow-hidden">
        {/* Left - Map */}
        <div className="lg:w-1/2 hidden lg:block">
          <Map
            searchTerm={searchTerm}
            properties={filteredProperties}
            selectedPropertyId={selectedPropertyId}
          />
        </div>

        {/* Right - Properties List */}
        <div className="lg:w-1/2 flex flex-col h-full">
          <h1 className="text-2xl font-bold p-4">Properties</h1>
          <div className="flex-1 overflow-y-auto p-4">
            <PropertyList
              properties={filteredProperties}
              onSelectProperty={handleSelectProperty}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
