import { type ChangeEvent, useMemo, useState } from 'react';
import {
  CONTENT,
  ERROR_CONTENT,
  ERROR_TITLE,
  ERROR_TITLE_CONTENT,
  INITIAL_DIARY,
  TITLE,
} from '@/app/diary/constants';

export type Diary = {
  title: string;
  content: string;
  date: null | Date;
};

type UseDiaryReturn = {
  diary: Diary;
  errorMessage: string;
  diaryList: Diary[];
  filterDate: string;
  handleChangeDiary: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  addDiaryList: () => void;
  filterDiaryList: (e: ChangeEvent<HTMLInputElement>) => void;
  displayDiaryList: Diary[];
};

type UseDiaryType = () => UseDiaryReturn;

export const useDiary: UseDiaryType = () => {
  const [diary, setDiary] = useState<Diary>(INITIAL_DIARY);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [diaryList, setDiaryList] = useState<Diary[]>([]);
  const [filterDate, setFilterDate] = useState<string>('2026-01-11');

  const handleChangeDiary = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.currentTarget;
    switch (id) {
      case TITLE: {
        setDiary((prev) => ({ ...prev, title: value }));
        break;
      }
      case CONTENT: {
        setDiary((prev) => ({ ...prev, content: value }));
        break;
      }
      default: {
        break;
      }
    }
  };

  const addDiaryList = () => {
    setErrorMessage('');
    const { title, content } = diary;
    if (!title && !content) {
      setErrorMessage(ERROR_TITLE_CONTENT);
      return;
    }
    if (!title) {
      setErrorMessage(ERROR_TITLE);
      return;
    }
    if (!content) {
      setErrorMessage(ERROR_CONTENT);
      return;
    }

    setDiaryList((prev) => [...prev, { title, content, date: new Date() }]);
    setDiary(INITIAL_DIARY);
  };

  const filterDiaryList = (e: ChangeEvent<HTMLInputElement>) => {
    const inputDate = e.currentTarget.value;
    if (!inputDate) {
      setFilterDate('');
      return;
    }
    setFilterDate(inputDate);
  };

  const displayDiaryList = useMemo(
    () =>
      filterDate
        ? diaryList.filter((diary) => {
            const date = diary.date?.toISOString().split('T')[0];
            return date === filterDate;
          })
        : diaryList,
    [diaryList, filterDate],
  );

  return {
    diary,
    errorMessage,
    diaryList,
    filterDate,
    handleChangeDiary,
    addDiaryList,
    filterDiaryList,
    displayDiaryList,
  };
};
