
import React from 'react';
import { ScreenWrapper } from '../ui/ScreenWrapper';
import { PhoneMockup } from '../ui/PhoneMockup';
import { DownArrow } from '../ui/DownArrow';

interface ScreenProps {
  onNavigate: () => void;
}

export const LeaderboardScreen: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <ScreenWrapper>
      <div className="grid md:grid-cols-2 gap-10 items-center w-full h-full">
        <div className="flex justify-center items-center">
            <PhoneMockup imageUrl="https://picsum.photos/id/23/300/600" altText="App screenshot showing leaderboard" />
        </div>
        <div className="flex flex-col text-center md:text-left items-center md:items-start space-y-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black">Climb The Ranks</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-md">
            Compete against players from around the world. Earn your spot at the top of the daily leaderboard and claim ultimate bragging rights.
          </p>
          <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 w-full max-w-md">
            <h4 className="font-bold text-left mb-2 text-black">Today's Top 3</h4>
            <div className="space-y-2">
                <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                    <span className="font-bold text-lg mr-3">🥇</span>
                    <span className="flex-grow">Player_One</span>
                    <span className="font-semibold text-green-600">0.01 yds</span>
                </div>
                 <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                    <span className="font-bold text-lg mr-3">🥈</span>
                    <span className="flex-grow">GolfPro_99</span>
                    <span className="font-semibold text-green-600">0.03 yds</span>
                </div>
                 <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                    <span className="font-bold text-lg mr-3">🥉</span>
                    <span className="flex-grow">AceMaker</span>
                    <span className="font-semibold text-green-600">0.05 yds</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <DownArrow onClick={onNavigate} />
    </ScreenWrapper>
  );
};
