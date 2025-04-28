import { useState } from 'react';
import { SendIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    setEmail('');
    setMessage('');
    alert('Сообщение отправлено!');
  };

  return (
    <footer className="bg-muted/50 text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Контактная информация */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <address className="not-italic">
              <p className="mb-2">ул. Гастрономическая, 42</p>
              <p className="mb-2">Москва, Россия</p>
              <p className="mb-2">Телефон: +7 (999) 123-45-67</p>
              <p className="mb-2">Email: info@nemytochem.ru</p>
            </address>
          </div>

          {/* Время работы */}
          <div>
            <h3 className="text-lg font-bold mb-4">Время работы</h3>
            <p className="mb-2">Пн-Чт: 11:00 - 23:00</p>
            <p className="mb-2">Пт-Сб: 11:00 - 01:00</p>
            <p className="mb-2">Вс: 12:00 - 22:00</p>
          </div>

          {/* Меню футера */}
          <div>
            <h3 className="text-lg font-bold mb-4">Быстрые ссылки</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-primary transition-colors">О нас</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary transition-colors">Меню</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary transition-colors">Мероприятия</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary transition-colors">Доставка</a>
              </li>
            </ul>
          </div>

          {/* Форма обратной связи */}
          <div>
            <h3 className="text-lg font-bold mb-4">Обратная связь</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  placeholder="Сообщение"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background min-h-[100px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Отправить <SendIcon className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} "Мы не то, чем кажемся" - Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
