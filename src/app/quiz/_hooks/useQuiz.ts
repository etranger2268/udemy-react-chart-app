import { useState } from 'react';
import { CORRECT_ANSWER } from '@/app/quiz/constants';

type UseQuizReturn = {
  userChoice: string | null;
  result: '正解' | '不正解' | null;
  handleChoice: (choice: string) => void;
  handleSubmit: () => void;
  loading: boolean;
};

type UseQuizType = () => UseQuizReturn;

export const useQuiz: UseQuizType = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [result, setResult] = useState<'正解' | '不正解' | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChoice = (choice: string) => setUserChoice(choice);
  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (userChoice === CORRECT_ANSWER) {
      setResult('正解');
    } else {
      setResult('不正解');
    }
    setLoading(false);
  };

  return { userChoice, result, handleChoice, handleSubmit, loading };
};
