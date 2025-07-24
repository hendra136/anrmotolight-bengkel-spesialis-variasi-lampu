import React from 'react';
import { Award, Settings, Shield, Users } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tenaga Ahli Berpengalaman",
      description: "Tim teknisi profesional dengan pengalaman lebih dari 10 tahun di bidang kelistrikan dan variasi motor."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Peralatan Modern & Lengkap",
      description: "Menggunakan peralatan terkini dan tools khusus untuk memastikan hasil pemasangan yang presisi dan berkualitas."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garansi Pemasangan",
      description: "Memberikan garansi untuk setiap pemasangan dan layanan yang kami berikan demi kepuasan pelanggan."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Pelayanan Ramah & Profesional",
      description: "Konsultasi gratis dan pelayanan yang ramah untuk membantu Anda mendapatkan hasil variasi terbaik."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mengapa Memilih <span className="text-accent">ANRMOTOLIGHT</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kepercayaan pelanggan adalah prioritas utama kami. Inilah yang membuat ANRMOTOLIGHT menjadi pilihan terbaik untuk variasi lampu motor Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover-lift scroll-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  {feature.icon}
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-accent/20 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Tahun Pengalaman" },
              { number: "1000+", label: "Motor Dilayani" },
              { number: "50+", label: "Jenis Layanan" },
              { number: "100%", label: "Kepuasan Pelanggan" }
            ].map((stat, index) => (
              <div key={index} className="scroll-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;