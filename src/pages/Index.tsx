import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ToursSection from '@/components/ToursSection';
import ContactSection from '@/components/ContactSection';

export default function Index() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ToursSection 
        scrollToSection={scrollToSection}
        isBookingOpen={isBookingOpen}
        setIsBookingOpen={setIsBookingOpen}
      />
      <ContactSection />
    </div>
  );
}
