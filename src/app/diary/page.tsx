'use client';

import Main from '@/app/diary/_components/Main';
import Sidebar from '@/app/diary/_components/Sidebar';
import { useDiary } from '@/app/diary/_hooks/useDiary';

export default function DiaryPage() {
  const {
    diary,
    errorMessage,
    diaryList,
    filterDate,
    handleChangeDiary,
    addDiaryList,
    filterDiaryList,
    displayDiaryList,
  } = useDiary();

  return (
    <div className="flex w-full">
      <div className="basis-3/10">
        <Sidebar
          diary={diary}
          errorMessage={errorMessage}
          onChange={handleChangeDiary}
          onClick={addDiaryList}
        />
      </div>
      <div className="basis-7/10">
        <Main
          diaryList={diaryList}
          displayDiaryList={displayDiaryList}
          filterDate={filterDate}
          onChange={filterDiaryList}
        />
      </div>
    </div>
  );
}
