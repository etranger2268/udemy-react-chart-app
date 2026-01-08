import { useState } from 'react';

type UseCountupReturn = {
  count: number;
  onClickCountUp: () => void;
};

type UseCountupType = () => UseCountupReturn;

export const useCountup: UseCountupType = () => {
  const [count, setCount] = useState<number>(0);

  const onClickCountUp = () => setCount((prev) => prev + 1);

  return {
    count,
    onClickCountUp,
  };
};
