
const WelcomeSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24 px-4">
      <div className="container mx-auto text-center">
        {/* Mystical pentagram */}
        <div className="relative mb-8 sm:mb-12">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto relative">
            <img 
              src="/lovable-uploads/b132e5fc-08ac-43d1-afe8-b14d6fa32ff5.png" 
              alt="Pentagrama Místico"
              className="w-full h-full object-contain animate-glow"
            />
          </div>
        </div>

        {/* Main quote */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <h1 className="font-gothic text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-mystical-gold leading-tight animate-fade-in-up px-4">
            Pela união dos caminhos
          </h1>
          
          <div className="h-px bg-gradient-to-r from-transparent via-mystical-gold to-transparent w-2/3 sm:w-1/2 mx-auto"></div>
          
          <p className="font-mystical text-base sm:text-lg md:text-xl lg:text-2xl text-mystical-gold/90 leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.5s' }}>
            Selados sob os olhos de Sallos, Amon e Andras,<br className="hidden sm:block" />
            <span className="block sm:inline"> celebramos um ciclo de amor, desejo e proteção.</span>
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-mystical-gold to-transparent w-1/2 sm:w-1/3 mx-auto"></div>

          <div className="text-mystical-gold/70 font-mystical text-base sm:text-lg animate-fade-in-up px-4" style={{ animationDelay: '1s' }}>
            <p className="mb-2">✦ Um Ano de Magia ✦</p>
            <p className="text-sm sm:text-base">Entre o visível e o invisível, nossa história se escreve</p>
          </div>
        </div>

        {/* Floating mystical symbols - hidden on small screens */}
        <div className="hidden md:block absolute top-1/4 left-10 text-mystical-gold/30 text-4xl animate-float">☾</div>
        <div className="hidden md:block absolute bottom-1/4 right-10 text-mystical-gold/30 text-4xl animate-float" style={{ animationDelay: '2s' }}>✧</div>
        <div className="hidden lg:block absolute top-1/3 right-20 text-mystical-gold/20 text-3xl animate-float" style={{ animationDelay: '1s' }}>◇</div>
        <div className="hidden lg:block absolute bottom-1/3 left-20 text-mystical-gold/20 text-3xl animate-float" style={{ animationDelay: '3s' }}>♦</div>
      </div>
    </section>
  );
};

export default WelcomeSection;
