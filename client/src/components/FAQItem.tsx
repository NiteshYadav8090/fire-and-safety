
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ item }: { item: { q: string, a: string } }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-4"
      >
        <h4 className="text-lg md:text-xl font-bold text-blue-900">{item.q}</h4>
        <div className={`p-1.5 rounded-full ${isOpen ? 'bg-red-100' : 'bg-gray-100'} transition-colors`}>
          {isOpen ? <Minus className="w-5 h-5 text-red-600" /> : <Plus className="w-5 h-5 text-blue-900" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">{item.a}</p>
      </div>
    </div>
  );
};

export default FAQItem;
