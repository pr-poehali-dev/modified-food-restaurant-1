export interface Dish {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  isMystery?: boolean;
  visibleIngredients?: string;
  actualIngredients?: string;
}

export interface Supplier {
  name: string;
  logo: string;
}

export interface Location {
  city: string;
  address: string;
  phone: string;
}

// Популярные блюда
export const popularDishes: Dish[] = [
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
export const suppliers: Supplier[] = [
  { name: "Органик Фарм", logo: "https://images.unsplash.com/photo-1506484381205-f7945653044d?w=200&h=100&fit=crop&auto=format" },
  { name: "Морская звезда", logo: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=200&h=100&fit=crop&auto=format" },
  { name: "Горный мёд", logo: "https://images.unsplash.com/photo-1558642891-54be180ea339?w=200&h=100&fit=crop&auto=format" },
  { name: "Молекулярные продукты", logo: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=200&h=100&fit=crop&auto=format" }
];

// Адреса ресторанов
export const locations: Location[] = [
  { city: "Москва", address: "ул. Гастрономическая, 42", phone: "+7 (999) 123-45-67" },
  { city: "Санкт-Петербург", address: "Кулинарный пр., 15", phone: "+7 (999) 765-43-21" },
  { city: "Казань", address: "ул. Молекулярная, 28", phone: "+7 (999) 555-55-55" }
];
