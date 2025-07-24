import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Layanan', id: 'services' },
    { label: 'Galeri', id: 'gallery' },
    { label: 'Tentang Kami', id: 'about' },
    { label: 'Kontak', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-blur shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              ANR<span className="text-accent">MOTO</span>LIGHT
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('tel:+6289541553209', '_blank')}
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Telepon
            </Button>
            <Button
              variant="cta"
              size="sm"
              onClick={() => window.open('https://wa.me/62895415532092?text=Halo%20ANRMOTOLIGHT%2C%20saya%20ingin%20bertanya%20tentang%20variasi%20lampu%20motor.', '_blank')}
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat WA
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-accent hover:bg-muted rounded-md transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 pb-2 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('tel:+6289541553209', '_blank')}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Telepon
                </Button>
                <Button
                  variant="cta"
                  size="sm"
                  onClick={() => window.open('https://wa.me/62895415532092?text=Halo%20ANRMOTOLIGHT%2C%20saya%20ingin%20bertanya%20tentang%20variasi%20lampu%20motor.', '_blank')}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;