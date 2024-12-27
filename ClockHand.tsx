import React from 'react';
import { calculateRotation } from './utils';
import { clockTheme } from './theme';

interface ClockHandProps {
  value: number;
  count: number;
  size: string;
  radius: number;
  spacing: number;
  opacityStep: number;
  type: 'hours' | 'minutes' | 'seconds';
}

const ClockHand: React.FC<ClockHandProps> = ({
  value,
  count,
  size,
  radius,
  spacing,
  opacityStep,
  type,
}) => {
  const positions = [];
  const baseRotation = calculateRotation(value, type);
  
  for (let i = 0; i < count; i++) {
    const rotation = baseRotation + (i * spacing);
    const displayValue = type === 'hours' && value === 0 ? 12 : value;
    const isActive = i === 0;
    
    const theme = clockTheme.numbers[type];
    const colorClass = isActive ? theme.active : theme.inactive;
    
    positions.push(
      <div
        key={i}
        className={`
          absolute ${size} font-mono font-bold
          px-2 py-0.5 rounded-md border
          transition-all duration-300 ease-in-out
          -translate-x-1/2
          ${colorClass}
        `}
        style={{
          transform: `rotate(${rotation}deg) translateY(-${radius}px) rotate(-${rotation}deg) translateX(-50%)`,
          opacity: i === 0 ? 1 : 1 - (i * opacityStep),
        }}
      >
        {displayValue.toString().padStart(2, '0')}
      </div>
    );
  }

  return <>{positions}</>;
};

export default ClockHand;