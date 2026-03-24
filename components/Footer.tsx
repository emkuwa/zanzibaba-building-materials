import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
             <div className="mb-6">
               <img 
                 src="https://i.imgur.com/YyG00be.png" 
                 alt="Zanzibaba Logo" 
                 loading="lazy"
                 className="h-14 w-auto bg-white rounded-full p-1.5 object-contain"
               />
              </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for quality building materials in Zanzibar. Building dreams, one brick at a time.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-yellow font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gray-400 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gray-400 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-yellow font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#catalog" className="text-gray-400 hover:text-white text-sm transition-colors">Product Catalog</a></li>
              <li><a href="#delivery" className="text-gray-400 hover:text-white text-sm transition-colors">Delivery Info</a></li>
              <li><a href="#quote" className="text-gray-400 hover:text-white text-sm transition-colors">Request Quote</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-brand-yellow font-bold text-lg mb-6">Business Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Zanzibaba Company Limited. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social placeholders */}
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;