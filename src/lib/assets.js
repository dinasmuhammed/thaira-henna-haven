// Image collections for different sections
export const heroImages = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035',
  'https://images.unsplash.com/photo-1487412912498-0447578fcca8',
  'https://images.unsplash.com/photo-1595890662665-c0bc82738710'
];

export const serviceImages = {
  hairStyling: 'https://images.unsplash.com/photo-1562322140-8baeececf3df',
  makeup: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
  spa: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
  nailCare: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b',
  mehndi: 'https://images.unsplash.com/photo-1595890662665-c0bc82738710',
  facial: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881'
};

export const testimonialImages = [
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
];

// Service data with automatic image assignment
export const servicesData = [
  {
    title: 'Hair Styling',
    description: 'Expert cuts, coloring, and styling services by our professional team.',
    price: 'Starting from $50',
    image: serviceImages.hairStyling,
    features: ['Haircuts', 'Coloring', 'Styling', 'Hair Treatments']
  },
  {
    title: 'Makeup Services',
    description: 'Professional makeup application for any occasion.',
    price: 'Starting from $75',
    image: serviceImages.makeup,
    features: ['Bridal Makeup', 'Party Makeup', 'Natural Look', 'Special Effects']
  },
  {
    title: 'Spa Treatments',
    description: 'Relaxing and rejuvenating spa experiences.',
    price: 'Starting from $90',
    image: serviceImages.spa,
    features: ['Massages', 'Facials', 'Body Wraps', 'Aromatherapy']
  },
  {
    title: 'Nail Care',
    description: 'Complete nail care services for hands and feet.',
    price: 'Starting from $30',
    image: serviceImages.nailCare,
    features: ['Manicure', 'Pedicure', 'Nail Art', 'Gel Polish']
  }
];

// Testimonial data with automatic image assignment
export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Regular Client",
    content: "The best salon experience I've ever had. The staff is professional and the results are amazing!",
    image: testimonialImages[0]
  },
  {
    name: "Emily Davis",
    role: "Bride",
    content: "They made my wedding day perfect! The attention to detail was exceptional.",
    image: testimonialImages[1]
  },
  {
    name: "Michelle Lee",
    role: "Model",
    content: "Professional service with stunning results. Highly recommended!",
    image: testimonialImages[2]
  }
];