import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FoodCard from '@/components/FoodCard';
import { popularDishes } from '@/data/restaurantData';

const PopularDishes = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">Популярные блюда</h2>
          <Link to="/menu">
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              Перейти в меню
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDishes.map((dish) => (
            <FoodCard
              key={dish.id}
              id={dish.id}
              name={dish.name}
              image={dish.image}
              description={dish.description}
              price={dish.price}
              isMystery={dish.isMystery}
              visibleIngredients={dish.visibleIngredients}
              actualIngredients={dish.actualIngredients}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
