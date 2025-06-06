
import { useState } from 'react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - you can replace these with your actual photos
  const memories = [
    {
      id: 1,
      title: "Primeiros Momentos",
      description: "Quando tudo começou sob a luz das estrelas",
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Caminhadas Místicas",
      description: "Explorando os caminhos secretos da natureza",
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Luzes da Alma",
      description: "Momentos iluminados pelo amor",
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Conexões Profundas",
      description: "Quando duas almas se encontram no infinito",
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Rituais de Amor",
      description: "Celebrando nossa união sagrada",
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Eternidade",
      description: "Um amor que transcende o tempo",
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop",
    }
  ];

  return (
    <section className="min-h-screen py-20 sm:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-gothic text-3xl sm:text-4xl md:text-5xl text-mystical-gold mb-4">Galeria de Memórias</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-mystical-gold to-transparent w-2/3 sm:w-1/2 mx-auto mb-6"></div>
          <p className="font-mystical text-lg sm:text-xl text-mystical-gold/80">
            Fragmentos de nossa jornada capturados no tempo
          </p>
        </div>

        {/* Gallery grid - responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(selectedImage === index ? null : index)}
            >
              {/* Mystical frame */}
              <div className="relative overflow-hidden rounded-lg border-2 border-mystical-gold/30 hover:border-mystical-gold/60 transition-all duration-300">
                {/* Corner ornaments */}
                <div className="absolute top-2 left-2 text-mystical-gold/50 text-xs sm:text-sm z-10">✦</div>
                <div className="absolute top-2 right-2 text-mystical-gold/50 text-xs sm:text-sm z-10">✦</div>
                <div className="absolute bottom-2 left-2 text-mystical-gold/50 text-xs sm:text-sm z-10">✦</div>
                <div className="absolute bottom-2 right-2 text-mystical-gold/50 text-xs sm:text-sm z-10">✦</div>

                {/* Image with mystical overlay */}
                <div className="relative aspect-square">
                  <img
                    src={memory.src}
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Parchment-like overlay */}
                  <div className="absolute inset-0 bg-mystical-black/20 mix-blend-multiply"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-mystical-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-mystical-black/90 to-transparent p-3 sm:p-4">
                  <h3 className="font-gothic text-mystical-gold text-base sm:text-lg mb-1">{memory.title}</h3>
                  <p className="font-mystical text-mystical-gold/70 text-xs sm:text-sm">{memory.description}</p>
                </div>
              </div>

              {/* Expanded view - mobile optimized */}
              {selectedImage === index && (
                <div className="fixed inset-0 bg-mystical-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
                  <div className="relative w-full max-w-4xl max-h-[95vh] bg-mystical-darker-gray border-2 border-mystical-gold/50 rounded-lg overflow-hidden">
                    {/* Close button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(null);
                      }}
                      className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-mystical-black/80 text-mystical-gold rounded-full flex items-center justify-center hover:bg-mystical-gold hover:text-mystical-black transition-colors text-lg sm:text-xl"
                    >
                      ✕
                    </button>

                    {/* Expanded image */}
                    <img
                      src={memory.src}
                      alt={memory.title}
                      className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain"
                    />

                    {/* Expanded description */}
                    <div className="p-4 sm:p-6 bg-mystical-darker-gray">
                      <h3 className="font-gothic text-xl sm:text-2xl text-mystical-gold mb-3">{memory.title}</h3>
                      <div className="h-px bg-gradient-to-r from-transparent via-mystical-gold/50 to-transparent mb-3"></div>
                      <p className="font-mystical text-mystical-gold/80 leading-relaxed text-sm sm:text-base">{memory.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
