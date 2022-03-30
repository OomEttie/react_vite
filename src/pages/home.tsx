import React from 'react';
import { useStore } from '../lib/userStore';

export const Home = () => {
  const TestData = {
    title: 'Home',
    description: 'This is the home page',
  };

  // const username = useStore((state) => state.username);
  // const setUserName = useStore((state) => state.setUserName);
  // const bears = useStore((state) => state.bears);
  // const bearsIncrease = useStore((state) => state.increasePopulation);
  const [username, setUserName, bears, bearsIncrease] = useStore((state) => [
    state.username,
    state.setUserName,
    state.bears,
    state.increasePopulation,
  ]);

  return (
    <>
      <main>
        <h2>**** Home **** </h2>
        <h4>
          username: {username} - BearCount: {bears}
        </h4>
        <button
          onClick={() => {
            setUserName('USER FROM HOME');
            bearsIncrease();
          }}
        >
          Click to Update User
        </button>
        <br />
        <br />
        <TestComp testData={{ ...TestData, title: 'test 1' }} />
      </main>
    </>
  );
};

const TestComp = ({ testData }: any) => {
  return (
    <div>
      {testData.title} - {testData.description}
    </div>
  );
};
