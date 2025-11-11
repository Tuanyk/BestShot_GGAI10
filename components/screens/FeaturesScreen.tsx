
import React from 'react';
import { ScreenWrapper } from '../ui/ScreenWrapper';
import { PhoneMockup } from '../ui/PhoneMockup';
import { DownArrow } from '../ui/DownArrow';

interface ScreenProps {
  onNavigate: () => void;
}

export const FeaturesScreen: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <ScreenWrapper>
      <div className="grid md:grid-cols-2 gap-10 items-center w-full h-full">
        <div className="flex flex-col text-center md:text-left items-center md:items-start space-y-6 order-2 md:order-1">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black">A New Challenge, Daily.</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-md">
            Every 24 hours, a new, beautifully crafted 3D hole awaits. It’s a fresh chance to prove your skill and top the leaderboard.
          </p>
           <ul className="space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">✓</span>
              <span className="text-gray-700 text-lg">Stunning 3D Courses</span>
            </li>
            <li className="flex items-center space-x-3">
               <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">✓</span>
              <span className="text-gray-700 text-lg">Intuitive Swing Controls</span>
            </li>
            <li className="flex items-center space-x-3">
               <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">✓</span>
              <span className="text-gray-700 text-lg">Daily Global Tournaments</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2 flex justify-center items-center">
          <PhoneMockup imageUrl="https://picsum.photos/id/1015/300/600" altText="App screenshot showing a golf course" />
        </div>
      </div>
      <DownArrow onClick={onNavigate} />
    </ScreenWrapper>
  );
};
