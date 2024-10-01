import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Thaira Heenas</h3>
            <p className="text-sm">Kannur's Premier Henna Shop</p>
            <p className="text-sm mt-2">Bringing beauty and tradition to your special moments.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-brown-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-brown-300">About</Link></li>
              <li><Link to="/services" className="hover:text-brown-300">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-brown-300">Portfolio</Link></li>
              <li><Link to="/booking" className="hover:text-brown-300">Booking</Link></li>
              <li><Link to="/contact" className="hover:text-brown-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brown-300"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-brown-300"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-brown-300"><Twitter className="h-6 w-6" /></a>
            </div>
            <p className="mt-4 text-sm">123 Henna Street, Kannur, Kerala, India</p>
            <p className="text-sm">Phone: +91 1234567890</p>
            <p className="text-sm">Email: info@thairaheenas.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-brown-700 pt-8 text-center text-sm">
          <p>&copy; 2023 Thaira Heenas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;