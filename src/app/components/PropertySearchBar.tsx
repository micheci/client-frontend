import React, { useState } from "react";
import BedroomsBathroomsDropdown from "./BedroomBathroomDropDown";

// Define the type for the props
interface PropertySearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const PropertySearchBar: React.FC<PropertySearchBarProps> = ({ onSearch }) => {
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
        onSelect={(bedrooms, bathrooms) =>
          console.log(`Selected ${bedrooms} bedrooms, ${bathrooms} bathrooms`)
        }
      />

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
