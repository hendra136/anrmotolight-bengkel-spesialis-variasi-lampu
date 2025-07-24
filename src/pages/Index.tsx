import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import AboutSection from '@/components/AboutSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimations />
      <Navigation />
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;