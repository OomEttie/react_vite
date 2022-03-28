import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { NavLinks } from './_navlinks';

export const Home = () => {
  const TestData = {
    title: 'Home',
    description: 'This is the home page',
  };

  const TestData2 = { ...TestData };

  return (
    <>
      <main>
        <h2>**** Home ****</h2>
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
