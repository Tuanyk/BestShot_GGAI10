
import React from 'react';
import { ScreenWrapper } from '../ui/ScreenWrapper';
import { DownArrow } from '../ui/DownArrow';

interface ScreenProps {
  onNavigate: () => void;
}

const InfoCard: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-left transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold">
                {number}
            </div>
            <div>
                <h3 className="text-xl font-bold text-black">{title}</h3>
            </div>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
    </div>
);


export const HowItWorksScreen: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <ScreenWrapper>
      <div className="flex flex-col items-center space-y-8 w-full max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black">Master Your Shot</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Every shot counts, but strategy is key. Use your attempts wisely to get that perfect score.
        </p>
        <div className="grid md:grid-cols-3 gap-6 w-full pt-4">
            <InfoCard 
                number="1" 
                title="Practice"
                description="Use practice shots to get a feel for the wind, green, and slope. No pressure, just pure practice."
            />
            <InfoCard 
                number="2" 
                title="Best Shot"
                description="This is it. The one that counts. Take your best shot to register your score on the daily leaderboard."
            />
            <InfoCard 
                number="3" 
                title="Mulligan"
                description="Not happy with your Best Shot? Use a Mulligan for a second chance at glory. Make it count!"
            />
        </div>
      </div>
      <DownArrow onClick={onNavigate} />
    </ScreenWrapper>
  );
};
