'use client';

import { useQuotesRandom } from '@/app/famous-saying/_hooks/useQuotesRandom';

export default function FamousSayingPage() {
  const { currentQuote } = useQuotesRandom();
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold">{currentQuote}</h2>
      </div>
    </div>
  );
}
