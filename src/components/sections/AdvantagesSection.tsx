import { ChefHat, Award, Utensils } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <ChefHat className="text-primary h-8 w-8" />,
      title: "Профессиональные повара",
      description: "Наши шеф-повара — мастера молекулярной кухни, создающие настоящие кулинарные иллюзии.",
      bgColor: "bg-primary/10",
      textColor: "text-primary"
    },
    {
      icon: <Award className="text-secondary h-8 w-8" />,
      title: "Уникальные рецепты",
      description: "Каждое блюдо — это произведение искусства с неожиданными вкусовыми сочетаниями.",
      bgColor: "bg-secondary/10",
      textColor: "text-secondary"
    },
    {
      icon: <Utensils className="text-accent h-8 w-8" />,
      title: "Атмосфера волшебства",
      description: "Современный интерьер с голографическими проекциями создаёт неповторимую атмосферу.",
      bgColor: "bg-accent/10",
      textColor: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md text-center holographic">
              <div className={`mx-auto w-16 h-16 ${advantage.bgColor} rounded-full flex items-center justify-center mb-4`}>
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
