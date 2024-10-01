import React from 'react';

const PortfolioPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-brown-900 mb-8">Our Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`/henna-design-${item}.jpg`} alt={`Henna Design ${item}`} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-brown-900 mb-2">Henna Design {item}</h3>
              <p className="text-brown-700">Beautiful henna design for various occasions.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;