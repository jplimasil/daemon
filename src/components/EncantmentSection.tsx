const EncantmentSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main title */}
          <h2 className="font-gothic text-3xl sm:text-4xl md:text-5xl text-mystical-gold mb-6 sm:mb-8">Encantamento Final</h2>
          
          {/* Mystical circle - responsive */}
          <div className="relative mb-8 sm:mb-12">
            <div className="w-36 h-36 sm:w-48 sm:h-48 mx-auto relative">
              {/* Outer circle */}
              <div className="absolute inset-0 border-2 border-mystical-gold rounded-full animate-pentagram-rotate"></div>
              
              {/* Middle circle */}
              <div className="absolute inset-4 sm:inset-6 border border-mystical-wine rounded-full animate-pentagram-rotate" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>
              
              {/* Inner symbols */}
              <div className="absolute inset-8 sm:inset-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-mystical-gold text-3xl sm:text-4xl mb-2 animate-glow">✦</div>
                  <div className="text-mystical-wine text-xl sm:text-2xl animate-glow" style={{ animationDelay: '1s' }}>♦</div>
                </div>
              </div>
              
              {/* Floating symbols around circle - adjusted for mobile */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 text-mystical-gold text-lg sm:text-xl animate-float">☾</div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 text-mystical-gold text-lg sm:text-xl animate-float" style={{ animationDelay: '2s' }}>✧</div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 text-mystical-gold text-lg sm:text-xl animate-float" style={{ animationDelay: '1s' }}>◇</div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 text-mystical-gold text-lg sm:text-xl animate-float" style={{ animationDelay: '3s' }}>⬟</div>
            </div>
          </div>

          {/* Main blessing */}
          <div className="space-y-6 sm:space-y-8">
            <div className="h-px bg-gradient-to-r from-transparent via-mystical-gold to-transparent w-3/4 mx-auto"></div>
            
            <p className="font-gothic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-mystical-gold leading-tight animate-fade-in-up px-4">
              Que nosso amor seja protegido,<br />
              nutrido e guiado
            </p>
            
            <div className="h-px bg-gradient-to-r from-transparent via-mystical-wine to-transparent w-1/2 mx-auto"></div>
            
            <p className="font-mystical text-base sm:text-lg md:text-xl text-mystical-gold/90 animate-fade-in-up px-4" style={{ animationDelay: '0.5s' }}>
              Sob o olhar dos que nos acompanham no invisível
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-mystical-gold to-transparent w-1/3 mx-auto"></div>

            {/* Signature blessing */}
            <div className="space-y-3 sm:space-y-4 animate-fade-in-up px-4" style={{ animationDelay: '1s' }}>
              <p className="font-mystical text-mystical-gold/80 text-base sm:text-lg">
                Pelos poderes de Sallos, Amon e Andras
              </p>
              <p className="font-mystical text-mystical-gold/70 text-sm sm:text-base">
                Pelo fogo da paixão, pela verdade do amor, pela proteção eterna
              </p>
              <p className="font-gothic text-mystical-gold text-lg sm:text-xl">
                Assim foi, assim é, assim será.
              </p>
            </div>

            {/* Final mystical elements */}
            <div className="flex justify-center space-x-6 sm:space-x-8 mt-8 sm:mt-12 text-mystical-gold/60 text-xl sm:text-2xl">
              <span className="animate-glow">✦</span>
              <span className="animate-glow" style={{ animationDelay: '0.5s' }}>☾</span>
              <span className="animate-glow" style={{ animationDelay: '1s' }}>✧</span>
            </div>

            {/* Date commemoration */}
            <div className="mt-12 sm:mt-16 p-4 sm:p-6 bg-mystical-darker-gray/50 border border-mystical-gold/20 rounded-lg backdrop-blur-sm mx-4 sm:mx-0">
              <p className="font-mystical text-mystical-gold/80 text-base sm:text-lg mb-2">
                Em celebração ao primeiro ciclo completo
              </p>
              <p className="font-gothic text-mystical-gold text-lg sm:text-xl">
                Um Ano de Magia ✦ 2024
              </p>
            </div>

            {/* Botão Nosso Jardim */}
            <div className="mt-8 sm:mt-12">
              <a 
                href="https://jardim.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 font-gothic text-lg sm:text-xl text-mystical-gold border-2 border-mystical-gold rounded-lg hover:bg-mystical-gold/10 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: '1.5s' }}
              >
                Nosso Jardim ✧
              </a>
            </div>
          </div>
        </div>

        {/* Floating mystical elements - hidden on small screens */}
        <div className="hidden sm:block absolute top-20 left-10 text-mystical-gold/20 text-3xl animate-float">⬟</div>
        <div className="hidden sm:block absolute top-40 right-16 text-mystical-wine/20 text-2xl animate-float" style={{ animationDelay: '2s' }}>♦</div>
        <div className="hidden sm:block absolute bottom-32 left-20 text-mystical-gold/20 text-2xl animate-float" style={{ animationDelay: '1s' }}>◇</div>
        <div className="hidden sm:block absolute bottom-20 right-12 text-mystical-wine/20 text-3xl animate-float" style={{ animationDelay: '3s' }}>✧</div>
        <div className="hidden lg:block absolute top-1/3 left-1/4 text-mystical-gold/10 text-4xl animate-float" style={{ animationDelay: '4s' }}>☾</div>
        <div className="hidden lg:block absolute bottom-1/3 right-1/4 text-mystical-wine/10 text-4xl animate-float" style={{ animationDelay: '2.5s' }}>✦</div>
      </div>
    </section>
  );
};

export default EncantmentSection;
