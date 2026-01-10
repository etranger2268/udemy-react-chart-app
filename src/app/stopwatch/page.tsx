'use client';

import { useStopwatch } from '@/app/stopwatch/useStopwatch';

export default function Stopwatch() {
  const { seconds, isActive, toggle, handleResetClick } = useStopwatch();

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
