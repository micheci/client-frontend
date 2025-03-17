import Map from "../components/Map";
import PropertyList from "../components/PropertyList";

const PropertiesPage = async () => {
  // Fetch the properties data from an API (replace this with your actual API endpoint)
  // const res = await fetch("https://api.example.com/properties");
  // const properties = await res.json();

  const properties = [
    {
      id: 1,
      title: "Beautiful Villa in California",
      location: "5723 Leigh Ave, Amarillo, TX 79110",
      price: "1,200,000",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3500,
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    },
    {
      id: 2,
      title: "Cozy Apartment in New York",
      location: "5723 Leigh Ave, Amarillo, TX 79110",
      price: "800,000",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1200,
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    },
    {
      id: 3,
      title: "Luxury Penthouse in Miami",
      location: "5723 Leigh Ave, Amarillo, TX 79110",
      price: "2,500,000",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 5000,
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    },
    {
      id: 4,
      title: "Charming Cottage in Vermont",
      location: "5723 Leigh Ave, Amarillo, TX 79110",
      price: "600,000",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    },
    {
      id: 5,
      title: "Modern House in Seattle",
      location: "5723 Leigh Ave, Amarillo, TX 79110",
      price: "950,000",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    },
    {
      id: 6,
      title: "Spacious Townhouse in Chicago",
      location: "5723 Leigh Ave, Amarillo, TX 79110",
      price: "750,000",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2200,
      image:
        "https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-bungalow-chimney-1569003.jpg&fm=jpg",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left - Map (Visible only on large screens) */}
      <div className="lg:w-1/2 hidden lg:block">
        <Map />
      </div>

      {/* Right - Properties List */}
      <div className="lg:w-1/2 overflow-y-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Properties</h1>

        {/* PropertyList will display properties in 2 columns on larger screens, 1 column on smaller screens */}
        <PropertyList properties={properties} />
      </div>
    </div>
  );
};

export default PropertiesPage;
