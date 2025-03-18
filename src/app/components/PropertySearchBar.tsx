import React, { useState } from "react";

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
    <div className="w-full p-4 bg-gray-100 shadow-md flex items-center justify-between">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by city..."
        className="w-3/4 p-2 border border-gray-300 rounded-lg"
        value={inputValue}
        onChange={handleChange}
      />

      {/* Bedrooms Button with Dropdown */}
      <div className="relative flex items-center">
        <div
          className="cursor-pointer flex items-center space-x-2"
          //onClick={handleBedroomsClick}
        >
          <span className="text-lg">🛏️</span> {/* Icon */}
          <span className="font-semibold">Bedrooms</span>
        </div>

        {/* Bedrooms Dropdown */}
        {/* {showBedroomsFilter && (
          <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-4 w-48 z-10">
            <h3 className="text-sm font-semibold mb-2">Select Bedrooms</h3>
            {[1, 2, 3, 4, 5].map((bedroomCount) => (
              <div
                key={bedroomCount}
                className="cursor-pointer py-1 hover:bg-gray-100"
                onClick={() => handleSelectBedrooms(bedroomCount)}
              >
                {bedroomCount} Bedroom{bedroomCount > 1 ? "s" : ""}
              </div>
            ))}
          </div>
        )} */}
      </div>
      {/* Search button */}
      <button
        className="ml-4 p-2 bg-blue-500 text-white rounded-lg"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default PropertySearchBar;
