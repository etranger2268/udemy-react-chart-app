'use client';
import { useState } from 'react';

export default function CountupPage() {
  const [count, setCount] = useState<number>(0);

  const onClickCountUp = () => setCount((prev) => prev + 1);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <div className="space-y-2">
          <h2 className="text-6xl text-center">{count}</h2>
          <button
            type="button"
            onClick={onClickCountUp}
            className="py-2 px-4 bg-blue-500 text-white rounded-md text-sm transition-all duration-100 font-medium hover:opacity-50"
          >
            カウントアップ
          </button>
        </div>
      </div>
    </div>
  );
}
