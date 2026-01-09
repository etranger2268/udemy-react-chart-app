'use client';

import { useEffect, useState } from 'react';
import { INITIAL_LIGHT, type LightType, NEXT_LIGHTS } from '@/app/traffic-light/constants';

export default function TrafficLightPage() {
  const [light, setLight] = useState<LightType>(INITIAL_LIGHT);
  useEffect(() => {
    const timerId = setInterval(() => setLight((prev) => NEXT_LIGHTS[prev]), 1000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center gap-4">
        <div
          className={`size-12 rounded-full  ${light === 'red' ? 'bg-red-500' : 'bg-gray-500'}`}
        />
        <div
          className={`size-12 rounded-full  ${light === 'yellow' ? 'bg-yellow-500' : 'bg-gray-500'}`}
        />
        <div
          className={`size-12 rounded-full  ${light === 'green' ? 'bg-green-500' : 'bg-gray-500'}`}
        />
      </div>
    </div>
  );
}
