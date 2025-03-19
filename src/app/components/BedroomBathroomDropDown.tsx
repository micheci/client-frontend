import { useState } from "react";

interface BedroomsBathroomsDropdownProps {
  onSelect: (bedrooms: number, bathrooms: number) => void;
}

const BedroomsBathroomsDropdown = ({
  onSelect,
}: BedroomsBathroomsDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedBedrooms, setSelectedBedrooms] = useState<number>(1); // Default to 1 bedroom
  const [selectedBathrooms, setSelectedBathrooms] = useState<number>(1); // Default to 1 bathroom

  const handleSelect = (bedrooms: number, bathrooms: number) => {
    setSelectedBedrooms(bedrooms);
    setSelectedBathrooms(bathrooms);
    onSelect(bedrooms, bathrooms);
    setShowDropdown(false); // Close dropdown after selection
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="bg-orange-500 flex items-center space-x-2 border-2 border-orange-500 px-3 py-2 rounded-lg hover:bg-orange-100 focus:ring-2 focus:ring-orange-300 text-black"
      >
        <span className="text-lg">▼</span>
        <span className="font-semibold">
          {selectedBedrooms} Bed, {selectedBathrooms} Bath
        </span>
      </button>

      {showDropdown && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-4 w-48 z-10">
          <h3 className="text-sm font-semibold mb-2">Select Bedrooms</h3>
          {[1, 2, 3, 4, 5].map((bedroomCount) => (
            <div
              key={bedroomCount}
              className={`cursor-pointer py-1 hover:bg-gray-100 ${
                selectedBedrooms === bedroomCount
                  ? "font-bold text-orange-500"
                  : ""
              }`}
              onClick={() => handleSelect(bedroomCount, selectedBathrooms)}
            >
              {bedroomCount} Bedroom{bedroomCount > 1 ? "s" : ""}
            </div>
          ))}

          <h3 className="text-sm font-semibold mb-2 mt-2">Select Bathrooms</h3>
          {[1, 2, 3, 4, 5].map((bathroomCount) => (
            <div
              key={bathroomCount}
              className={`cursor-pointer py-1 hover:bg-gray-100 ${
                selectedBathrooms === bathroomCount
                  ? "font-bold text-orange-500"
                  : ""
              }`}
              onClick={() => handleSelect(selectedBedrooms, bathroomCount)}
            >
              {bathroomCount} Bathroom{bathroomCount > 1 ? "s" : ""}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BedroomsBathroomsDropdown;
