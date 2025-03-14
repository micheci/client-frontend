import Hero from "../app/components/Hero";
import Navbar from "./components/Navbar";
import PropertyGrid from "./components/PropertyGrid";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="relative">
        <SearchBar />
      </div>
      <PropertyGrid />
    </>
  );
}
