import React, { useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { useHookstate } from "@hookstate/core";
import { properties } from "../store/PropertyStore";
import { Property } from "../interfaces/Iproperties";

const PropertyGrid = () => {
  const state = useHookstate(properties.propertiesState);
  const featuredProps = (structuredClone(
    state.featuredPropertiesData.get({ noproxy: true })
  ) ?? []) as Property[];

  useEffect(() => {
    properties.getFeaturedProperties("john-doe");
  }, []);

  const count = featuredProps.length;

  return (
    <div className="bg-white p-6">
      <h1 className="text-center text-2xl font-bold mt-10 mb-6 text-black">
        Popular properties this month
      </h1>

      {count === 1 && (
        <div className="w-full max-w-6xl mx-auto">
          <PropertyCard property={featuredProps[0]} large />
        </div>
      )}

      {count === 2 && (
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-6xl mx-auto">
          {featuredProps.map((p) => (
            <div key={p._id} className="flex-1">
              <PropertyCard property={p} large />
            </div>
          ))}
        </div>
      )}

      {count === 3 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProps.map((p) => (
            <PropertyCard key={p._id} property={p} />
          ))}
        </div>
      )}

      {count === 4 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {featuredProps.map((p) => (
            <PropertyCard key={p._id} property={p} />
          ))}
        </div>
      )}

      {count === 5 && (
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredProps.slice(0, 3).map((p) => (
              <PropertyCard key={p._id} property={p} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredProps.slice(3).map((p) => (
              <PropertyCard key={p._id} property={p} />
            ))}
          </div>
        </div>
      )}

      {count >= 6 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {featuredProps.slice(0, 6).map((p) => (
            <PropertyCard key={p._id} property={p} small />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;
