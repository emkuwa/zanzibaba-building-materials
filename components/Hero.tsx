

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToCatalog = (e: React.MouseEvent) => {
    e.preventDefault();
    const catalog = document.getElementById('catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-brand-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1950&q=80"
          alt="Construction Site"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/90 to-brand-purple/40 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Reliable Building Materials Supplier in <span className="text-brand-yellow">Zanzibar</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 mb-10 leading-relaxed">
            Quality materials. Transparent pricing. Fast delivery. 
            We supply everything from cement to steel for your construction needs across the islands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#catalog"
              onClick={scrollToCatalog}
              className="flex items-center justify-center bg-brand-yellow text-brand-purple px-8 py-4 rounded-md font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              View Product Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a 
              href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-brand-purple transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;