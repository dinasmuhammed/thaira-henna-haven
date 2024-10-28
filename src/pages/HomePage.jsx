import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BeautyGallery from '../components/BeautyGallery';

const HomePage = () => {
  return (
    <div className="bg-brown-50">
      <div className="relative h-[600px] bg-gradient-to-r from-brown-900/90 to-brown-800/90">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
          alt="Beauty Salon Banner" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Thaira Beauty</h1>
            <p className="text-xl mb-8 max-w-2xl">Experience luxury beauty treatments and traditional mehndi artistry in the heart of Kannur</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brown-600 hover:bg-brown-700">
                <Link to="/booking">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-brown-900 mb-12 text-center">Our Services</h2>
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
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brown-900 mb-2">{service.title}</h3>
                <p className="text-brown-700 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-brown-600 hover:text-brown-800 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BeautyGallery />

      <div className="bg-brown-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-brown-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Expert Beauticians',
              'Premium Products',
              'Hygienic Environment',
              'Satisfied Clients'
            ].map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full p-4 inline-block mb-4">
                  <svg className="h-8 w-8 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-brown-900 mb-2">{reason}</h3>
                <p className="text-brown-700">Experience the difference with our professional services.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;