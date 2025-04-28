import React from 'react';
import FoodCard from '@/components/FoodCard';
import { Button } from '@/components/ui/button';

interface Dish {
  id: number;
  name: string;
  appearsAs: string;
  actuallyIs: string;
  price: number;
  image: string;
  isMystery?: boolean;
}

const popularDishes: Dish[] = [
  {
    id: 1,
    name: "Воздушное мороженое",
    appearsAs: "Ванильное мороженое с карамелью",
    actuallyIs: "Жареная рыба в кляре с соусом тартар",
    price: 590,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Шоколадный торт",
    appearsAs: "Шоколадный торт с вишней",
    actuallyIs: "Говяжий стейк с луковым соусом",
    price: 780,
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Тропический коктейль",
    appearsAs: "Манговый смузи с кокосом",
    actuallyIs: "Томатный суп с базиликом и сливками",
    price: 450,
    image: "https://images.unsplash.com/photo-1498430578003-dc8d9934473b?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Блюдо X",
    appearsAs: "Загадка",
    actuallyIs: "Загадка",
    price: 890,
    image: "https://images.unsplash.com/photo-1546241072-48010ad2862c?w=800&auto=format&fit=crop",
    isMystery: true
  },
  {
    id: 5,
    name: "Весенний салат",
    appearsAs: "Зеленый салат с авокадо",
    actuallyIs: "Паста карбонара с беконом",
    price: 510,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Энигма",
    appearsAs: "Загадка",
    actuallyIs: "Загадка",
    price: 1100,
    image: "https://images.unsplash.com/photo-1562403492-454d4b075cac?w=800&auto=format&fit=crop",
    isMystery: true
  }
];

const PopularDishes = () => {
  return (
    <section className="py-12 px-4 bg-black/70 backdrop-blur-sm rounded-xl my-12 mx-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-white mb-4">
            Популярные блюда
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Наши самые необычные и востребованные блюда. Попробуйте то, что выглядит знакомо, 
            но удивит вас совершенно новым вкусом.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDishes.map((dish) => (
            <FoodCard key={dish.id} {...dish} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/80 text-white px-8"
          >
            Перейти в меню
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
