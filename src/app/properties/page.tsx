"use client";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import PropertyList from "../components/PropertyList";
import PropertySearchBar from "../components/PropertySearchBar";
import { properties } from "../store/PropertyStore";
import { useHookstate } from "@hookstate/core";
import PropertyDetailModal from "../modals/PropertyDetailModal";
import { Property } from "../interfaces/Iproperties";

const PropertiesPage = () => {
  const propertyState = useHookstate(properties.propertiesState);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(
    null
  );
  const [filters, setFilters] = useState({ bedrooms: 1, bathrooms: 1 });

  useEffect(() => {
    properties.getProperties();
  }, []);

  // Filter properties based on the search term
  const rawProperties = JSON.parse(
    JSON.stringify(propertyState.propertyData.get())
  );
  const filteredProperties = rawProperties.filter(
    (property: Property) =>
      property.address.toLowerCase().includes(searchTerm.toLowerCase()) &&
      property.bedrooms >= filters.bedrooms &&
      property.bathrooms >= filters.bathrooms
  );
  console.log(filteredProperties, "filteredSTU");
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSelectProperty = (propertyId: string) => {
    setSelectedPropertyId(propertyId);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Search Bar (Fixed at the top) */}
      <div className="w-full p-4 bg-gray-100 shadow-md">
        <PropertySearchBar
          onSearch={handleSearch}
          onFilterChange={(bedrooms, bathrooms) =>
            setFilters({ bedrooms, bathrooms })
          }
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-1 lg:flex-row overflow-hidden">
        {/* Left - Map */}
        <div className="lg:w-1/2 hidden lg:block">
          <Map
            searchTerm={searchTerm}
            properties={filteredProperties}
            selectedPropertyId={selectedPropertyId}
            onPropertySelect={handleSelectProperty} //for the marker
          />
        </div>

        {/* Right - Properties List */}
        <div className="lg:w-1/2 flex flex-col h-full">
          <div>
            {" "}
            <h1 className="text-2xl font-bold p-4">Filters</h1>
          </div>
          <div>
            {" "}
            <h1 className="text-2xl font-bold p-4">Property Listings</h1>
            <div className="flex-1 overflow-y-auto p-4">
              <PropertyList
                properties={filteredProperties}
                onSelectProperty={handleSelectProperty}
              />
            </div>
          </div>
        </div>

        {/* Work on this adding a modal */}
        {selectedPropertyId && (
          <PropertyDetailModal
            property={
              filteredProperties.find(
                (p: Property) => p._id === selectedPropertyId
              )!
            }
            onClose={() => setSelectedPropertyId(null)}
          />
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;
