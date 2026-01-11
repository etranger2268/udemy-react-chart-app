'use client';

import type { ChangeEvent } from 'react';
import type { Diary } from '@/app/diary/_hooks/useDiary';

type SidebarProps = {
  diary: Diary;
  errorMessage: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick: () => void;
};

export default function Sidebar({ diary, errorMessage, onChange, onClick }: SidebarProps) {
  const { title, content } = diary;
  return (
    <div className="border-r h-[80vh] pr-8 space-y-4">
      <div>
        <h2 className="text-2xl font-bold">日記アプリ</h2>
      </div>
      {errorMessage && <p className="text-red-500 text-md">{errorMessage}</p>}
      <div className="space-y-2">
        <div className="space-y-1">
          <label htmlFor="title" className="block text-md font-medium text-gray-700">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={onChange}
            placeholder="タイトルを入力してください"
            className="h-9 py-1 px-3 rounded-md border w-full text-sm font-medium bg-transparent focus:outline-none focus:ring focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="content" className="block text-lg font-medium text-gray-700">
            内容
          </label>
          <textarea
            id="content"
            value={content}
            onChange={onChange}
            placeholder="内容を入力してください"
            className="min-h-60 py-1 px-3 rounded-md bg-background border text-sm w-full focus:outline-none focus:ring focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 "
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClick}
          className="bg-blue-500 text-white text-sm font-medium rounded-md py-2 px-4 transition-all duration-300 hover:opacity-75"
        >
          追加
        </button>
      </div>
    </div>
  );
}
