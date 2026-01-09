import { useEffect, useState } from 'react';

type UseDigitalClockReturn = {
  currentTime: Date;
};

type UseDigitalClockType = () => UseDigitalClockReturn;

export const useDigitalClock: UseDigitalClockType = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return { currentTime };
};
