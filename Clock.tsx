import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const getSecondPositions = () => {
    const positions = [];
    for (let i = 0; i < 15; i++) {
      const rotation = (seconds * 6) + (i * 2);
      positions.push(
        <div
          key={`s${i}`}
          className="absolute text-sm font-mono"
          style={{
            transform: `rotate(${rotation}deg) translateX(80px) rotate(-${rotation}deg)`,
            opacity: i === 0 ? 1 : 1 - (i * 0.1),
          }}
        >
          {seconds}
        </div>
      );
    }
    return positions;
  };

  const getMinutePositions = () => {
    const positions = [];
    for (let i = 0; i < 6; i++) {
      const rotation = (minutes * 6) + (i * 4);
      positions.push(
        <div
          key={`m${i}`}
          className="absolute text-base font-mono"
          style={{
            transform: `rotate(${rotation}deg) translateX(60px) rotate(-${rotation}deg)`,
            opacity: i === 0 ? 1 : 1 - (i * 0.2),
          }}
        >
          {minutes}
        </div>
      );
    }
    return positions;
  };

  const getHourPositions = () => {
    const positions = [];
    for (let i = 0; i < 3; i++) {
      const rotation = (hours * 30) + (minutes / 2) + (i * 6);
      positions.push(
        <div
          key={`h${i}`}
          className="absolute text-lg font-mono font-bold"
          style={{
            transform: `rotate(${rotation}deg) translateX(40px) rotate(-${rotation}deg)`,
            opacity: i === 0 ? 1 : 1 - (i * 0.3),
          }}
        >
          {hours === 0 ? 12 : hours}
        </div>
      );
    }
    return positions;
  };

  return (
    <div className="relative w-[200px] h-[200px] rounded-full border-4 border-gray-200 bg-white">
      <div className="absolute inset-0 flex items-center justify-center">
        {getHourPositions()}
        {getMinutePositions()}
        {getSecondPositions()}
      </div>
    </div>
  );
};

export default Clock;