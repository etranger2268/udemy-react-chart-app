'use client';

import { useTrafficLight } from '@/app/traffic-light/_hooks/useTrafficLight';

export default function TrafficLightPage() {
  const { light } = useTrafficLight();

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
