"use client";

import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Property } from "../interfaces/Iproperties";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194,
};

interface MapProps {
  searchTerm: string;
  properties: Property[];
  selectedPropertyId: number | null;
  onPropertySelect: (propertyId: number) => void;
}

const Map = ({
  searchTerm,
  properties,
  selectedPropertyId,
  onPropertySelect,
}: MapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [markers, setMarkers] = useState<
    { id: number; position: google.maps.LatLngLiteral; title: string }[]
  >([]);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const handleOnLoad = (mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  };

  // Center the map when a property is selected
  useEffect(() => {
    if (selectedPropertyId && map) {
      const marker = markers.find((m) => m.id === selectedPropertyId);
      if (marker) {
        map.panTo(marker.position);
        map.setZoom(15); // Optional: zoom in on selected property
      }
    }
  }, [selectedPropertyId, map, markers]);

  // Center the map when the user searches
  useEffect(() => {
    if (searchTerm && isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: searchTerm }, (results, status) => {
        if (status === "OK" && results && results.length > 0) {
          const location = results[0].geometry.location;
          setMapCenter({ lat: location.lat(), lng: location.lng() });
        } else {
          console.error("Geocode failed:", status);
        }
      });
    }
  }, [searchTerm, isLoaded]);

  // Convert all property locations to markers
  useEffect(() => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      const newMarkers: {
        id: number;
        position: google.maps.LatLngLiteral;
        title: string;
      }[] = [];

      properties.forEach((property) => {
        geocoder.geocode({ address: property.address }, (results, status) => {
          if (status === "OK" && results && results.length > 0) {
            const location = results[0].geometry.location;
            newMarkers.push({
              id: parseInt(property._id),
              position: {
                lat: location.lat(),
                lng: location.lng(),
              },
              title: property.title,
            });

            if (newMarkers.length === properties.length) {
              setMarkers(newMarkers);
            }
          } else {
            console.error(`Geocode failed for ${property.title}: ${status}`);
          }
        });
      });
    }
  }, [properties, isLoaded]);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={12}
      onLoad={handleOnLoad}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          title={marker.title}
          onClick={() => onPropertySelect(marker.id)}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
