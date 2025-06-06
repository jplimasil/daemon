
import { useState } from 'react';

const TimelineSection = () => {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const timelineEvents = [
    {
      date: "Primeiro Encontro",
      title: "O Despertar dos Caminhos",
      description: "Nesse caso, nosso primeiro encontro ja faz mais de um ano, e relembrando cada momento desse enquanto escrevo essa 'linha do tempo' me tras lembranças de muitos sentimentos bons, MESMO VOCE CHEGANDO ATRASADA, quem diria, que ter te conhecido ali, ver um filme ruim de piscina assassina OKASOKDOSADOPASK, foi e esta sendo um dos marcos mais importantes da minha vida.",
      symbol: "✦",
      position: "left"
    },
    {
      date: "Primeira Conversa",
      title: "As Palavras",
      description: "Esse eu não tenho taaanta coisa a dissertar sobre, pois nessa questão fluiu de forma bem linear e suave, nunca falei muito sobre isso, mas voce chegou em um momento que eu estava bem descontente com as coisas, apesar de nesses dias iniciais a gente ter acabado de se conhecer e pa, ctg eu sentia uma intimidade absurda, se conhecendo a uns 10 dias, pra me ja parecia intimo, talvez por desde que vi voce, algo sempre perpetuou na minha cabeça que eu ja te vi antes, e ate hoje esporadicamente eu paro pra pensar, 'porra, de onde sera que eu te conheço'.",
      symbol: "☾",
      position: "right"
    },
    {
      date: "Primeiro Beijo",
      title: "O Selo",
      description: "Naquela rodoviaria de nova iguaçu cheirando a mijooooo, acho engraçado tbm o fato de voce sempre falar se não fosse voce eu não teria te beijado, tu apenas roubou minha cena, nosso beijo era inevitavel amor, lembro tbm de cada detalhe sobre esse dia.",
      symbol: "♦",
      position: "left"
    },
    {
      date: "Primeiro 'Eu Te Amo'",
      title: "O Encantamento Supremo",
      description: "Esse pra mim é uma grande conquista, anteriormente a isso, esta em São Paulo, longe de vc, foi uma grande luta de incertezas para todos os lados, principalmente por acha que ali seria o ponto onde cada um iria seguir sua vida, ou o famoso 'e se não der certo' eu ja sabia que te amava, mas ainda as coisas não estavam tão claras, desde sempre, mesmo sem namoro. ficar afastado de ti sempre foi uma tarefa complicada, e pelo alto esforço de ambos deu tudo certo, tudo caminhou como deveria ser, então saber que o amor era reciproco, foi um grande alivio, naquele piquenique que marcamos desde bem antes de eu voltar pra vc, saber que voce me amava e poder dizer o mesmo, foi um alivio enorme, mesmo voce bebona toda molenga.",
      symbol: "◇",
      position: "right"
    },
    {
      date: "Hoje",
      title: "Um Ciclo Completo",
      description: "365 dias, e hoje continuamos a seguir nesses mesmo principios. poderia escrever o dia inteiro tudo sobre a gente,mas para não se estender muito vamos para proxima pagina.",
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
