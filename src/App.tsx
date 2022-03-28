import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Home } from './pages/home';
import { Posts } from './pages/posts';
import { Hooks } from './pages/hooks';
import { NavLinks } from './pages/_navlinks';
import { Context } from './pages/context';
import { Gen1, Gen2, Gen3 } from './pages/generics';
import { Params } from './pages/params/params';

function App() {
  return (
    <div className="App">
      <NavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="params" element={<Params />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="context" element={<Context />} />
        <Route path="generics1" element={<Gen1 />} />
        <Route path="generics2" element={<Gen2 />} />
        <Route path="generics3" element={<Gen3 />} />
      </Routes>
    </div>
  );
}

export default App;
