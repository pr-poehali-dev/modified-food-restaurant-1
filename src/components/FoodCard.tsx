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
      className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden transition-all duration-300
                  ${isMystery 
                    ? 'relative border-2 border-indigo-500/50 shadow-[0_0_15px_rgba(155,135,245,0.3)]' 
                    : 'border border-gray-800 hover:border-gray-700'}
                  hover:shadow-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isMystery && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-bold uppercase animate-pulse">
            Загадка
          </span>
        </div>
      )}
      
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
        <h3 className="text-lg font-bold mb-2 text-white">{name}</h3>
        
        {!isMystery && visibleIngredients && (
          <p className="text-sm text-gray-400 mb-3">{visibleIngredients}</p>
        )}
        
        {isMystery && (
          <p className="text-sm italic text-indigo-300 mb-3">Состав: тайна, которую вы откроете во время дегустации!</p>
        )}
        
        <div className="flex justify-between items-center mt-4">
          <Link to={`/dish/${id}`}>
            <Button variant="outline" size="sm" className="border-gray-700 text-gray-200 hover:bg-gray-800">
              Подробнее
            </Button>
          </Link>
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={handleAddToCart}
          >
            <PlusCircle className="mr-1 h-4 w-4" /> В корзину
          </Button>
        </div>
      </div>
      
      {isMystery && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-transparent to-indigo-500/10 opacity-60"></div>
      )}
    </div>
  );
};

export default FoodCard;
