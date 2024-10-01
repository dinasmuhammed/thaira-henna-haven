import React from 'react';

const mehndiImages = [
  { id: 1, src: '/mehndi-1.jpg', alt: 'Intricate bridal mehndi design' },
  { id: 2, src: '/mehndi-2.jpg', alt: 'Floral mehndi pattern' },
  { id: 3, src: '/mehndi-3.jpg', alt: 'Traditional mehndi artwork' },
  // Add more image objects as needed
];

const MehndiGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-brown-900 mb-6">Mehndi Design Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mehndiImages.map((image) => (
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

export default MehndiGallery;