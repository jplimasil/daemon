
import { useState } from 'react';

const TrinitySection = () => {
  const [selectedDaemon, setSelectedDaemon] = useState<string | null>(null);

  const daemons = [
    {
      name: "Sallos",
      title: "O Protetor do Amor",
      description: "Sallos, grande duque dos infernos, governa 30 legiões e é conhecido por promover o amor entre homem e mulher. Ele fortalece os laços românticos e protege contra a separação.",
      symbol: "/lovable-uploads/02791158-6d36-40af-a117-d5120769c348.png",
      isImage: true,
      element: ". A água é o elemento mais comumente associado ao amor, emoções e relacionamentos",
      protection: "Amor Duradouro",
      color: "text-mystical-crimson"
    },
    {
      name: "Amon",
      title: "O Revelador de Verdades",
      description: "Amon, marquês poderoso, comanda 40 legiões e revela o passado e o futuro. Ele fortalece a amizade e reconcilia inimigos, trazendo harmonia aos relacionamentos.",
      symbol: "/lovable-uploads/889a7366-6e79-4320-8b95-298c0243f604.png",
      isImage: true,
      element: ". Amon é mais comumente associado ao elemento Fogo, tanto por sua iconografia quanto por sua natureza energética e emocionalmente intensa.",
      protection: "Verdade e Harmonia",
      color: "text-mystical-gold"
    },
    {
      name: "Andras",
      title: "O Instigador do Caos",
      description: "Andras, grande marquês, lidera 30 legiões e semeia discórdia entre inimigos enquanto protege aqueles que o honram. Ele intensifica a paixão e remove obstáculos do amor.",
      symbol: "/lovable-uploads/87c1b9af-7e6e-4806-8f3f-68b81f518799.png",
      isImage: true,
      element: ". comumente associado ao Fogo, por sua natureza destrutiva, violenta e caótica.",
      protection: "conflito",
      color: "text-mystical-wine"
    }
  ];

  return (
    <section className="min-h-screen py-20 sm:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-gothic text-3xl sm:text-4xl md:text-5xl text-mystical-gold mb-4">A Trindade da Proteção</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-mystical-gold to-transparent w-2/3 sm:w-1/2 mx-auto mb-6"></div>
          <p className="font-mystical text-lg sm:text-xl text-mystical-gold/80 max-w-3xl mx-auto px-4">
            Sua trindade de daemons escolhidos para abençoar e proteger nossa união eternamente
          </p>
        </div>

        {/* Trinity arrangement */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central mystical circle - smaller on mobile */}
          <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 border-2 border-mystical-gold/30 rounded-full animate-pentagram-rotate">
            <div className="absolute inset-3 sm:inset-4 border border-mystical-gold/20 rounded-full">
              <div className="absolute inset-1 sm:inset-2 bg-mystical-gold/10 rounded-full flex items-center justify-center">
                <span className="text-mystical-gold text-lg sm:text-2xl">✦</span>
              </div>
            </div>
          </div>

          {/* Daemon cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-16">
            {daemons.map((daemon, index) => (
              <div
                key={daemon.name}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  selectedDaemon === daemon.name ? 'scale-105' : ''
                }`}
                onClick={() => setSelectedDaemon(selectedDaemon === daemon.name ? null : daemon.name)}
              >
                <div className="bg-mystical-darker-gray/80 backdrop-blur-sm border border-mystical-gold/20 rounded-lg p-4 sm:p-6 h-full hover:shadow-lg hover:shadow-mystical-gold/20 transition-all duration-300">
                  {/* Daemon symbol and name */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 animate-glow flex justify-center items-center h-16 sm:h-20">
                      {daemon.isImage ? (
                        <img 
                          src={daemon.symbol} 
                          alt={`Sigilo de ${daemon.name}`}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      ) : (
                        <span>{daemon.symbol}</span>
                      )}
                    </div>
                    <h3 className={`font-gothic text-xl sm:text-2xl mb-2 ${daemon.color}`}>{daemon.name}</h3>
                    <div className="h-px bg-gradient-to-r from-transparent via-mystical-gold/50 to-transparent w-1/2 mx-auto mb-2"></div>
                    <p className="font-mystical text-mystical-gold/80 text-sm">{daemon.title}</p>
                  </div>

                  {/* Basic info always visible */}
                  <div className="space-y-2 sm:space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-mystical-gold/60">Elemento:</span>
                      <span className="text-mystical-gold">{daemon.element}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-mystical-gold/60">Proteção:</span>
                      <span className="text-mystical-gold">{daemon.protection}</span>
                    </div>
                  </div>

                  {/* Expanded description */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    selectedDaemon === daemon.name ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="h-px bg-gradient-to-r from-transparent via-mystical-gold/30 to-transparent mb-3 sm:mb-4"></div>
                    <p className="font-mystical text-mystical-gold/80 leading-relaxed text-sm">
                      {daemon.description}
                    </p>
                  </div>

                  {/* Click indicator */}
                  <div className="text-center mt-3 sm:mt-4">
                    <span className="text-mystical-gold/40 text-xs font-mystical">
                      {selectedDaemon === daemon.name ? 'Toque para recolher' : 'Toque para expandir'}
                    </span>
                  </div>
                </div>

                {/* Floating mystical elements */}
                <div className="absolute -top-2 -right-2 text-mystical-gold/30 animate-float text-sm">✧</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrinitySection;
