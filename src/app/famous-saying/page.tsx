'use client';

import { useEffect, useState } from 'react';
import { QUOTES } from '@/app/famous-saying/constants';

export default function FamousSayingPage() {
  const [currentQuote, setCurrentQuote] = useState<string | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setCurrentQuote(QUOTES[randomIndex] || '');
  }, []);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold">{currentQuote}</h2>
      </div>
    </div>
  );
}
