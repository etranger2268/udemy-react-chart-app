'use client';

import { useState } from 'react';
import { COLORS } from '@/app/background/constants';

export default function BackgroundPage() {
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);
  const handleChangeColor = () => setCurrentColorIndex((prev) => (prev + 1) % COLORS.length);
  return (
    <div className="h-screen" style={{ backgroundColor: COLORS[currentColorIndex] }}>
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
