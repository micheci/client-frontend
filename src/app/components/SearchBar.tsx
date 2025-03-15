"use client";
import React, { useState } from "react";
//import { useRouter } from "next/router"; // Import Next.js Router

const SearchBar = () => {
  const [query, setQuery] = useState("");
  //const router = useRouter(); // Initialize Next.js router

  const handleSearch = () => {
    if (query) {
      // Redirect to /properties page with the query parameter
      console.log(query, "query from search");
      //router.push(`/properties?search=${query}`);
    }
  };

  return (
    <div className="absolute left-1/2 top-[85%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-3xl bg-white p-4 shadow-lg rounded-lg flex items-center">
      <input
        type="text"
        placeholder="Search by address, city, or ZIP code..."
        className="flex-grow p-2 border rounded-l-lg outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
