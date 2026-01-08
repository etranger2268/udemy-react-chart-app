'use client';

import { useTextShowHidden } from '@/app/text/_hooks/useTextShowHidden';

export default function TextPage() {
  const { isHidden, handleClickIndicate, handleClickHidden } = useTextShowHidden();
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <div className="space-y-2">
          {!isHidden && <h2 className="text-6xl text-center">こんにちは</h2>}
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="py-2 px-4 bg-blue-500 text-white rounded-md text-sm transition-all duration-300 font-medium hover:opacity-75"
              onClick={handleClickIndicate}
            >
              表示
            </button>
            <button
              type="button"
              className="py-2 px-4 bg-blue-500 text-white rounded-md text-sm transition-all duration-300 font-medium hover:opacity-75"
              onClick={handleClickHidden}
            >
              非表示
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
