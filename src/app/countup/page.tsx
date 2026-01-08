'use client';
import { useCountup } from '@/app/components/_hooks/useCountup';

export default function CountupPage() {
  const { count, onClickCountUp } = useCountup();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <div className="space-y-2">
          <h2 className="text-6xl text-center">{count}</h2>
          <button
            type="button"
            onClick={onClickCountUp}
            className="py-2 px-4 bg-blue-500 text-white rounded-md text-sm transition-all duration-100 font-medium hover:opacity-75"
          >
            カウントアップ
          </button>
        </div>
      </div>
    </div>
  );
}
