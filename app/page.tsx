import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Freshness } from '@/components/Freshness';
import { Products } from '@/components/Products';
import { Subscription } from '@/components/Subscription';
import { Delivery } from '@/components/Delivery';
import { LeadForm } from '@/components/LeadForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Freshness />
        <Products />
        <Subscription />
        <Delivery />
        <section id="form" className="px-6 py-16 md:py-24 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-2">Оставить заявку</h2>
          <p className="opacity-75 mb-8">
            Перезвоним, поможем выбрать сорт и оформим доставку.
          </p>
          <LeadForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
