import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика отправки формы
  };

  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>Центральный офис: Москва, ул. Гастрономическая, 42</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span>8 (800) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span>info@notwhatitwasyou.ru</span>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Навигация */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-primary transition-colors">Меню</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-primary transition-colors">Корзина</Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">О нас</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Мероприятия</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Вакансии</a>
              </li>
            </ul>
          </div>
          
          {/* Форма обратной связи */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Обратная связь</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-gray-900 border-gray-800"
                  required
                />
                <Textarea 
                  placeholder="Сообщение" 
                  className="bg-gray-900 border-gray-800 min-h-[100px]"
                  required
                />
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" /> Отправить
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} «Мы не то, чем кажемся». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
