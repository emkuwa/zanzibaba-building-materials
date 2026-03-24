import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, mobile }) => {
  const baseClasses = "font-medium transition-colors duration-200";
  const desktopClasses = "text-white hover:text-brand-yellow text-sm lg:text-base";
  const mobileClasses = "block px-3 py-2 rounded-md text-base font-medium text-white hover:text-brand-yellow hover:bg-purple-800";

  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-brand-purple sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3" onClick={() => window.location.href = '#'}>
            <img 
              src="https://i.imgur.com/YyG00be.png" 
              alt="Zanzibaba Building Materials" 
              className="h-10 md:h-14 w-auto bg-white rounded-full p-1 shadow-sm object-contain"
            />
            <div className="flex flex-col justify-center">
              <span className="font-heading font-bold text-white text-lg md:text-2xl leading-none tracking-tight">Zanzibaba</span>
              <span className="font-sans text-brand-yellow text-xs md:text-sm font-medium tracking-wide">Building Materials</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#catalog">Catalog</NavLink>
              <NavLink href="#delivery">Delivery</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#quote"
              className="bg-brand-yellow text-brand-purple hover:bg-white hover:text-brand-purple px-6 py-2.5 rounded-md font-bold transition-all shadow-md hover:shadow-lg text-sm lg:text-base"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-purple-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-brand-yellow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-purple focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-purple border-t border-purple-800" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#home" mobile onClick={toggleMenu}>Home</NavLink>
            <NavLink href="#about" mobile onClick={toggleMenu}>About</NavLink>
            <NavLink href="#catalog" mobile onClick={toggleMenu}>Catalog</NavLink>
            <NavLink href="#delivery" mobile onClick={toggleMenu}>Delivery</NavLink>
            <NavLink href="#faq" mobile onClick={toggleMenu}>FAQ</NavLink>
            
            <div className="mt-4 pt-4 border-t border-purple-700 pb-2">
               <a 
                href="#quote"
                onClick={toggleMenu}
                className="block w-full text-center bg-brand-yellow text-brand-purple px-5 py-3 rounded-md font-bold hover:bg-white transition-colors"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;