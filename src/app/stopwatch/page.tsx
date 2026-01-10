'use client';
import { useEffect, useState } from 'react';

export default function Stopwatch() {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    if (isActive) {
      timerId = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    } else {
      if (timerId) clearInterval(timerId);
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

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <div className="space-y-4">
          <h2 className="text-2xl">時間: {seconds}秒</h2>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={toggle}
              className="bg-blue-500 py-2 px-4 text-white text-sm font-medium rounded-md transition-all duration-100 hover:opacity-75"
            >
              {!isActive ? 'Start' : 'Stop'}
            </button>
            <button
              type="button"
              onClick={handleResetClick}
              className="bg-blue-500 py-2 px-4 text-white text-sm font-medium rounded-md transition-all duration-100 hover:opacity-75"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
