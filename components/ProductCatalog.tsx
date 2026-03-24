
import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Category, Product } from '../types';
import { Filter, ShoppingBag, ExternalLink, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

// Utility to generate optimized image URLs based on context
const getOptimizedImageUrl = (url: string, size: 'thumb' | 'card' | 'full'): string => {
  if (!url) return '';
  
  try {
    // Unsplash Optimization
    if (url.includes('images.unsplash.com')) {
      const urlObj = new URL(url);
      urlObj.searchParams.set('auto', 'format');
      urlObj.searchParams.set('fit', 'crop');
      urlObj.searchParams.set('q', '80');
      
      if (size === 'thumb') urlObj.searchParams.set('w', '150');
      else if (size === 'card') urlObj.searchParams.set('w', '600');
      else urlObj.searchParams.set('w', '1200');
      
      return urlObj.toString();
    }

    // Imgur Optimization
    // Regex matches standard direct links: https://i.imgur.com/[ID].[ext]
    const imgurMatch = url.match(/^(https?:\/\/i\.imgur\.com\/)([a-zA-Z0-9]+)(\.[a-zA-Z]+)$/);
    if (imgurMatch) {
      const [, prefix, id, ext] = imgurMatch;
      // Imgur suffixes: t (160x160), m (320x320), l (640x640), h (1024x1024)
      if (size === 'thumb') return `${prefix}${id}t${ext}`;
      if (size === 'card') return `${prefix}${id}l${ext}`; // Large thumbnail is good for high DPI cards
      return url; // Return original for full size
    }
  } catch (e) {
    console.warn('Error optimizing image URL:', e);
    return url;
  }

  return url;
};

// Reusable Product Card Component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const isExternal = !!product.externalLink;
  const [imageError, setImageError] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ensure we have an array of images, even if empty (though type guarantees it)
  const images = product.images && product.images.length > 0 
    ? product.images 
    : ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'];

  const toggleLightbox = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsLightboxOpen(!isLightboxOpen);
    setCurrentImageIndex(0); // Reset to first image on open
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group"
      >
        {/* Image */}
        <div 
          className="bg-white overflow-hidden relative cursor-pointer p-4"
          onClick={toggleLightbox}
          title="Click to view full image"
        >
          <div className="aspect-square w-full relative">
            <img 
              src={imageError ? 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80' : getOptimizedImageUrl(images[0], 'card')} 
              alt={product.name}
              onError={() => setImageError(true)}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
               <div className="opacity-0 group-hover:opacity-100 bg-white/90 text-brand-purple px-3 py-1 rounded-full text-xs font-bold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                 <ZoomIn size={14} />
                 View
               </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="font-bold text-lg text-gray-900 mb-2 leading-snug group-hover:text-brand-purple transition-colors">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
          
          <div className="mt-auto">
            <div className="mb-4">
              <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-1">Price</p>
              <p className="font-bold text-brand-purple text-lg">{product.priceRange}</p>
            </div>
            
            {isExternal ? (
              <a 
                href={product.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-brand-purple text-white py-3 rounded-lg font-bold hover:bg-purple-900 transition-colors shadow-md hover:shadow-lg group-hover:translate-y-0 translate-y-0"
                onClick={(e) => e.stopPropagation()}
              >
                View Full Catalog <ExternalLink size={18} className="ml-2" />
              </a>
            ) : (
              <a 
                href="#quote"
                className="w-full flex items-center justify-center bg-brand-yellow text-brand-purple py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <ShoppingBag size={18} className="mr-2" />
                <span className="hidden xs:inline">Request Quote or Order</span>
                <span className="inline xs:hidden">Order / Quote</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={toggleLightbox}>
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={toggleLightbox}
              className="absolute -top-12 right-0 text-white hover:text-brand-yellow transition-colors p-2 bg-white/10 rounded-full"
            >
              <X size={32} />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full h-full flex items-center justify-center bg-black/20 rounded-lg overflow-hidden" style={{ maxHeight: '70vh' }}>
              <img 
                src={getOptimizedImageUrl(images[currentImageIndex], 'full')} 
                alt={product.name} 
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-[70vh] object-contain shadow-2xl"
              />
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </div>

            {/* Product Info in Lightbox */}
            <div className="mt-6 text-center text-white w-full max-w-2xl">
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-300">{product.priceRange}</p>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-6 flex gap-3 overflow-x-auto pb-2 max-w-full px-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => selectImage(idx, e)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === idx ? 'border-brand-yellow scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={getOptimizedImageUrl(img, 'thumb')} 
                      alt={`Thumbnail ${idx + 1}`} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const ProductCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  // Filter products based on category
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === activeCategory);

  // Group products by category for 'All' view
  const categorizedProducts = activeCategory === 'All' 
    ? CATEGORIES.map(cat => ({
        category: cat,
        products: filteredProducts.filter(p => p.category === cat)
      })).filter(group => group.products.length > 0)
    : [{ category: activeCategory, products: filteredProducts }];

  return (
    <section id="catalog" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Our Product Catalog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide selection of high-quality construction materials. 
            Prices are estimates and may vary based on market conditions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'All'
                ? 'bg-brand-purple text-white shadow-lg ring-2 ring-offset-2 ring-brand-purple'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Products
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-brand-purple text-white shadow-lg ring-2 ring-offset-2 ring-brand-purple'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {categorizedProducts.map((group) => (
            <div key={group.category}>
              {activeCategory === 'All' && (
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-bold text-brand-purple whitespace-nowrap">{group.category}</h3>
                  <div className="h-px bg-gray-200 w-full"></div>
                </div>
              )}
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {group.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No products found in this category.</p>
            <button 
              onClick={() => setActiveCategory('All')}
              className="mt-4 text-brand-purple font-medium hover:underline"
            >
              View all products
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductCatalog;
