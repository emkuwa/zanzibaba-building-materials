import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { PRODUCTS } from '../constants';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    product: '',
    quantity: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-brand-purple p-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-2">Request a Quote</h2>
            <p className="text-purple-200">Fill out the form below and we will get back to you with the best price.</p>
          </div>

          <div className="p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-8">Thank you, {formData.name}. We will contact you shortly at {formData.contact}.</p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', contact: '', location: '', product: '', quantity: '', notes: '' });
                  }}
                  className="text-brand-purple font-bold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                      placeholder="+255..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Delivery Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                      placeholder="e.g. Stone Town, Zanzibar"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                      placeholder="e.g. 50 bags, 2 tons"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product Interested In</label>
                  <select
                    id="product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select a product...</option>
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="Other">Other / Multiple Items</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                    placeholder="Any specific brand requirements or delivery instructions?"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-brand-yellow text-brand-purple font-bold text-lg px-8 py-4 rounded-lg hover:bg-yellow-400 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Submit Quote Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;