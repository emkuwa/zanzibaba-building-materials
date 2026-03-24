import React from 'react';
import { FAQS } from '../constants';
import { HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="text-brand-purple" size={32} />
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid gap-6">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-brand-purple mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;