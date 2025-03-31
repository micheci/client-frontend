// pages/PropertiesPage.js
"use client";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import PropertyList from "../components/PropertyList";
import PropertySearchBar from "../components/PropertySearchBar";
import { properties } from "../store/PropertyStore";
import { useHookstate } from "@hookstate/core";

const PropertiesPage = () => {
  const propertyState = useHookstate(properties.propertiesState);
  console.log(propertyState.propertyData, "stateINPAGE");

  useEffect(() => {
    properties.getProperties();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  // Filter properties based on the search term
  const filteredProperties = propertyState.propertyData.value.filter(
    (property) =>
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search term update from child component
  const handleSearch = (term: string) => {
    console.log(term, "fromchild to parent page.tsx");
    setSearchTerm(term);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Search Bar (Fixed at the top) */}
      <div className="w-full p-4 bg-gray-100 shadow-md">
        <PropertySearchBar onSearch={handleSearch} />
      </div>

      {/* Content Area */}
      <div className="flex flex-1 lg:flex-row overflow-hidden">
        {/* Left - Map (Takes full height, but doesn't scroll) */}
        <div className="lg:w-1/2 hidden lg:block">
          <Map />
        </div>

        {/* Right - Properties List (Takes full height, only this part scrolls) */}
        <div className="lg:w-1/2 flex flex-col h-full">
          <h1 className="text-2xl font-bold p-4">Properties</h1>

          {/* This is the scrollable container */}
          <div className="flex-1 overflow-y-auto p-4">
            <PropertyList properties={filteredProperties} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
