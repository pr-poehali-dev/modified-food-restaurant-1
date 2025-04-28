import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface Promotion {
  id: number;
  title: string;
  description: string;
  image: string;
  actionText: string;
}

const promotions: Promotion[] = [
  {
    id: 1,
    title: "Загадочный ужин",
    description: "Закажите 3 блюда-сюрприза и получите десерт в подарок!",
    image: "https://images.unsplash.com/photo-1621251203394-8c4922ca0c9d?w=800&auto=format&fit=crop",
    actionText: "Участвовать",
  },
  {
    id: 2,
    title: "Ужин наоборот",
    description: "Попробуйте наше новое меню, где десерты выглядят как основные блюда, а основные — как десерты!",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&auto=format&fit=crop",
    actionText: "Заказать",
  },
  {
    id: 3,
    title: "Мастер-класс от шефа",
    description: "Каждый вторник — мастер-класс по приготовлению блюд-иллюзий от нашего шеф-повара",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop",
    actionText: "Записаться",
  },
];

const PromotionSlider = () => {
  return (
    <div className="relative mx-auto max-w-5xl px-4 py-6">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {promotions.map((promo) => (
            <CarouselItem key={promo.id}>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                {/* Фоновое изображение */}
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Градиентный оверлей */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                
                {/* Контент акции */}
                <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                  <div className="max-w-md">
                    <h2 className="text-3xl font-bold mb-4 holographic">{promo.title}</h2>
                    <p className="text-lg mb-6">{promo.description}</p>
                    <Button 
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      {promo.actionText}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default PromotionSlider;
