import { type ChangeEvent, useState } from 'react';

type UseRealTimeTextReturn = {
  text: string;
  handleChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
};

type UseRealTimeTextType = () => UseRealTimeTextReturn;

export const useRealTimeText: UseRealTimeTextType = () => {
  const [text, setText] = useState<string>('');

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value);

  return { text, handleChangeText };
};
