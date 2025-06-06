
import { useState } from 'react';

const LetterSection = () => {
  const [isOpened, setIsOpened] = useState(false);

  const letterContent = `Eu te amo igual Galileu amou as estrelas

Eu te amo igual Johannes Kepler amou as órbitas...

Eu te amo igual Narciso amou seu reflexo

Eu te amo igual Asteria amou o céu noturno

Eu te amo igual John Dee amou os Anjos

Eu te amo igual Giordano Bruno amou o infinito

Eu te amo igual Eliphas Levi amou o Baphomet.

Seu eterno companheiro`;

  return (
    <section className="min-h-screen py-20 sm:py-24 flex items-center justify-center relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-gothic text-3xl sm:text-4xl md:text-5xl text-mystical-gold mb-4">Carta Selada</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-mystical-gold to-transparent w-2/3 sm:w-1/2 mx-auto mb-6"></div>
          <p className="font-mystical text-lg sm:text-xl text-mystical-gold/80">
            Uma mensagem do coração, selada com magia antiga
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {!isOpened ? (
            // Sealed letter
            <div className="relative">
              {/* Parchment background */}
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-6 sm:p-8 rounded-lg shadow-2xl border-4 border-mystical-gold/30 transform rotate-1">
                {/* Wax seal */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-mystical-crimson rounded-full border-4 border-mystical-gold flex items-center justify-center shadow-lg">
                  <span className="text-mystical-gold text-lg sm:text-2xl">♦</span>
                </div>

                {/* Address */}
                <div className="text-center mb-6 sm:mb-8 pt-4">
                  <div className="font-gothic text-mystical-black text-xl sm:text-2xl mb-2">Para Minha Amada</div>
                  <div className="h-px bg-mystical-gold/30 w-1/2 mx-auto"></div>
                </div>

                {/* Decorative elements */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="h-px bg-mystical-black/20 mx-6 sm:mx-8"></div>
                  <div className="h-px bg-mystical-black/20 mx-8 sm:mx-12"></div>
                  <div className="h-px bg-mystical-black/20 mx-4 sm:mx-6"></div>
                  <div className="h-px bg-mystical-black/20 mx-12 sm:mx-16"></div>
                  <div className="h-px bg-mystical-black/20 mx-6 sm:mx-8"></div>
                </div>

                {/* Mystical symbols in corners */}
                <div className="absolute top-4 left-4 text-mystical-gold/50 text-base sm:text-lg">✦</div>
                <div className="absolute bottom-4 left-4 text-mystical-gold/50 text-base sm:text-lg">☾</div>
                <div className="absolute bottom-4 right-16 sm:right-20 text-mystical-gold/50 text-base sm:text-lg">✧</div>

                {/* Open button */}
                <div className="text-center mt-6 sm:mt-8">
                  <button
                    onClick={() => setIsOpened(true)}
                    className="bg-mystical-black text-mystical-gold px-6 sm:px-8 py-3 rounded-lg font-mystical text-base sm:text-lg hover:bg-mystical-gold hover:text-mystical-black transition-all duration-300 shadow-lg hover:shadow-mystical-gold/20"
                  >
                    Quebrar o Selo ♦
                  </button>
                </div>
              </div>

              {/* Floating mystical elements */}
              <div className="absolute -top-4 -left-4 text-mystical-gold/30 text-2xl sm:text-3xl animate-float">✧</div>
              <div className="absolute -bottom-4 -right-4 text-mystical-gold/30 text-2xl sm:text-3xl animate-float" style={{ animationDelay: '1s' }}>☾</div>
            </div>
          ) : (
            // Opened letter
            <div className="relative animate-fade-in-up">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 sm:p-8 rounded-lg shadow-2xl border-2 border-mystical-gold/50">
                {/* Letter header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="font-gothic text-mystical-black text-2xl sm:text-3xl mb-4">Carta</div>
                  <div className="h-px bg-gradient-to-r from-transparent via-mystical-gold to-transparent mb-4"></div>
                  <div className="text-mystical-gold text-base sm:text-lg">Sob a Proteção</div>
                </div>

                {/* Letter content - mobile optimized */}
                <div className="space-y-4 sm:space-y-6 text-mystical-black/90 font-mystical leading-relaxed max-h-60 sm:max-h-none overflow-y-auto sm:overflow-visible">
                  {letterContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-sm sm:text-base md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Close button */}
                <div className="text-center mt-6 sm:mt-8">
                  <button
                    onClick={() => setIsOpened(false)}
                    className="bg-mystical-black text-mystical-gold px-4 sm:px-6 py-2 rounded-lg font-mystical text-sm sm:text-base hover:bg-mystical-gold hover:text-mystical-black transition-all duration-300"
                  >
                    Selar Novamente
                  </button>
                </div>
              </div>

              {/* Broken seal pieces */}
              <div className="absolute top-4 right-4 text-mystical-crimson/50 text-sm animate-float">♦</div>
              <div className="absolute top-8 right-8 text-mystical-crimson/30 text-xs animate-float" style={{ animationDelay: '0.5s' }}>♦</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
