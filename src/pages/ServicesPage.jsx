import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Bridal Henna',
      description: 'Intricate and beautiful designs for your special day.',
      image: 'https://via.placeholder.com/400x300?text=Bridal+Henna'
    },
    {
      title: 'Party Henna',
      description: 'Fun and stylish designs for celebrations and events.',
      image: 'https://via.placeholder.com/400x300?text=Party+Henna'
    },
    {
      title: 'Festival Henna',
      description: 'Traditional and contemporary designs for festive occasions.',
      image: 'https://via.placeholder.com/400x300?text=Festival+Henna'
    },
    {
      title: 'Custom Designs',
      description: 'Personalized henna art tailored to your preferences.',
      image: 'https://via.placeholder.com/400x300?text=Custom+Henna'
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
              <p className="text-brown-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;