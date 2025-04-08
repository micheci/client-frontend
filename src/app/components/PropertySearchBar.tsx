import React, { useState } from "react";
import BedroomsBathroomsDropdown from "./BedroomBathroomDropDown";
import PriceDropdown from "./PriceDropdown";

// Define the type for the props
interface PropertySearchBarProps {
  onSearch: (searchTerm: string) => void;
  onFilterChange: (bedrooms: number, bathrooms: number) => void;
}

const PropertySearchBar: React.FC<PropertySearchBarProps> = ({
  onSearch,
  onFilterChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue); // Pass the value back to the parent component
  };

  return (
    <div className="w-full p-4 bg-gray-100 shadow-md flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by city..."
        className="w-full sm:w-3/4 p-2 border border-gray-300 rounded-lg"
        value={inputValue}
        onChange={handleChange}
      />

      {/* Bedrooms Dropdown */}
      <BedroomsBathroomsDropdown
        onSelect={(bedrooms, bathrooms) => {
          onFilterChange(bedrooms, bathrooms); // <-- send to parent
        }}
      />

      <PriceDropdown />

      {/* Search button */}
      <button
        className="w-full sm:w-auto p-2 bg-blue-500 text-white rounded-lg"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default PropertySearchBar;
