import React, { useEffect } from 'react';
import { getAll } from '../lib/api/todo';

export const Posts = () => {
  const [todos, setTodos] = React.useState([]);
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await getAll();
    setTodos(result);
  };

  return (
    <>
      <main>
        <h3>{count}</h3>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click me
        </button>
        <h2>**** Posts ****</h2>
      </main>
      {todos.map((todo: any) => (
        <li key={todo.id}>{`${todo.title}`}</li>
      ))}
    </>
  );
};
