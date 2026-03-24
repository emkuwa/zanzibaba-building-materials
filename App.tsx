import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductCatalog from './components/ProductCatalog';
import DeliverySection from './components/DeliverySection';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProductCatalog />
        <DeliverySection />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;