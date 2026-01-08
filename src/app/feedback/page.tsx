'use client';

import { v4 as uuid } from 'uuid';
import { useDisplayFeedback } from '@/app/feedback/_hooks/useDisplayFeedback';

export default function FeedbackPage() {
  const { feedbackList, handleChangeInput, handleSubmit, input } = useDisplayFeedback();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col justify-center gap-4">
        <textarea
          value={input}
          onChange={handleChangeInput}
          className="min-h-20 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="フィードバックを入力してください"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="py-2 px-4 bg-blue-500 text-white text-sm font-medium transition-all duration-300 hover:opacity-75"
        >
          送信する
        </button>
        <div className="ml-6">
          <ul className="list-disc">
            {feedbackList.map((feedback) => (
              <li key={uuid()}>{feedback}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
