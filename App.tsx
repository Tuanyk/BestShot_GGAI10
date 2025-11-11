
import React, { useState, useCallback } from 'react';
import { HeroScreen } from './components/screens/HeroScreen';
import { FeaturesScreen } from './components/screens/FeaturesScreen';
import { HowItWorksScreen } from './components/screens/HowItWorksScreen';
import { LeaderboardScreen } from './components/screens/LeaderboardScreen';
import { SignUpScreen } from './components/screens/SignUpScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    HeroScreen,
    FeaturesScreen,
    HowItWorksScreen,
    LeaderboardScreen,
    SignUpScreen,
  ];
  
  const totalScreens = screens.length;

  const navigateTo = useCallback((screenIndex: number) => {
    if (screenIndex >= 0 && screenIndex < totalScreens) {
      setCurrentScreen(screenIndex);
    }
  }, [totalScreens]);
  
  const navigateNext = useCallback(() => {
      setCurrentScreen(prev => (prev + 1) % totalScreens);
  }, [totalScreens]);


  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#EFEFEF]">
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/>
        </svg>
        <span className="font-bold text-xl tracking-tighter">BEST SHOT</span>
      </div>

      <div className="absolute top-4 right-4 z-20 hidden md:flex items-center space-x-2">
        {Array.from({ length: totalScreens }).map((_, index) => (
           <button 
              key={index}
              onClick={() => navigateTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${currentScreen === index ? 'bg-black w-6' : 'bg-gray-400 hover:bg-gray-600'}`}
              aria-label={`Go to screen ${index + 1}`}
            />
        ))}
      </div>


      {screens.map((ScreenComponent, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 h-full w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateY(${(index - currentScreen) * 100}%)` }}
        >
          <ScreenComponent onNavigate={navigateNext} />
        </div>
      ))}
    </div>
  );
};

export default App;
