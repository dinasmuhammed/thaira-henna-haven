import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BeautyGallery from '../components/BeautyGallery';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-brown-50 to-white">
      <div className="relative h-[600px] bg-gradient-to-r from-brown-900/95 to-brown-800/95 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
          alt="Beauty Salon Banner" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to Thaira Beauty</h1>
            <p className="text-xl mb-8 max-w-2xl text-white/90">Experience luxury beauty treatments and traditional mehndi artistry in the heart of Kannur</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brown-600 hover:bg-brown-700 shadow-lg transition-all duration-300 hover:shadow-xl">
                <Link to="/booking">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-brown-900 mb-12 text-center"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Bridal Mehndi',
              description: 'Intricate and personalized bridal henna designs for your special day',
              image: 'https://images.unsplash.com/photo-1595890662665-c0bc82738710?q=80&w=1974&auto=format&fit=crop'
            },
            {
              title: 'Beauty Treatments',
              description: 'Luxurious facials, threading, and beauty services',
              image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1974&auto=format&fit=crop'
            },
            {
              title: 'Hair Styling',
              description: 'Professional haircuts, coloring, and styling services',
              image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1974&auto=format&fit=crop'
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brown-900 mb-2">{service.title}</h3>
                <p className="text-brown-700 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-brown-600 hover:text-brown-800 flex items-center group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BeautyGallery />

      <div className="bg-gradient-to-b from-brown-100/50 to-brown-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-brown-900 mb-12 text-center"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Expert Beauticians',
              'Premium Products',
              'Hygienic Environment',
              'Satisfied Clients'
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/80 backdrop-blur rounded-full p-4 inline-block mb-4 shadow-lg">
                  <svg className="h-8 w-8 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-brown-900 mb-2">{reason}</h3>
                <p className="text-brown-700">Experience the difference with our professional services.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;