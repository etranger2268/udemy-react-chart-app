'use client';

import { type ChangeEvent, useState } from 'react';

export default function InputPage() {
  const [text, setText] = useState<string>('');

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <div className="space-y-2">
          <h2 className="text-6xl text-center">{text}</h2>
          <input
            type="text"
            onChange={handleChangeText}
            value={text}
            placeholder="入力してください"
            className="h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
