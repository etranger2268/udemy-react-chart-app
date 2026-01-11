'use client';

import { v4 as uuid } from 'uuid';
import { useSearchUser } from '@/app/search-user/_hooks/useSearchUser';
import { AGE, NAME, NO_DISPLAY_USERLIST, NO_USERLIST, SEARCH } from '@/app/search-user/constants';

export default function SearchUserPage() {
  const {
    user,
    errorMessage,
    userList,
    filterKeyword,
    handleUserChange,
    addUser,
    handleFilterKeywordChange,
    displayUserList,
  } = useSearchUser();
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <section>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">ユーザー検索アプリ</h2>
            <div className="flex flex-col gap-3 p-2">
              <h3 className="text-lg font-semibold">ユーザー追加フォーム</h3>
              <div className="space-y-1">
                <label htmlFor={NAME} className="text-sm text-gray-500 font-medium">
                  氏名
                </label>
                <input
                  type="text"
                  id={NAME}
                  value={user.name}
                  onChange={handleUserChange}
                  placeholder="氏名を入力してください"
                  className="border w-full rounded-md h-9 py-1 px-3 bg-transparent text-sm font-medium focus:outline-none focus:ring focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-200"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor={AGE} className="text-sm text-gray-500 font-medium">
                  年齢
                </label>
                <input
                  type="number"
                  id={AGE}
                  step={1}
                  min={0}
                  max={100}
                  value={user.age}
                  onChange={handleUserChange}
                  placeholder="年齢を入力してください"
                  className="border w-full rounded-md h-9 py-1 px-3 bg-transparent text-sm font-medium focus:outline-none focus:ring focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-200"
                />
              </div>
              {errorMessage && <p className="text-sm text-red-500 font-medium">{errorMessage}</p>}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={addUser}
                  className="bg-blue-500 text-white font-medium text-sm py-2 px-4 rounded-md transition-all duration-100 hover:opacity-75"
                >
                  ユーザー追加
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-2">
              <h3 className="text-lg font-semibold">ユーザーリスト</h3>
              <div className="space-y-1">
                <label htmlFor={SEARCH} className="text-sm text-gray-500 font-medium">
                  ユーザー検索
                </label>
                <input
                  type="text"
                  id={SEARCH}
                  value={filterKeyword}
                  onChange={handleFilterKeywordChange}
                  placeholder="キーワードを入力してください"
                  className="border w-full rounded-md h-9 py-1 px-3 bg-transparent text-sm font-medium focus:outline-none focus:ring focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-200"
                />
              </div>
              {userList.length === 0 ? (
                <p className="text-sm font-medium text-gray-500">{NO_USERLIST}</p>
              ) : displayUserList.length === 0 ? (
                <p className="text-sm font-medium text-gray-500">{NO_DISPLAY_USERLIST}</p>
              ) : (
                <ul className="p-2 space-y-3">
                  {displayUserList.map(({ name, age }) => (
                    <li
                      key={uuid()}
                      className="flex justify-between text-sm font-medium text-gray-600 border-b border-gray-400 pb-3"
                    >
                      <p>{name}</p>
                      <p>{age}歳</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
