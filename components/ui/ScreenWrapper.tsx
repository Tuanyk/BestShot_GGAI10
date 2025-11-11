
import React from 'react';

interface ScreenWrapperProps {
  children: React.ReactNode;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center p-4 sm:p-8 bg-[#EFEFEF]">
      <div className="container mx-auto flex h-full w-full flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
};
