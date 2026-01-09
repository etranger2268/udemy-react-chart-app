'use client';

import { useDigitalClock } from '@/app/timer/_hooks/useDigitalClock';

export default function TimerPage() {
  const { currentTime } = useDigitalClock();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <h3 className="text-2xl text-center">{currentTime.toLocaleString()}</h3>
      </div>
    </div>
  );
}
