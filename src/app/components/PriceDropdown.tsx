import React, { useState } from "react";

const PriceDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  const applyPriceFilter = () => {
    console.log("Selected price range:", { minPrice, maxPrice });
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="bg-orange-500 flex items-center space-x-2 border-2 border-orange-500 px-3 py-2 rounded-lg hover:bg-orange-100 focus:ring-2 focus:ring-orange-300 text-black"
      >
        <span className="text-lg">▼</span>
        <span className="font-semibold">Price</span>
      </button>

      {showDropdown && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-4 w-48 z-10">
          <h3>Select Price</h3>

          {/* Min Price Input */}
          <div className="flex items-center space-x-2 mb-2">
            <label className="text-gray-700">Min:</label>
            <input
              type="number"
              className="w-full border rounded px-2 py-1"
              placeholder="Min Price"
              value={minPrice}
              onChange={handleMinChange}
              min="0"
            />
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <label className="text-gray-700">Max:</label>
            <input
              type="number"
              className="w-full border rounded px-2 py-1"
              placeholder="Max Price"
              value={maxPrice}
              onChange={handleMaxChange}
              min="0"
            />
          </div>

          {/* Apply Button */}
          <button
            onClick={applyPriceFilter}
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default PriceDropdown;
