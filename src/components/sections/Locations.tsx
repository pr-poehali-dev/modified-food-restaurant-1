import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { locations } from '@/data/restaurantData';

const Locations = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Наши рестораны
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-all hover:shadow-[0_0_15px_rgba(155,135,245,0.15)]"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">{location.city}</h3>
              
              <div className="flex items-start mb-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <p>{location.address}</p>
              </div>
              
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <p>{location.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
