import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-brown-900 mb-8">About Thaira Heenas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/about-image.jpg" alt="Thaira Heenas Artist" className="rounded-lg shadow-md w-full h-auto" />
        </div>
        <div>
          <p className="text-brown-700 mb-4">
            Thaira Heenas is Kannur's premier henna shop, dedicated to bringing beauty and tradition to your special moments. With years of experience and a passion for the art of henna, we create stunning designs that reflect your personality and style.
          </p>
          <p className="text-brown-700 mb-4">
            Our team of skilled artists specializes in a wide range of henna styles, from traditional to contemporary designs. We use only the highest quality, natural henna products to ensure the best results and safety for our clients.
          </p>
          <p className="text-brown-700">
            Whether you're preparing for a wedding, celebrating a special occasion, or simply want to adorn yourself with beautiful henna art, Thaira Heenas is here to make your experience memorable and magical.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;