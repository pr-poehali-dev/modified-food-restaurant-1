import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

const PopularDishesSection = () => {
  return (
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
  );
};

export default PopularDishesSection;
