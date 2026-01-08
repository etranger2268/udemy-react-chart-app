import { useEffect, useState } from 'react';
import { QUOTES } from '@/app/famous-saying/constants';

type UseQuotesRandomReturn = {
  currentQuote: string | null;
};

type UseQuotesRandomType = () => UseQuotesRandomReturn;

export const useQuotesRandom: UseQuotesRandomType = () => {
  const [currentQuote, setCurrentQuote] = useState<string | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setCurrentQuote(QUOTES[randomIndex] || '');
  }, []);

  return { currentQuote };
};
