import { useState } from 'react';

type UseTextShowHiddenReturn = {
  isHidden: boolean;
  handleClickIndicate: () => void;
  handleClickHidden: () => void;
};

type UseTextShowHiddenType = () => UseTextShowHiddenReturn;

export const useTextShowHidden: UseTextShowHiddenType = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const handleClickIndicate = () => setIsHidden(false);
  const handleClickHidden = () => setIsHidden(true);

  return { isHidden, handleClickIndicate, handleClickHidden };
};
