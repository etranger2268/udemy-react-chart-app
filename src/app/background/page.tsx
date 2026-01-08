'use client';

import { useChangeBgColor } from '@/app/background/_hooks/useChangeBgColor';

export default function BackgroundPage() {
  const { currentColor, handleChangeColor } = useChangeBgColor();
  return (
    <div className="h-screen" style={{ backgroundColor: currentColor }}>
      <div className="h-screen flex justify-center items-center">
        <button
          type="button"
          onClick={handleChangeColor}
          className="py-2 px-4 bg-blue-500 text-white text-sm font-medium transition-all duration-300 hover:opacity-75"
        >
          色を変更
        </button>
      </div>
    </div>
  );
}
