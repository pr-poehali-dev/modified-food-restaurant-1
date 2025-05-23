import React from 'react';
import PromotionSlider from '@/components/PromotionSlider';

const Hero = () => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto">
        <PromotionSlider />
        
        <div className="mt-12 text-center animate-fade-in backdrop-blur-sm py-8 px-4 rounded-xl bg-black/50">
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 font-playfair">
            Мы не то, чем кажемся
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Откройте для себя мир модифицированной кухни, где внешний вид обманчив, а вкус превосходит все ожидания
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
