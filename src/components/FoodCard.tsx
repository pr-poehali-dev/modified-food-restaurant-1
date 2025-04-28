import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

interface FoodCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  isMystery?: boolean;
  actualIngredients?: string;
  visibleIngredients?: string;
}

const FoodCard = ({
  id,
  name,
  image,
  description,
  price,
  isMystery = false,
  actualIngredients,
  visibleIngredients,
}: FoodCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    // Здесь будет логика добавления в корзину
    console.log(`Добавлено в корзину: ${name}`);
  };

  return (
    <div 
      className={`bg-card rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${isMystery ? 'mystery-dish holographic' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-2 right-2">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-semibold">
            {price} ₽
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        
        {!isMystery && visibleIngredients && (
          <p className="text-sm text-muted-foreground mb-3">{visibleIngredients}</p>
        )}
        
        {isMystery && (
          <p className="text-sm italic text-secondary mb-3">Состав: тайна, которую вы откроете во время дегустации!</p>
        )}
        
        <div className="flex justify-between items-center mt-4">
          <Link to={`/dish/${id}`}>
            <Button variant="outline" size="sm">Подробнее</Button>
          </Link>
          <Button size="sm" onClick={handleAddToCart}>
            <PlusCircle className="mr-1 h-4 w-4" /> В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
