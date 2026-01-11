'use client';

import { v4 as uuid } from 'uuid';
import { useTodos } from '@/app/todos/_hooks/useTodos';

export default function TodosPage() {
  const { input, errorMessage, todos, handleInput, addTodos, completeTodo, deleteTodo } =
    useTodos();
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <section className="space-y-4">
          <div>
            <input
              type="text"
              value={input}
              onChange={handleInput}
              className="h-9 border py-1 px-3 text-sm font-medium bg-transparent rounded-md focus:outline-none focus:ring focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-200"
              placeholder="タスクを入力"
            />
          </div>
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <button
            type="button"
            onClick={addTodos}
            className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:opacity-75"
          >
            追加
          </button>
          <div>
            <ul className="space-y-2">
              {todos.length === 0 ? (
                <p className="text-sm text-gray-400">タスクを追加してください</p>
              ) : (
                todos.map(({ taskName, isCompleted }, id) => (
                  <li
                    key={uuid()}
                    className="text-sm flex justify-between gap-3 items-center border-b border-gray-400 pb-2"
                  >
                    <span className={`${isCompleted ? 'line-through' : ''}`}>{taskName}</span>
                    <div className="space-x-2">
                      <button
                        type="button"
                        onClick={() => completeTodo(id)}
                        className="border rounded-md text-sm font-medium bg-blue-100 py-2 px-4 hover:opacity-75"
                      >
                        {isCompleted ? '取消' : '完了'}
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteTodo(id)}
                        className="border rounded-md text-sm font-medium bg-red-100 py-2 px-4 hover:opacity-75"
                      >
                        削除
                      </button>
                    </div>
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
