
interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Navigation = ({ currentSection, setCurrentSection }: NavigationProps) => {
  const sections = [
    { id: 'welcome', label: 'Boas-Vindas', symbol: '⬟' },
    { id: 'timeline', label: 'Nossa História', symbol: '☾' },
    { id: 'trinity', label: 'A Trindade', symbol: '✦' },
    { id: 'gallery', label: 'Memórias', symbol: '◇' },
    { id: 'letter', label: 'Carta Selada', symbol: '♦' },
    { id: 'encantment', label: 'Encantamento', symbol: '✧' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mystical-black/90 backdrop-blur-sm border-b border-mystical-gold/20">
      <div className="container mx-auto px-2 py-3">
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg transition-all duration-300 font-mystical text-xs sm:text-sm md:text-base min-h-[40px] ${
                currentSection === section.id
                  ? 'bg-mystical-gold text-mystical-black shadow-lg shadow-mystical-gold/20'
                  : 'text-mystical-gold hover:bg-mystical-gold/10 hover:text-mystical-gold'
              }`}
            >
              <span className="text-sm sm:text-lg">{section.symbol}</span>
              <span className="hidden xs:inline sm:text-sm">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
