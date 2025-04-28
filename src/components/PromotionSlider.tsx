import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

interface Promotion {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
}

const promotions: Promotion[] = [
  {
    id: 1,
    title: "Загадочный понедельник",
    description: "Каждый понедельник - скидка 20% на все блюда-загадки",
    image: "https://images.unsplash.com/photo-1499715217757-2aa48ed7e593?w=1200&auto=format&fit=crop",
    buttonText: "Узнать больше",
    link: "/menu"
  },
  {
    id: 2,
    title: "Дегустационный сет",
    description: "5 миниатюрных блюд-сюрпризов всего за 1990₽",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop",
    buttonText: "Заказать",
    link: "/menu"
  },
  {
    id: 3,
    title: "Молекулярные коктейли",
    description: "К каждому ужину из 3-х блюд - молекулярный коктейль в подарок",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=1200&auto=format&fit=crop",
    buttonText: "Посмотреть меню",
    link: "/menu"
  }
];

const PromotionSlider = () => {
  return (
    <div className="w-full overflow-hidden">
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {promotions.map((promo) => (
            <CarouselItem key={promo.id}>
              <div className="relative h-[60vh] max-h-[500px] w-full overflow-hidden rounded-xl">
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <h2 className="text-white text-2xl md:text-4xl font-bold mb-3 font-playfair animate-fade-in">
                    {promo.title}
                  </h2>
                  <p className="text-white/90 text-base md:text-lg mb-6 max-w-xl">
                    {promo.description}
                  </p>
                  <Button 
                    size="lg" 
                    className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105"
                  >
                    {promo.buttonText}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-6" />
          <CarouselNext className="right-6" />
        </div>
      </Carousel>
    </div>
  );
};

export default PromotionSlider;
