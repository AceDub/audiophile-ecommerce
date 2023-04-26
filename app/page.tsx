import Hero from './Hero';
import CategoriesMenu from '@/components/CategoriesMenu';
import ProductsDisplay from '@/components/ProductsDisplay';
import About from '@/components/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mx-6 mb-[7.5rem] mt-24 md:mx-10 md:mb-24 md:mt-36 lg:mb-40 lg:mt-32">
        <CategoriesMenu />
      </section>
      <ProductsDisplay />
      <About />
    </main>
  );
}
