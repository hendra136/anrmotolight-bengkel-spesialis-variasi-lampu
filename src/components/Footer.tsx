import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, MessageCircle, Facebook, Instagram, Music } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      url: "https://facebook.com/anrmotolight" // placeholder
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram", 
      url: "https://instagram.com/anrmotolight" // placeholder
    },
    {
      icon: <Music className="w-5 h-5" />,
      label: "TikTok",
      url: "https://tiktok.com/@anrmotolight" // placeholder
    }
  ];

  const quickLinks = [
    { label: "Home", action: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Layanan", action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Galeri", action: () => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Tentang Kami", action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Kontak", action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
  ];

  const services = [
    "Kelistrikan Motor",
    "Pemasangan HID",
    "Variasi Lampu",
    "Demon Eyes",
    "Angel Eyes RGB",
    "Mini Projector"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                ANR<span className="text-accent">MOTO</span>LIGHT
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                Bengkel spesialis variasi lampu motor dan kelistrikan terpercaya di Yogyakarta dengan pengalaman lebih dari 10 tahun.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold mb-3">Ikuti Kami</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="border-primary-foreground/20 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Menu Utama</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan Utama</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-6">Kontak Kami</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    Jl. Salakan Potorono Banguntapan Bantul, Kota Yogyakarta, DIY 55241
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+6289541553209"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  0895-4155-32092
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button 
                variant="cta"
                size="sm"
                onClick={() => window.open('https://wa.me/62895415532092?text=Halo%20ANRMOTOLIGHT%2C%20saya%20ingin%20bertanya%20tentang%20variasi%20lampu%20motor.', '_blank')}
                className="w-full justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat WhatsApp
              </Button>
              
              <Button 
                variant="outline"
                size="sm"
                onClick={() => window.open('tel:+6289541553209', '_blank')}
                className="w-full justify-center border-primary-foreground/20 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
              >
                <Phone className="w-4 h-4 mr-2" />
                Telepon
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 ANRMOTOLIGHT. Semua hak cipta dilindungi.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <span>Bangga Melayani Yogyakarta & Sekitarnya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;