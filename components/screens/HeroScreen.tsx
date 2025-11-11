
import React from 'react';
import { ScreenWrapper } from '../ui/ScreenWrapper';
import { Button } from '../ui/Button';
import { DownArrow } from '../ui/DownArrow';

interface ScreenProps {
  onNavigate: () => void;
}

export const HeroScreen: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <ScreenWrapper>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="flex-grow flex flex-col items-center justify-center space-y-6">
            <div className="p-4 bg-white border-4 border-black rounded-lg shadow-lg">
                <div className="grid grid-cols-3 gap-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black bg-white"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black bg-yellow-400"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black bg-green-500"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black bg-green-500"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black bg-white"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black bg-green-500"></div>
                </div>
            </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black">Best Shot</h1>
          <p className="text-xl md:text-3xl text-gray-700 max-w-lg">
            Your daily hole-in-one challenge.
          </p>
          <div className="pt-6">
            <Button onClick={onNavigate}>Take a Swing</Button>
          </div>
        </div>
        <DownArrow onClick={onNavigate} />
      </div>
    </ScreenWrapper>
  );
};
