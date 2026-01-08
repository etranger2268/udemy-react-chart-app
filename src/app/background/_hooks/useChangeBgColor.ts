import { useState } from 'react';
import { COLORS } from '@/app/background/constants';

type UseChangeBgColorReturn = {
  currentColor: string | undefined;
  handleChangeColor: () => void;
};

type UseChangeBgColorType = () => UseChangeBgColorReturn;

export const useChangeBgColor: UseChangeBgColorType = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);
  const currentColor = COLORS[currentColorIndex];
  const handleChangeColor = () => setCurrentColorIndex((prev) => (prev + 1) % COLORS.length);
  return { currentColor, handleChangeColor };
};
