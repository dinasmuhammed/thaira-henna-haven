import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-brown-900 mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-brown-800 mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p className="flex items-center text-brown-700">
              <MapPin className="mr-2 h-5 w-5 text-brown-500" />
              123 Henna Street, Kannur, Kerala, India
            </p>
            <p className="flex items-center text-brown-700">
              <Phone className="mr-2 h-5 w-5 text-brown-500" />
              +91 1234567890
            </p>
            <p className="flex items-center text-brown-700">
              <Mail className="mr-2 h-5 w-5 text-brown-500" />
              info@thairaheenas.com
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-brown-800 mt-8 mb-4">Google Reviews</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            {/* Placeholder for Google Reviews */}
            <p className="text-brown-700">Google Reviews will be displayed here. You'll need to integrate the Google Places API to show actual reviews.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-brown-800 mb-4">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62403.64784372618!2d75.34657409477837!3d11.874623745286326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba422b9b2aca753%3A0x380605a11ce24f6c!2sKannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1647887573921!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;