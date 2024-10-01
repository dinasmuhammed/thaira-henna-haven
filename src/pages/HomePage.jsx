import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brown-900 mb-4">Welcome to Thaira Heenas</h1>
          <p className="text-xl text-brown-700 mb-8">Kannur's Premier Henna Shop</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/booking" className="bg-brown-600 text-white px-6 py-3 rounded-md hover:bg-brown-700 transition duration-300">
              Book Now
            </Link>
            <Link to="/portfolio" className="bg-brown-100 text-brown-900 px-6 py-3 rounded-md hover:bg-brown-200 transition duration-300">
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-brown-900 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Bridal Mehndi', 'Festival Designs', 'Custom Henna Art'].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-brown-900 mb-2">{service}</h3>
                <p className="text-brown-700 mb-4">Experience the beauty of traditional and modern henna designs.</p>
                <Link to="/services" className="text-brown-600 hover:text-brown-800 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-brown-900 mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Expert Artists', 'Custom Designs', 'Quality Products', 'Satisfied Customers'].map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-brown-100 rounded-full p-4 inline-block mb-4">
                  <svg className="h-8 w-8 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-brown-900 mb-2">{reason}</h3>
                <p className="text-brown-700">We take pride in delivering exceptional henna experiences.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;