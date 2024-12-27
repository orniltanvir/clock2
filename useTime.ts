import { useState, useEffect } from 'react';

export const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return {
    hours: time.getHours() % 12,
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };
};