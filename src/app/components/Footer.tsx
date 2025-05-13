import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, City, State</p>
        </div>

        {/* Follow Us - aligned right on medium screens and above */}
        <div className="md:text-right">
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex md:justify-end gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6 pb-4">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
