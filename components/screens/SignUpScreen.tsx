
import React, { useState } from 'react';
import { ScreenWrapper } from '../ui/ScreenWrapper';

interface ScreenProps {
  onNavigate: () => void; // This prop is unused here but kept for consistency
}

export const SignUpScreen: React.FC<ScreenProps> = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setSubmitted(true);
    }
  };

  return (
    <ScreenWrapper>
      <div className="flex flex-col items-center space-y-6 max-w-2xl">
        <img src="https://picsum.photos/id/1060/200/200" className="w-48 h-48 rounded-full shadow-2xl border-4 border-white object-cover" alt="Golf ball close up"/>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black">The Green is Calling.</h2>
        <p className="text-lg md:text-xl text-gray-600">
          Best Shot is coming soon. Be the first to know when the tee time is set. No spam, just a one-time notification.
        </p>
        
        {submitted ? (
          <div className="text-center bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl" role="alert">
            <strong className="font-bold">You're on the list!</strong>
            <span className="block sm:inline"> We'll notify you at <span className="font-semibold">{email}</span> when we launch.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3 pt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="flex-grow px-6 py-4 text-lg text-gray-800 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-50"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </ScreenWrapper>
  );
};
