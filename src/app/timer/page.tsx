'use client';

import { useEffect, useState } from 'react';

export default function TimerPage() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <h3 className="text-2xl text-center">{currentTime.toLocaleString()}</h3>
      </div>
    </div>
  );
}
