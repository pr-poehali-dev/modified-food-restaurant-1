import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Award, Utensils, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PromotionSlider from '@/components/PromotionSlider';
import FoodCard from '@/components/FoodCard';

// Популярные блюда
const popularDishes = [
  {
    id: 1,
    name: "Воздушный стейк",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop",
    description: "Сочный стейк, который выглядит как облако из взбитых сливок",
    price: 1200,
    visibleIngredients: "Говядина, секретные специи, гарнир из молекулярной кухни",
    actualIngredients: "Премиальная говядина су-вид, текстурированный картофель, соус на основе красного вина"
  },
  {
    id: 2,
    name: "Светящийся суп",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop",
    description: "Суп, светящийся неоновым светом под специальным освещением",
    price: 650,
    visibleIngredients: "Тыква, кокосовое молоко, специи, биолюминесцентный экстракт",
    actualIngredients: "Тыквенный крем-суп с добавлением натуральных красителей и эфирных масел"
  },
  {
    id: 3,
    name: "Загадка шефа",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&auto=format&fit=crop",
    description: "Блюдо-сюрприз, которое выглядит как десерт, но имеет вкус основного блюда",
    price: 990,
    isMystery: true
  },
  {
    id: 4,
    name: "Хрустальная паста",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop",
    description: "Прозрачная паста, которая меняет цвет при добавлении соуса",
    price: 850,
    visibleIngredients: "Пшеничная мука, яйца, специальные добавки, трюфельный соус",
    actualIngredients: "Паста из агар-агара с ароматом трюфеля и соусом на основе сливок"
  },
  {
    id: 5,
    name: "Зеркальный десерт",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop",
    description: "Глянцевый десерт с идеальным зеркальным покрытием",
    price: 750,
    visibleIngredients: "Шоколадный мусс, зеркальная глазурь, сезонные ягоды",
    actualIngredients: "Мусс из бельгийского шоколада с добавлением желатина для зеркального эффекта"
  },
  {
    id: 6,
    name: "Невесомый салат",
    image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=800&auto=format&fit=crop",
    description: "Салат, парящий над тарелкой благодаря специальной подаче",
    price: 690,
    visibleIngredients: "Свежие овощи, соус 'Антигравитация', микрозелень",
    actualIngredients: "Свежие овощи с магнитной подачей и специальной сервировкой"
  }
];

// Поставщики
const suppliers = [
  { name: "Органик Фарм", logo: "https://images.unsplash.com/photo-1506484381205-f7945653044d?w=200&h=100&fit=crop&auto=format" },
  { name: "Морская звезда", logo: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=200&h=100&fit=crop&auto=format" },
  { name: "Горный мёд", logo: "https://images.unsplash.com/photo-1558642891-54be180ea339?w=200&h=100&fit=crop&auto=format" },
  { name: "Молекулярные продукты", logo: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=200&h=100&fit=crop&auto=format" }
];

// Адреса ресторанов
const locations = [
  { city: "Москва", address: "ул. Гастрономическая, 42", phone: "+7 (999) 123-45-67" },
  { city: "Санкт-Петербург", address: "Кулинарный пр., 15", phone: "+7 (999) 765-43-21" },
  { city: "Казань", address: "ул. Молекулярная, 28", phone: "+7 (999) 555-55-55" }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero секция со слайдером акций */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-10">
          <PromotionSlider />
        </section>
        
        {/* Наши преимущества */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md text-center holographic">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ChefHat className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Профессиональные повара</h3>
                <p className="text-muted-foreground">Наши шеф-повара — мастера молекулярной кухни, создающие настоящие кулинарные иллюзии.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md text-center holographic">
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-secondary h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Уникальные рецепты</h3>
                <p className="text-muted-foreground">Каждое блюдо — это произведение искусства с неожиданными вкусовыми сочетаниями.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md text-center holographic">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="text-accent h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Атмосфера волшебства</h3>
                <p className="text-muted-foreground">Современный интерьер с голографическими проекциями создаёт неповторимую атмосферу.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Популярные блюда */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Популярные блюда</h2>
              <Link to="/menu">
                <Button variant="outline">
                  Все меню <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDishes.map(dish => (
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
        
        {/* Наши поставщики */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Наши поставщики</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {suppliers.map((supplier, index) => (
                <div key={index} className="bg-card rounded-lg p-4 shadow-md text-center">
                  <img 
                    src={supplier.logo} 
                    alt={supplier.name} 
                    className="h-20 object-contain mx-auto mb-4"
                  />
                  <p className="font-semibold">{supplier.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Наши рестораны */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Наши рестораны</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-3">{location.city}</h3>
                  <p className="mb-2">{location.address}</p>
                  <p className="text-primary">{location.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
