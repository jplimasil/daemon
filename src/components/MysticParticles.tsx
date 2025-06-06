
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
}

const MysticParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          duration: Math.random() * 3 + 2,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-mystical-gold rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${Math.random() * 2}s`,
            boxShadow: '0 0 6px currentColor',
          }}
        />
      ))}
      
      {/* Mystic symbols floating */}
      <div className="absolute top-20 left-10 text-mystical-gold opacity-30 animate-float text-2xl">✦</div>
      <div className="absolute top-40 right-20 text-mystical-gold opacity-20 animate-float text-xl" style={{ animationDelay: '1s' }}>⬟</div>
      <div className="absolute bottom-32 left-1/4 text-mystical-gold opacity-25 animate-float text-lg" style={{ animationDelay: '2s' }}>☾</div>
      <div className="absolute bottom-20 right-1/3 text-mystical-gold opacity-20 animate-float text-xl" style={{ animationDelay: '0.5s' }}>✧</div>
    </div>
  );
};

export default MysticParticles;
