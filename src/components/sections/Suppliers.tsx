import React from 'react';
import { suppliers } from '@/data/restaurantData';

const Suppliers = () => {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Наши поставщики
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {suppliers.map((supplier, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-4 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <div className="relative w-full h-24 overflow-hidden rounded-md">
                <img 
                  src={supplier.logo} 
                  alt={supplier.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-2">
                  <span className="text-sm text-white font-medium">{supplier.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
