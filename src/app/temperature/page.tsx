'use client';

import { useCelsiusToFahrenheit } from '@/app/temperature/_hooks/useCelsiusToFahrenheit';

export default function TemperaturePage() {
  const { celsius, fahrenheit, handleChange } = useCelsiusToFahrenheit();
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
