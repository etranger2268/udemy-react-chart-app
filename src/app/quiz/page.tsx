'use client';

import { v4 as uuid } from 'uuid';
import { useQuiz } from '@/app/quiz/_hooks/useQuiz';
import { OPTIONS, QUESTION } from '@/app/quiz/constants';

export default function QuizPage() {
  const { userChoice, result, handleChoice, handleSubmit, loading } = useQuiz();
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col justify-center gap-3">
        <h3 className="text-2xl text-center">{QUESTION}</h3>
        <div className="flex justify-center gap-4">
          {OPTIONS.map((option) => (
            <button
              key={uuid()}
              type="button"
              onClick={() => handleChoice(option)}
              className={`bg-green-500 py-2 px-4 text-white text-sm font-medium rounded-md transition-all duration-100 hover:opacity-75 ${userChoice === option ? 'bg-green-700' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            className="py-2 px-4 bg-blue-500 text-white rounded-md text-sm font-medium transition-all duration-100 hover:opacity-75"
          >
            送信
          </button>
        </div>
        <h3 className="text-center text-4xl">{loading ? 'loading...' : result}</h3>
      </div>
    </div>
  );
}
