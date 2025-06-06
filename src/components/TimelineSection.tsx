
import { useState } from 'react';

const TimelineSection = () => {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const timelineEvents = [
    {
      date: "Primeiro Encontro",
      title: "O Despertar dos Caminhos",
      description: "Quando nossos olhares se cruzaram, o universo sussurrou segredos antigos.",
      symbol: "✦",
      position: "left"
    },
    {
      date: "Primeira Conversa",
      title: "As Palavras como Encantamentos",
      description: "Cada palavra trocada tecia fios dourados entre nossas almas.",
      symbol: "☾",
      position: "right"
    },
    {
      date: "Primeiro Beijo",
      title: "O Selo do Destino",
      description: "Sob a proteção dos astros, selamos nossa união com o primeiro beijo.",
      symbol: "♦",
      position: "left"
    },
    {
      date: "Primeiro 'Eu Te Amo'",
      title: "O Encantamento Supremo",
      description: "As três palavras mais poderosas ecoaram entre os planos visível e invisível.",
      symbol: "◇",
      position: "right"
    },
    {
      date: "Hoje",
      title: "Um Ciclo Completo",
      description: "365 dias de magia, proteção e amor sob o olhar dos guardiões.",
      symbol: "✧",
      position: "left"
    }
  ];

  return (
    <section className="min-h-screen py-20 sm:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-gothic text-3xl sm:text-4xl md:text-5xl text-mystical-gold mb-4">Nossa História</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-mystical-gold to-transparent w-2/3 sm:w-1/2 mx-auto mb-4"></div>
          <p className="font-mystical text-lg sm:text-xl text-mystical-gold/80 px-4">Os marcos de nossa jornada mística</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central timeline line - hidden on mobile, shown as left line on larger screens */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-mystical-gold via-mystical-wine to-mystical-gold"></div>
          
          {/* Mobile timeline line */}
          <div className="sm:hidden absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-mystical-gold via-mystical-wine to-mystical-gold"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 sm:mb-16 ${
                // Mobile: always left-aligned, Desktop: alternating
                'sm:' + (event.position === 'left' ? 'flex-row-reverse' : 'flex-row')
              }`}
              onMouseEnter={() => setHoveredEvent(index)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              {/* Content card */}
              <div className={`w-full sm:w-5/12 ml-16 sm:ml-0 ${
                event.position === 'left' ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'
              }`}>
                <div className={`bg-mystical-darker-gray/80 backdrop-blur-sm border border-mystical-gold/20 rounded-lg p-4 sm:p-6 transition-all duration-300 ${
                  hoveredEvent === index ? 'shadow-lg shadow-mystical-gold/20 scale-105' : ''
                }`}>
                  <div className="text-mystical-gold font-mystical text-sm mb-2">{event.date}</div>
                  <h3 className="font-gothic text-lg sm:text-xl text-mystical-gold mb-3">{event.title}</h3>
                  <p className="font-mystical text-mystical-gold/80 leading-relaxed text-sm sm:text-base">{event.description}</p>
                </div>
              </div>

              {/* Central symbol */}
              <div className="absolute left-2 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-12 h-12 bg-mystical-darker-gray border-2 border-mystical-gold rounded-full flex items-center justify-center z-10">
                <span className="text-mystical-gold text-xl animate-glow">{event.symbol}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
