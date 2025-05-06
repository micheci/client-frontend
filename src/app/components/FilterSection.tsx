import React from "react";

interface FilterProps {
  filters: {
    bedrooms: number;
    bathrooms: number;
    minPrice: number;
    maxPrice: number;
    location: string;
  };
  onFilterChange: (filters: FilterProps["filters"]) => void;
}

const FilterSection: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="p-4 bg-gray-100 shadow-md space-y-4">
      <h2 className="text-lg font-semibold">Filters</h2>

      {/* Location Input */}
      <div>
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          value={filters.location}
          onChange={(e) =>
            onFilterChange({ ...filters, location: e.target.value })
          }
          className="mt-1 p-2 border w-full"
          placeholder="Enter a city or ZIP"
        />
      </div>

      {/* Bedrooms and Bathrooms */}
      <div className="flex space-x-4">
        <div>
          <label>Bedrooms</label>
          <input
            type="number"
            min={0}
            value={filters.bedrooms}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                bedrooms: parseInt(e.target.value),
              })
            }
            className="ml-2 border p-1 w-20"
          />
        </div>
        <div>
          <label>Bathrooms</label>
          <input
            type="number"
            min={0}
            value={filters.bathrooms}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                bathrooms: parseInt(e.target.value),
              })
            }
            className="ml-2 border p-1 w-20"
          />
        </div>
      </div>

      {/* Price Range Slider */}
      <div>
        <label className="block text-sm font-medium mb-1">Price Range</label>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min={0}
            max={20000}
            step={500}
            value={filters.minPrice}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                minPrice: parseInt(e.target.value),
              })
            }
          />
          <span className="text-sm">${filters.minPrice}</span>

          <input
            type="range"
            min={0}
            max={20000}
            step={500}
            value={filters.maxPrice}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                maxPrice: parseInt(e.target.value),
              })
            }
          />
          <span className="text-sm">${filters.maxPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
