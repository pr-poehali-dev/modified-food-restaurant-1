import React from 'react';
import { UtensilsCrossed, ChefHat, Sparkles } from 'lucide-react';

const advantages = [
  {
    id: 1,
    title: "Вкусная кухня",
    description: "Наши блюда создают незабываемые вкусовые сочетания, которые удивят даже самых искушенных гурманов",
    icon: UtensilsCrossed
  },
  {
    id: 2,
    title: "Профессиональные повара",
    description: "Команда шеф-поваров с мировым именем, владеющих техниками молекулярной и модифицированной кухни",
    icon: ChefHat
  },
  {
    id: 3,
    title: "Уникальная атмосфера",
    description: "Современный дизайн с голографическими проекциями создает неповторимую атмосферу для вашего гастрономического приключения",
    icon: Sparkles
  }
];

const Advantages = () => {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Наши преимущества
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div 
              key={advantage.id} 
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all hover:shadow-[0_0_15px_rgba(155,135,245,0.2)] group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <advantage.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-400">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
