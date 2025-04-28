import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Advantages from '@/components/sections/Advantages';
import PopularDishes from '@/components/sections/PopularDishes';
import Suppliers from '@/components/sections/Suppliers';
import Locations from '@/components/sections/Locations';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white bg-restaurant-pattern bg-fixed bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/60 before:z-0 relative">
      <Navbar />
      
      <main className="flex-grow relative z-10">
        <Hero />
        <Advantages />
        <PopularDishes />
        <Suppliers />
        <Locations />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
