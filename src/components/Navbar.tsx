import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-medium text-rawDark">
            RAW MATERIALS
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-rawDark hover:text-black transition-colors">
              Shop
            </Link>
            <Link to="/" className="text-rawDark hover:text-black transition-colors">
              About
            </Link>
            <Link to="/" className="text-rawDark hover:text-black transition-colors">
              Contact
            </Link>
          </div>
          <button className="md:hidden text-rawDark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;