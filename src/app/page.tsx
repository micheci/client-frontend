import Hero from "../app/components/Hero";
import Navbar from "./components/Navbar";
import PropertyGrid from "./components/PropertyGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PropertyGrid />
    </>
  );
}
