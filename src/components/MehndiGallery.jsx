import React from 'react';

const mehndiImages = [
  { id: 1, src: 'https://media-api.xogrp.com/images/e7c0e0a2-6f5e-4d1e-9f3e-b4c1a7d7b5b6~rs_768.h', alt: 'Intricate bridal mehndi design' },
  { id: 2, src: 'https://media-api.xogrp.com/images/83ea0a7c-9bf4-4a2d-9373-73f6dae7f6b3~rs_768.h', alt: 'Colorful mehndi party setup' },
  { id: 3, src: 'https://media-api.xogrp.com/images/0398b0f2-e23b-4631-a107-21e1656b3aec~rs_768.h', alt: 'Mehndi artist applying henna' },
  { id: 4, src: 'https://media-api.xogrp.com/images/4a0631c3-8a86-4a9b-94e2-0337f61d3f7f~rs_768.h', alt: 'Detailed mehndi design on hands' }
];

const MehndiGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-brown-900 mb-6">Mehndi Design Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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