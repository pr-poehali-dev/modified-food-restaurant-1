// Типы данных
export interface Dish {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  isMystery?: boolean;
  actualIngredients?: string;
  visibleIngredients?: string;
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

export interface Promotion {
  id: number;
  title: string;
  description: string;
  image: string;
  actionText: string;
}

// Моковые данные для популярных блюд, поставщиков, локаций и акций
// Эти данные могут быть перенесены в соответствующие компоненты,
// но вынесение их в отдельный файл позволяет переиспользовать данные
// и подготовиться к получению данных с сервера
