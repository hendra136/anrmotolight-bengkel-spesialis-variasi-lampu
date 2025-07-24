import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 scroll-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 text-sm font-medium text-accent">
              <Star className="w-4 h-4" />
              Bengkel Terpercaya di Yogyakarta
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                ANR<span className="text-accent">MOTO</span>LIGHT
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 font-medium">
                Spesialis Variasi Lampu Motor & Kelistrikan
              </h2>
              <p className="text-lg text-white/80 max-w-lg">
                Penerangan Optimal, Tampilan Maksimal untuk Motor Anda. 
                Dengan tenaga ahli berpengalaman dan peralatan modern.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="cta"
                size="xl"
                onClick={() => window.open('https://wa.me/62895415532092?text=Halo%20ANRMOTOLIGHT%2C%20saya%20ingin%20bertanya%20tentang%20variasi%20lampu%20motor.', '_blank')}
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="hero"
                size="xl"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3"
              >
                Lihat Layanan Kami
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-white/80 text-sm">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">1000+</div>
                <div className="text-white/80 text-sm">Motor Dilayani</div>
              </div>
            </div>
          </div>

          {/* Right Side - Additional Visual Element */}
          <div className="hidden lg:block scroll-fade-in">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl backdrop-blur-sm border border-white/20 p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Layanan Unggulan</h3>
                  <div className="space-y-4">
                    {[
                      'Pemasangan HID & LED',
                      'Variasi Lampu Custom',
                      'Projector & Demon Eyes',
                      'RGB & Angel Eyes',
                      'Service Kelistrikan'
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-3 text-white/90">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;