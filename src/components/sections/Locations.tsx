const Locations = () => {
  // Адреса ресторанов
  const locations = [
    { city: "Москва", address: "ул. Гастрономическая, 42", phone: "+7 (999) 123-45-67" },
    { city: "Санкт-Петербург", address: "Кулинарный пр., 15", phone: "+7 (999) 765-43-21" },
    { city: "Казань", address: "ул. Молекулярная, 28", phone: "+7 (999) 555-55-55" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Наши рестораны</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">{location.city}</h3>
              <p className="mb-2">{location.address}</p>
              <p className="text-primary">{location.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
