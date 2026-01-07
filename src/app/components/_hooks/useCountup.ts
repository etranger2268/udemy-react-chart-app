import { useState } from 'react';

type UseCountupType = () => {
  count: number;
  onClickCountUp: () => void;
};

export const useCountup: UseCountupType = () => {
  const [count, setCount] = useState<number>(0);

  const onClickCountUp = () => setCount((prev) => prev + 1);

  return {
    count,
    onClickCountUp,
  };
};
