import React from 'react';
import { clockTheme } from './theme';

const ClockFace = () => {
  const markers = Array.from({ length: 12 }, (_, i) => {
    const isQuarter = i % 3 === 0;
    const markerClass = isQuarter 
      ? clockTheme.marker.quarter
      : `${clockTheme.marker.hour} w-1 h-4`;

    return (
      <div
        key={i}
        className={`absolute left-1/2 -translate-x-1/2 ${markerClass} transition-all duration-300`}
        style={{
          transform: `rotate(${i * 30}deg) translateY(-190px) translateX(-50%)`,
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {markers}
    </div>
  );
};

export default ClockFace;