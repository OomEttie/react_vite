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
import { ReactQuery } from './pages/reactquery';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
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
          <Route path="reactquery" element={<ReactQuery />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
