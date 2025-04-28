import React from 'react';
import { Button } from '@/components/ui/button';

interface FoodCardProps {
  id: number;
  name: string;
  appearsAs: string;
  actuallyIs: string;
  price: number;
  image: string;
  isMystery?: boolean;
}

const FoodCard = ({
  id,
  name,
  appearsAs,
  actuallyIs,
  price,
  image,
  isMystery = false
}: FoodCardProps) => {
  return (
    <div 
      className={`relative rounded-lg overflow-hidden shadow-lg h-full transition-all duration-300 hover:shadow-xl bg-black/80 border border-gray-800 
        ${isMystery ? 'holographic mystery-dish' : ''}`}
    >
      <div className="h-40 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-playfair text-lg font-bold text-white">
            {name}
            {isMystery && (
              <span className="ml-2 inline-block text-primary text-sm">✧</span>
            )}
          </h3>
          <span className="font-bold text-primary">
            {price} ₽
          </span>
        </div>
        
        {!isMystery ? (
          <>
            <p className="text-sm text-gray-400 mb-1">
              <span className="text-gray-500">Выглядит как:</span> {appearsAs}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              <span className="text-gray-500">На самом деле:</span> {actuallyIs}
            </p>
          </>
        ) : (
          <p className="text-sm text-gray-400 mb-4 italic">
            Состав этого блюда - загадка. Доверьтесь нашим шеф-поварам!
          </p>
        )}
        
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs border-primary text-primary hover:bg-primary hover:text-white"
          >
            Подробнее
          </Button>
          <Button 
            size="sm" 
            className="text-xs bg-primary hover:bg-primary/90"
          >
            Заказать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
