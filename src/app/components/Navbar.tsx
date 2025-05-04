import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-lg mb-2">
      <div className="flex items-center justify-between">
        {/* Title on the left */}
        <div className="text-black text-2xl font-semibold">RealEstate Hub</div>

        {/* Menu items on the right */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-black hover:text-gray-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/properties"
            className="text-black hover:text-gray-500 transition-colors"
          >
            Properties
          </Link>
          <Link
            href="/#contactMe"
            className="text-black hover:text-gray-500 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
