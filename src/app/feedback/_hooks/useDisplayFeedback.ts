import { type ChangeEvent, useState } from 'react';

type UseDisplayFeedbackReturn = {
  input: string;
  handleChangeInput: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  feedbackList: string[];
  handleSubmit: () => void;
};

type UseDisplayFeedbackType = () => UseDisplayFeedbackReturn;

export const useDisplayFeedback: UseDisplayFeedbackType = () => {
  const [input, setInput] = useState<string>('');
  const [feedbackList, setFeedbackList] = useState<string[]>([]);

  const handleChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setInput(e.currentTarget.value);

  const handleSubmit = () => {
    const trimInput = input.trim();
    if (!trimInput) return;
    setFeedbackList((prev) => [...prev, input]);
    setInput('');
  };

  return {
    input,
    handleChangeInput,
    feedbackList,
    handleSubmit,
  };
};
