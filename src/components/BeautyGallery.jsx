import React from 'react';
import { motion } from 'framer-motion';

const beautyImages = [
  { 
    id: 1, 
    src: 'https://images.unsplash.com/photo-1595890662665-c0bc82738710',
    alt: 'Bridal mehndi design' 
  },
  { 
    id: 2, 
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
    alt: 'Facial treatment' 
  },
  { 
    id: 3, 
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df',
    alt: 'Hair styling' 
  },
  { 
    id: 4, 
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
    alt: 'Beauty treatment' 
  }
];

const BeautyGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-brown-900 mb-12 text-center"
      >
        Our Gallery
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {beautyImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BeautyGallery;