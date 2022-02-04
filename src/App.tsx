import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import logo from "./logo.svg";

import { Home } from "./pages/home";
import { Posts } from "./pages/posts";
import { Hooks } from "./pages/hooks";
import { NavLinks } from "./pages/_navlinks";
import { Context } from "./pages/context";

function App() {
  return (
    <div className="App">
      <NavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="context" element={<Context />} />
      </Routes>
    </div>
  );
}

export default App;
