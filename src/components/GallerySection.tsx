import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ZoomIn } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import workshopImage from '@/assets/workshop.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: gallery1,
      title: "Modifikasi Lampu LED Custom",
      description: "Pemasangan sistem pencahayaan LED dengan desain custom untuk tampilan yang elegan dan modern."
    },
    {
      id: 2,
      image: gallery2,
      title: "HID Projector dengan Demon Eyes",
      description: "Instalasi HID projector dilengkapi dengan demon eyes RGB untuk pencahayaan optimal dan tampilan menawan."
    },
    {
      id: 3,
      image: workshopImage,
      title: "Workshop ANRMOTOLIGHT",
      description: "Fasilitas workshop modern dengan peralatan lengkap untuk memastikan hasil kerja yang berkualitas tinggi."
    },
    {
      id: 4,
      image: gallery1,
      title: "Angel Eyes RGB",
      description: "Pemasangan angel eyes dengan teknologi RGB yang dapat disesuaikan warnanya sesuai keinginan."
    },
    {
      id: 5,
      image: gallery2,
      title: "Mini Projector Installation",
      description: "Instalasi mini projector untuk pencahayaan fokus dengan kualitas cahaya yang sangat terang dan jernih."
    },
    {
      id: 6,
      image: workshopImage,
      title: "Variasi Lampu Alis",
      description: "Pemasangan lampu alis dengan berbagai pilihan warna dan desain untuk mempercantik tampilan motor."
    }
  ];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galeri <span className="text-accent">Proyek</span> Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat hasil kerja profesional kami dalam berbagai proyek variasi lampu motor yang telah kami kerjakan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group overflow-hidden card-shadow hover:shadow-card-hover border-0 cursor-pointer scroll-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(item.image)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 scroll-fade-in">
          <p className="text-muted-foreground mb-6">
            Ingin melihat motor Anda tampil menawan seperti ini? Konsultasikan dengan tim ahli kami!
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.open('https://wa.me/62895415532092?text=Halo%20ANRMOTOLIGHT%2C%20saya%20tertarik%20dengan%20hasil%20kerja%20di%20galeri%20dan%20ingin%20konsultasi.', '_blank')}
          >
            Konsultasi Proyek Anda
          </Button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors duration-300"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;