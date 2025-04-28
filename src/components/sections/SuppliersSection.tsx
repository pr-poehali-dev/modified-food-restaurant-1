// Поставщики
const suppliers = [
  { name: "Органик Фарм", logo: "https://images.unsplash.com/photo-1506484381205-f7945653044d?w=200&h=100&fit=crop&auto=format" },
  { name: "Морская звезда", logo: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=200&h=100&fit=crop&auto=format" },
  { name: "Горный мёд", logo: "https://images.unsplash.com/photo-1558642891-54be180ea339?w=200&h=100&fit=crop&auto=format" },
  { name: "Молекулярные продукты", logo: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=200&h=100&fit=crop&auto=format" }
];

const SuppliersSection = () => {
  return (
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
  );
};

export default SuppliersSection;
