import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TriggerCards from '@/components/TriggerCards';
import HowItWorks from '@/components/HowItWorks';
import WhoItIsFor from '@/components/WhoItIsFor';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TriggerCards />
        <HowItWorks />
        <WhoItIsFor />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
