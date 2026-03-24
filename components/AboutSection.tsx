import React from 'react';
import { FEATURES } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-purple mb-6">
            Building The Future Together
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Zanzibaba Building Materials Supplier provides high-quality construction materials across Zanzibar. 
            We supply contractors, developers, hardware shops, and individual home builders. 
            We guarantee quality, fair pricing, and fast delivery to your site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="bg-brand-light p-8 rounded-xl text-center hover:-translate-y-1 transition-transform duration-300 border-b-4 border-brand-yellow hover:border-brand-purple group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-purple/10 text-brand-purple mb-6 group-hover:bg-brand-purple group-hover:text-brand-yellow transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;