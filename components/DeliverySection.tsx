
import React from 'react';
import { Truck, MapPin, PackageCheck } from 'lucide-react';

const DeliverySection: React.FC = () => {
  return (
    <section id="delivery" className="py-20 bg-brand-purple text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-brand-yellow opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between gap-12">
          
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-yellow">
              Fast Delivery Across Zanzibar
            </h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              We deliver construction materials directly to your site — including Stone Town, Paje, Nungwi, Jambiani, Makunduchi, and more. Our logistics network ensures fast, safe, and reliable delivery throughout the island.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <Truck className="text-brand-yellow" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Reliable Fleet</h4>
                  <p className="text-gray-300 text-sm mt-1">From pickups to large trucks, we have the right vehicle for your load.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <MapPin className="text-brand-yellow" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Island-Wide Coverage</h4>
                  <p className="text-gray-300 text-sm mt-1">Supplying all regions of Unguja and Pemba.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <PackageCheck className="text-brand-yellow" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Safe Handling</h4>
                  <p className="text-gray-300 text-sm mt-1">Materials are handled with care to prevent breakage during transit.</p>
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <a href="#quote" className="inline-block bg-brand-yellow text-brand-purple font-bold px-8 py-3 rounded-md hover:bg-white transition-colors">
                Order Delivery Now
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
               <img 
                 src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                 alt="Truck delivery"
                 loading="lazy"
                 decoding="async"
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                 <p className="text-white font-medium">Delivering to your site, on time.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
