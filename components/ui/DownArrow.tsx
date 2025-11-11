
import React from 'react';

interface DownArrowProps {
  onClick: () => void;
}

export const DownArrow: React.FC<DownArrowProps> = ({ onClick }) => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <button onClick={onClick} className="animate-bounce p-2" aria-label="Go to next section">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};
