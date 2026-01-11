import { type ChangeEvent, useState } from 'react';

type Todos = {
  taskName: string;
  isCompleted: boolean;
};

type UseTodosReturn = {
  input: string;
  errorMessage: string;
  todos: Todos[];
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  addTodos: () => void;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

type UseTodosType = () => UseTodosReturn;

export const useTodos: UseTodosType = () => {
  const [input, setInput] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [todos, setTodos] = useState<Todos[]>([]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    setInput(e.currentTarget.value);
  };

  const addTodos = () => {
    const trimInput = input.trim();
    if (!trimInput) {
      setErrorMessage('文字を入力してください');
      return;
    }
    setTodos((prev) => [...prev, { taskName: trimInput, isCompleted: false }]);
    setInput('');
  };

  const completeTodo = (id: number) =>
    setTodos((prev) =>
      prev.map((todo, index) =>
        index === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo },
      ),
    );

  const deleteTodo = (id: number) => setTodos((prev) => prev.filter((_, index) => index !== id));

  return { input, errorMessage, todos, handleInput, addTodos, completeTodo, deleteTodo };
};
