import React, { useEffect } from 'react';
import { getAll } from '../lib/api/todo';
import { useStore } from '../lib/userStore';

export const Posts = () => {
  const [todos, setTodos] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const username = useStore((state) => state.username);
  const setUserName = useStore((state) => state.setUserName);
  const bears = useStore((state) => state.bears);
  const bearsIncrease = useStore((state) => state.increasePopulation);

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
        <h4>
          username: {username} - BearCount: {bears}
        </h4>
        <button
          onClick={() => {
            setUserName('USER FROM POSTS');
            bearsIncrease();
          }}
        >
          Click to Update User
        </button>

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
