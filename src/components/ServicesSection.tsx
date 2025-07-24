import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb, 
  Zap, 
  Eye, 
  Palette, 
  Wrench, 
  Flashlight,
  Circle,
  Rainbow,
  Shield,
  Target
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Kelistrikan Motor",
      description: "Service dan pemasangan sistem kelistrikan motor dengan standar profesional.",
      price: "Konsultasi Gratis"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Variasi Motor",
      description: "Customisasi dan modifikasi motor sesuai selera dengan hasil yang memuaskan.",
      price: "Konsultasi Gratis"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Pemasangan HID",
      description: "Pemasangan lampu HID berkualitas tinggi untuk pencahayaan optimal.",
      price: "Konsultasi Gratis"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Pemasangan D2 Pro",
      description: "Instalasi sistem pencahayaan D2 Pro dengan teknologi terdepan.",
      price: "Konsultasi Gratis"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Service & Perawatan",
      description: "Maintenance rutin dan perbaikan sistem pencahayaan motor Anda.",
      price: "Konsultasi Gratis"
    },
    {
      icon: <Flashlight className="w-8 h-8" />,
      title: "Lampu Motor",
      description: "Pemasangan dan penggantian berbagai jenis lampu motor modern.",
      price: "Konsultasi Gratis"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Pemasangan Alis & Demon",
      description: "Instalasi lampu alis dan demon eyes untuk tampilan motor yang menawan.",
      price: "Konsultasi Gratis"
    },
    {
      icon: <Rainbow className="w-8 h-8" />,
      title: "Pemasangan Alis RGB",
      description: "Pemasangan lampu alis RGB dengan berbagai pilihan warna yang menarik.",
      price: "Konsultasi Gratis"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pemasangan Mika",
      description: "Pemasangan mika lampu berkualitas untuk perlindungan dan estetika.",
      price: "Konsultasi Gratis"
    },
    {
      icon: <Circle className="w-8 h-8" />,
      title: "Pemasangan Mini Projie",
      description: "Instalasi mini projector untuk pencahayaan fokus dan berkualitas tinggi.",
      price: "Konsultasi Gratis"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Pemasangan LED Proyektor",
      description: "Instalasi LED proyektor berkualitas tinggi untuk pencahayaan yang terang dan fokus.",
      price: "Konsultasi Gratis"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Upgrade Sistem Kelistrikan",
      description: "Upgrade dan optimalisasi sistem kelistrikan motor untuk performa maksimal.",
      price: "Konsultasi Gratis"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Layanan <span className="text-accent">Profesional</span> Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan variasi lampu motor dan kelistrikan dengan kualitas terbaik dan harga yang kompetitif.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover-lift card-shadow hover:shadow-card-hover border-0 bg-card/50 backdrop-blur-sm scroll-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="pt-2">
                  <div className="text-accent font-semibold text-sm mb-3">
                    {service.price}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:border-accent group-hover:text-accent"
                    onClick={() => window.open('https://wa.me/62895415532092?text=Halo%20ANRMOTOLIGHT%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20' + encodeURIComponent(service.title) + '.%20Mohon%20info%20lengkapnya.', '_blank')}
                  >
                    Konsultasi
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 scroll-fade-in">
          <p className="text-muted-foreground mb-6">
            Masih bingung memilih layanan yang tepat? Konsultasikan kebutuhan Anda dengan ahli kami!
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.open('https://wa.me/62895415532092?text=Halo%20ANRMOTOLIGHT%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20yang%20cocok%20untuk%20motor%20saya.', '_blank')}
          >
            Konsultasi Gratis Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;