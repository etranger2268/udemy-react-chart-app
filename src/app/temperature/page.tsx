'use client';

import { type ChangeEvent, useState } from 'react';

export default function TemperaturePage() {
  const [celsius, setCelsius] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCelsius(Number(e.currentTarget.value));

  const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <label htmlFor="celsius">摂氏温度: </label>
          <input
            type="number"
            id="celsius"
            value={celsius}
            onChange={handleChange}
            className="h-9 rounded-md border bg-transparent px-3 py-1 text-sm font-medium focus:outline-none focus:ring focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <p>華氏温度: {fahrenheit}</p>
      </div>
    </div>
  );
}
