import type { ChangeEvent } from 'react';
import { v4 as uuid } from 'uuid';
import type { Diary } from '@/app/diary/_hooks/useDiary';
import { NO_DIARYLIST, NO_DISPLAY_DIARYLIST } from '@/app/diary/constants';

type MainProps = {
  diaryList: Diary[];
  displayDiaryList: Diary[];
  filterDate: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Main({ diaryList, displayDiaryList, filterDate, onChange }: MainProps) {
  return (
    <div className="ml-8 space-y-4 pr-8">
      <h2 className="text-2xl font-medium">日記一覧</h2>
      <div className="space-y-1">
        <label htmlFor="calendar" className="block text-md font-medium text-gray-700">
          日付でフィルター
        </label>
        <input
          type="date"
          value={filterDate}
          onChange={onChange}
          className="border py-1 px-3 rounded-md text-sm font-medium focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <section>
        {diaryList.length === 0 ? (
          <p className="text-lg text-gray-500 font-semibold">{NO_DIARYLIST}</p>
        ) : displayDiaryList.length === 0 ? (
          <p className="text-lg text-gray-500 font-semibold">{NO_DISPLAY_DIARYLIST}</p>
        ) : (
          <ul className="space-y-3">
            {diaryList.map(({ title, content, date }) => (
              <li key={uuid()} className="border-b border-gray-400 pb-2 space-y-1">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm">{content}</p>
                <p className="text-end text-xs text-gray-500">{date?.toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
