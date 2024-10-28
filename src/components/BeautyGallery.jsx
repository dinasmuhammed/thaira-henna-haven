import React from 'react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-brown-900 mb-8 text-center">Our Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {beautyImages.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyGallery;