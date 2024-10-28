import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      title: 'Bridal Mehndi',
      description: 'Intricate and personalized bridal henna designs for your special day. Our expert artists create stunning traditional and modern patterns.',
      price: 'Starting from ₹5000',
      image: 'https://images.unsplash.com/photo-1595890662665-c0bc82738710'
    },
    {
      title: 'Facial Treatments',
      description: 'Rejuvenating facials using premium products to give your skin the care it deserves. Includes deep cleansing, massage, and masks.',
      price: 'Starting from ₹1500',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881'
    },
    {
      title: 'Hair Styling',
      description: 'Professional haircuts, coloring, and styling services by experienced stylists. Transform your look with our expert hair care.',
      price: 'Starting from ₹800',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df'
    },
    {
      title: 'Threading & Waxing',
      description: 'Professional hair removal services using gentle techniques and quality products for smooth, beautiful skin.',
      price: 'Starting from ₹100',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-brown-900 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-brown-900 mb-2">{service.title}</h2>
              <p className="text-brown-700 mb-4">{service.description}</p>
              <p className="text-lg font-semibold text-brown-600 mb-4">{service.price}</p>
              <Button asChild className="w-full bg-brown-600 hover:bg-brown-700">
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;