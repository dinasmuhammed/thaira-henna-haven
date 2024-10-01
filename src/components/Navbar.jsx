import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-brown-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.png" alt="Thaira Heenas" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-brown-900 hover:bg-brown-200 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="text-brown-900 hover:bg-brown-200 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/services" className="text-brown-900 hover:bg-brown-200 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/portfolio" className="text-brown-900 hover:bg-brown-200 px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
              <Link to="/booking" className="text-brown-900 hover:bg-brown-200 px-3 py-2 rounded-md text-sm font-medium">Booking</Link>
              <Link to="/contact" className="text-brown-900 hover:bg-brown-200 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-brown-900 hover:bg-brown-200 p-2 rounded-md">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;