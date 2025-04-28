import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Advantages from '@/components/sections/Advantages';
import PopularDishes from '@/components/sections/PopularDishes';
import Suppliers from '@/components/sections/Suppliers';
import Locations from '@/components/sections/Locations';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Advantages />
        <PopularDishes />
        <Suppliers />
        <Locations />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
