import { type ChangeEvent, useState } from 'react';

type UseMemoListReturn = {
  input: string;
  errorMessage: string;
  memoList: string[];
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  addMemos: () => void;
  deleteMemos: (id: number) => void;
};

type UseMemoListType = () => UseMemoListReturn;

export const useMemoList: UseMemoListType = () => {
  const [input, setInput] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [memoList, setMemoList] = useState<string[]>([]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    setInput(e.currentTarget.value);
  };

  const addMemos = () => {
    const trimInput = input.trim();
    if (!trimInput) {
      setErrorMessage('メモを入力してください。');
      return;
    }
    setMemoList((prev) => [...prev, trimInput]);
    setInput('');
  };

  const deleteMemos = (id: number) =>
    setMemoList((prev) => prev.filter((_, index) => index !== id));

  return { input, errorMessage, memoList, handleInput, addMemos, deleteMemos };
};
