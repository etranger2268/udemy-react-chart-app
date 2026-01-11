'use client';
import { v4 as uuid } from 'uuid';
import { useMemoList } from '@/app/memo/_hooks/useMemoList';

export default function MemoPage() {
  const { input, memoList, errorMessage, handleInput, addMemos, deleteMemos } = useMemoList();
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <section className="space-y-4">
          <div>
            <input
              type="text"
              value={input}
              onChange={handleInput}
              placeholder="メモを入力"
              className="h-9 py-1 px-3 border rounded-md text-sm font-medium bg-transparent focus:outline-none focus:ring focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-200"
            />
          </div>
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
          <button
            type="button"
            onClick={addMemos}
            className="bg-blue-500 py-2 px-4 text-sm font-medium text-white rounded-md transition-all duration-100 hover:opacity-75"
          >
            追加
          </button>
          <div>
            <ul className="space-y-2">
              {memoList.length === 0 ? (
                <p className="text-gray-500">メモを追加してください</p>
              ) : (
                memoList.map((memo, id) => (
                  <li
                    key={uuid()}
                    className="flex justify-between items-center gap-2 text-sm border-b border-gray-400 pb-2"
                  >
                    {memo}
                    <button
                      type="button"
                      onClick={() => deleteMemos(id)}
                      className="bg-gray-100 py-2 px-4 border text-sm font-medium rounded-md transition-all duration-100 hover:opacity-75"
                    >
                      削除
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
