// pages/PropertiesPage.js
"use client";
import { useState } from "react";
import Map from "../components/Map";
import PropertyList from "../components/PropertyList";
import PropertySearchBar from "../components/PropertySearchBar";

const PropertiesPage = () => {
  const properties = [
    {
      id: 1,
      title: "Beautiful Villa in California",
      location: "California, USA",
      price: "1,200,000",
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
      bedrooms: "4",
      bathrooms: "3",
      sqft: 3500,
    },
    {
      id: 2,
      title: "Cozy Apartment in New York",
      location: "New York, USA",
      price: "800,000",
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
      bedrooms: "2",
      bathrooms: "1",
      sqft: 1200,
    },
    {
      id: 3,
      title: "Luxury Penthouse in Miami",
      location: "Miami, USA",
      price: "2,500,000",
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
      bedrooms: "5",
      bathrooms: "4",
      sqft: 4500,
    },
    {
      id: 4,
      title: "Charming Cottage in Vermont",
      location: "Vermont, USA",
      price: "600,000",
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
      bedrooms: "3",
      bathrooms: "2",
      sqft: 1800,
    },
    {
      id: 5,
      title: "Modern House in Seattle",
      location: "Seattle, USA",
      price: "950,000",
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
      bedrooms: "4",
      bathrooms: "3",
      sqft: 2500,
    },
    {
      id: 6,
      title: "Spacious Townhouse in Chicago",
      location: "Chicago, USA",
      price: "750,000",
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
      bedrooms: "3",
      bathrooms: "2",
      sqft: 2200,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter properties based on the search term
  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search term update from child component
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Search Bar */}
      <div className="w-full p-4 bg-gray-100 shadow-md">
        <PropertySearchBar onSearch={handleSearch} />
      </div>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left - Map (Visible only on large screens) */}
        <div className="lg:w-1/2 hidden lg:block">
          <Map />
        </div>

        {/* Right - Properties List */}
        <div className="lg:w-1/2 overflow-y-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Properties</h1>
          <div>
            {/* PropertyList will display properties in 2 columns on larger screens, 1 column on smaller screens */}
            <PropertyList properties={filteredProperties} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
