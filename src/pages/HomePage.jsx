import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, Clock, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-800/90"
        />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
          alt="Luxury Salon"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center text-white"
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                Elevate Your Beauty
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-2xl mx-auto">
                Experience luxury beauty treatments and traditional artistry in our premium salon
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-100 shadow-lg">
                  <Link to="/booking">Book Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/20">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Sparkles className="h-8 w-8" />, title: "Premium Service" },
              { icon: <Star className="h-8 w-8" />, title: "Expert Stylists" },
              { icon: <Clock className="h-8 w-8" />, title: "Flexible Hours" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">Experience the difference with our professional services.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <ServiceCard />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform?</h2>
            <p className="text-xl mb-8 text-purple-100">Book your appointment today and experience luxury</p>
            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-100">
              <Link to="/booking">Book Appointment</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;