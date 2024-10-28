import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Hair Styling',
    description: 'Expert cuts, coloring, and styling services by our professional team.',
    price: 'Starting from $50',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df',
    features: ['Haircuts', 'Coloring', 'Styling', 'Hair Treatments']
  },
  {
    title: 'Makeup Services',
    description: 'Professional makeup application for any occasion.',
    price: 'Starting from $75',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
    features: ['Bridal Makeup', 'Party Makeup', 'Natural Look', 'Special Effects']
  },
  {
    title: 'Spa Treatments',
    description: 'Relaxing and rejuvenating spa experiences.',
    price: 'Starting from $90',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
    features: ['Massages', 'Facials', 'Body Wraps', 'Aromatherapy']
  },
  {
    title: 'Nail Care',
    description: 'Complete nail care services for hands and feet.',
    price: 'Starting from $30',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b',
    features: ['Manicure', 'Pedicure', 'Nail Art', 'Gel Polish']
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium beauty services designed to enhance your natural beauty
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Sparkles className="h-4 w-4 text-purple-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-purple-600">{service.price}</span>
                  <Button asChild>
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;