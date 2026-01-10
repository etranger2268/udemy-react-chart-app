import { useEffect, useState } from 'react';

type UseStopwatchReturn = {
  seconds: number;
  isActive: boolean;
  toggle: () => void;
  handleResetClick: () => void;
};

type UseStopwatchType = () => UseStopwatchReturn;

export const useStopwatch: UseStopwatchType = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    if (isActive) {
      timerId = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isActive]);

  const toggle = () => setIsActive((prev) => !prev);
  const handleResetClick = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return { seconds, isActive, toggle, handleResetClick };
};
