
import React from 'react';

interface PhoneMockupProps {
  imageUrl: string;
  altText: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ imageUrl, altText }) => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[450px] w-[225px] sm:h-[550px] sm:w-[275px] md:h-[600px] md:w-[300px] shadow-2xl">
      <div className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] bg-gray-800 top-0 rounded-full absolute -start-[14px] sm:-start-[16px] md:-start-[18px] start-1/2 -translate-x-1/2"></div>
      <div className="h-[32px] w-[2px] sm:h-[42px] md:h-[46px] bg-gray-800 absolute -start-[12px] sm:-start-[14px] md:-start-[16px] top-[90px] rounded-s-lg"></div>
      <div className="h-[32px] w-[2px] sm:h-[42px] md:h-[46px] bg-gray-800 absolute -start-[12px] sm:-start-[14px] md:-start-[16px] top-[140px] rounded-s-lg"></div>
      <div className="h-[48px] w-[2px] sm:h-[60px] md:h-[64px] bg-gray-800 absolute -end-[12px] sm:-end-[14px] md:-end-[16px] top-[110px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
        <img src={imageUrl} className="w-full h-full object-cover" alt={altText} />
      </div>
    </div>
  );
};
