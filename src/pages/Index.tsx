
import { useState } from 'react';
import WelcomeSection from '@/components/WelcomeSection';
import TimelineSection from '@/components/TimelineSection';
import TrinitySection from '@/components/TrinitySection';
import GallerySection from '@/components/GallerySection';
import LetterSection from '@/components/LetterSection';
import EncantmentSection from '@/components/EncantmentSection';
import MysticParticles from '@/components/MysticParticles';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('welcome');

  return (
    <div className="min-h-screen bg-mystical-black relative overflow-hidden">
      {/* Mystical background pattern */}
      <div className="fixed inset-0 bg-parchment opacity-20"></div>
      
      {/* Floating particles */}
      <MysticParticles />
      
      {/* Navigation */}
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {/* Main content */}
      <main className="relative z-10">
        {currentSection === 'welcome' && <WelcomeSection />}
        {currentSection === 'timeline' && <TimelineSection />}
        {currentSection === 'trinity' && <TrinitySection />}
        {currentSection === 'gallery' && <GallerySection />}
        {currentSection === 'letter' && <LetterSection />}
        {currentSection === 'encantment' && <EncantmentSection />}
      </main>
    </div>
  );
};

export default Index;
