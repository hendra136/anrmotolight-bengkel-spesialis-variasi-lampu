import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const LocationSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat Lengkap",
      content: "Jl. Salakan Potorono Banguntapan Bantul, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55241",
      action: () => window.open('https://maps.app.goo.gl/RBGmr6h3UUJ2AWmx9', '_blank')
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Nomor Telepon",
      content: "0895-4155-32092",
      action: () => window.open('tel:+6289541553209', '_blank')
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 08.00 - 17.00 WIB\nMinggu: 08.00 - 15.00 WIB",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lokasi <span className="text-accent">Bengkel</span> Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kunjungi langsung bengkel kami untuk konsultasi dan melihat langsung hasil kerja profesional tim ANRMOTOLIGHT.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="scroll-fade-in">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7859234234!2d110.40871751744384!3d-7.813856999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5761e1e1e1e1%3A0x1e1e1e1e1e1e1e1e!2sJl.%20Salakan%20Potorono%20Banguntapan%20Bantul%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta%2055241!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi ANRMOTOLIGHT"
                ></iframe>
              </div>
            </Card>
            
            <div className="mt-6 text-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://maps.app.goo.gl/RBGmr6h3UUJ2AWmx9', '_blank')}
                className="flex items-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Buka di Google Maps
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="scroll-fade-in">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className={`p-6 border-0 bg-card/50 backdrop-blur-sm hover-lift ${
                    info.action ? 'cursor-pointer hover:border-accent/50' : ''
                  }`}
                  onClick={info.action || undefined}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {info.content}
                      </p>
                      {info.action && (
                        <div className="mt-3">
                          <span className="text-accent text-sm font-medium">Klik untuk {info.title.toLowerCase()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Hubungi Kami Sekarang</h3>
              
              <div className="grid gap-4">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => window.open('https://wa.me/62895415532092?text=Halo%20ANRMOTOLIGHT%2C%20saya%20ingin%20bertanya%20tentang%20variasi%20lampu%20motor.', '_blank')}
                  className="w-full justify-center"
                >
                  Chat WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('tel:+6289541553209', '_blank')}
                  className="w-full justify-center"
                >
                  Telepon Langsung
                </Button>
              </div>
            </div>

            {/* Operating Hours Highlight */}
            <Card className="mt-6 p-6 bg-accent/10 border border-accent/20">
              <div className="text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Jam Buka Hari Ini</h3>
                <p className="text-accent font-medium">08.00 - 17.00 WIB</p>
                <p className="text-sm text-muted-foreground mt-1">Siap melayani konsultasi dan pemasangan</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;