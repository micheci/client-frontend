"use client";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import PropertyList from "../components/PropertyList";
import { properties } from "../store/PropertyStore";
import { useHookstate } from "@hookstate/core";
import PropertyDetailModal from "../modals/PropertyDetailModal";
import { Property } from "../interfaces/Iproperties";
import FilterSection from "../components/FilterSection";
import Navbar from "../components/Navbar";

const PropertiesPage = () => {
  const propertyState = useHookstate(properties.propertiesState);
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(
    null
  );
  const [filters, setFilters] = useState({
    bedrooms: 1,
    bathrooms: 1,
    minPrice: 0,
    maxPrice: 20000,
    location: "",
  });

  useEffect(() => {
    properties.getProperties();
  }, []);

  const rawProperties = JSON.parse(
    JSON.stringify(propertyState.propertyData.get())
  );
  const filteredProperties = rawProperties.filter(
    (property: Property) =>
      property.address.toLowerCase().includes(filters.location.toLowerCase()) &&
      property.bedrooms >= filters.bedrooms &&
      property.bathrooms >= filters.bathrooms &&
      property.price >= filters.minPrice &&
      property.price <= filters.maxPrice
  );

  const handleSelectProperty = (propertyId: string) => {
    setSelectedPropertyId(propertyId);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar />
      {/* Content Area */}
      <div className="flex flex-1 lg:flex-row overflow-hidden">
        {/* Left - Map */}
        <div className="lg:w-1/2 hidden lg:block">
          <Map
            searchTerm={""}
            properties={filteredProperties}
            selectedPropertyId={selectedPropertyId}
            onPropertySelect={handleSelectProperty}
          />
        </div>

        {/* Right - Filters + Property List */}
        <div className="lg:w-1/2 flex flex-col h-full overflow-y-auto">
          <div className="p-4">
            <FilterSection filters={filters} onFilterChange={setFilters} />
          </div>
          <div className="p-4 pt-0">
            <PropertyList
              properties={filteredProperties}
              onSelectProperty={handleSelectProperty}
            />
          </div>
        </div>

        {/* Property Detail Modal */}
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
