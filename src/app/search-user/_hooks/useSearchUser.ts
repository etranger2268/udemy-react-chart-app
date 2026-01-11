import { type ChangeEvent, useMemo, useState } from 'react';

import {
  ABNORMAL_AGE,
  AGE,
  INITIAL_USER,
  NAME,
  NO_AGE,
  NO_AGE_NAME,
  NO_NAME,
} from '@/app/search-user/constants';

type User = {
  name: string;
  age: string;
};

type UseSearchUserReturn = {
  user: User;
  errorMessage: string;
  userList: User[];
  filterKeyword: string;
  handleUserChange: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  handleFilterKeywordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  displayUserList: User[];
};

type UseSearchUserType = () => UseSearchUserReturn;

export const useSearchUser: UseSearchUserType = () => {
  const [user, setUser] = useState<User>(INITIAL_USER);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [userList, setUserList] = useState<User[]>([]);
  const [filterKeyword, setFilterKeyword] = useState<string>('');

  const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    switch (id) {
      case NAME: {
        setUser((prev) => ({ ...prev, name: value }));
        break;
      }
      case AGE: {
        setUser((prev) => ({ ...prev, age: value }));
        break;
      }
      default: {
        break;
      }
    }
  };

  const checkAge = (age: number) => age >= 0 && age <= 125;

  const addUser = () => {
    setErrorMessage('');
    const { name, age } = user;
    const trimName = name.trim();
    const trimAge = age.trim();
    if (!trimName && !trimAge) {
      setErrorMessage(NO_AGE_NAME);
      return;
    }
    if (!trimName) {
      setErrorMessage(NO_NAME);
      return;
    }
    if (!trimAge) {
      setErrorMessage(NO_AGE);
      return;
    }
    if (!checkAge(Number(trimAge))) {
      setErrorMessage(ABNORMAL_AGE);
      return;
    }
    setUserList((prev) => [...prev, { name: trimName, age: trimAge }]);
    setUser(INITIAL_USER);
  };

  const handleFilterKeywordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFilterKeyword(e.currentTarget.value);

  const displayUserList = useMemo(
    () =>
      filterKeyword.length === 0
        ? userList
        : userList.filter(({ name }) => name.includes(filterKeyword)),
    [userList, filterKeyword],
  );

  return {
    user,
    errorMessage,
    userList,
    filterKeyword,
    handleUserChange,
    addUser,
    handleFilterKeywordChange,
    displayUserList,
  };
};
