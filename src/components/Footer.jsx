import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Thaira Heenas</h3>
            <p className="text-sm">Kannur's Premier Henna Shop</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-brown-300"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="hover:text-brown-300"><Instagram className="h-6 w-6" /></a>
            <a href="#" className="hover:text-brown-300"><Twitter className="h-6 w-6" /></a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; 2023 Thaira Heenas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;