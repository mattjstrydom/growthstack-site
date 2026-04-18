import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
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
        <HowItWorks />
        <WhoItIsFor />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
