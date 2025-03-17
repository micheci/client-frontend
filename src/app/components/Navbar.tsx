import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-black text-2xl">Micheci Properties</div>

        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <Link href="/" className="text-black hover:text-gray-400">
            Home
          </Link>
          <Link href="/properties" className="text-black hover:text-gray-400">
            Properties
          </Link>
          <Link href="/#contactMe" className="text-black hover:text-gray-400">
            Contact Me
          </Link>
        </div>

        <button className="text-black bg-orange-500 px-4 py-2 rounded-lg hover:bg-blue-600">
          Use Client
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
