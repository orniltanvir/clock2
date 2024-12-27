import React from 'react';
import { clockTheme } from './theme';
import { calculateRotation } from './utils';

interface ClockHandsProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const ClockHands: React.FC<ClockHandsProps> = ({ hours, minutes, seconds }) => {
  const minuteRotation = calculateRotation(minutes, 'minutes');
  const hourRotation = calculateRotation(hours, 'hours') + (minutes / 60) * 30;
  const secondRotation = calculateRotation(seconds, 'seconds');

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Hour Hand */}
      <div 
        className={`absolute w-1.5 h-24 origin-center rounded-full ${clockTheme.hands.hour}`}
        style={{ transform: `rotate(${hourRotation}deg) translateY(-12px)` }}
      />
      
      {/* Minute Hand */}
      <div 
        className={`absolute w-1 h-32 origin-center rounded-full ${clockTheme.hands.minute}`}
        style={{ transform: `rotate(${minuteRotation}deg) translateY(-16px)` }}
      />
      
      {/* Second Hand */}
      <div 
        className={`absolute w-0.5 h-36 origin-center rounded-full ${clockTheme.hands.second}`}
        style={{ transform: `rotate(${secondRotation}deg) translateY(-18px)` }}
      />
      
      {/* Center Pin */}
      <div className={`absolute w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 ${clockTheme.hands.pin}`} />
    </div>
  );
};

export default ClockHands;