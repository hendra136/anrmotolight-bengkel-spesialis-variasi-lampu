import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import workshopImage from '@/assets/workshop.png';

const AboutSection = () => {
  const achievements = [
    "Lebih dari 10 tahun pengalaman di bidang variasi motor",
    "Telah menangani 1000+ proyek variasi lampu motor",
    "Tim teknisi bersertifikat dan berpengalaman",
    "Menggunakan spare part berkualitas tinggi",
    "Garansi untuk setiap pemasangan",
    "Pelayanan konsultasi gratis"
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kualitas Terbaik",
      description: "Komitmen untuk memberikan hasil kerja dengan standar kualitas tertinggi."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kepuasan Pelanggan",
      description: "Mengutamakan kepuasan pelanggan dengan pelayanan terbaik dan hasil memuaskan."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Tepat Waktu",
      description: "Menyelesaikan setiap proyek sesuai dengan waktu yang telah disepakati."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tentang <span className="text-accent">ANRMOTOLIGHT</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                ANRMOTOLIGHT adalah bengkel spesialis variasi lampu motor dan kelistrikan yang berlokasi di Yogyakarta. 
                Didirikan dengan visi untuk memberikan solusi pencahayaan terbaik bagi para penggemar motor di Indonesia.
              </p>
              
              <p className="leading-relaxed">
                Dengan pengalaman lebih dari 5 tahun, kami telah melayani ribuan pelanggan dengan berbagai jenis 
                modifikasi lampu motor, mulai dari pemasangan HID, LED, projector, hingga sistem pencahayaan custom 
                yang disesuaikan dengan kebutuhan dan selera masing-masing pelanggan.
              </p>
              
              <p className="leading-relaxed">
                Tim teknisi kami terdiri dari ahli-ahli berpengalaman yang terus mengikuti perkembangan teknologi 
                terbaru dalam dunia otomotif, khususnya sistem pencahayaan motor. Kami menggunakan peralatan modern 
                dan spare part berkualitas tinggi untuk memastikan hasil yang optimal dan tahan lama.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Mengapa Memilih Kami:</h3>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.open('https://wa.me/62895415532092?text=Halo%20ANRMOTOLIGHT%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20Anda.', '_blank')}
              >
                Hubungi Kami Sekarang
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="scroll-fade-in">
            <div className="relative">
              <img 
                src={workshopImage} 
                alt="Workshop ANRMOTOLIGHT"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Workshop Lengkap</h3>
                <p className="text-white/90">Fasilitas lengkap dengan peralatan terkini untuk hasil maksimal</p>
              </div>
            </div>

            {/* Values */}
            <div className="grid gap-6 mt-8">
              {values.map((value, index) => (
                <Card key={index} className="p-4 border-0 bg-muted/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
