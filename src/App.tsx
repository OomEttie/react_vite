import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import logo from "./logo.svg";

import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Posts } from "./pages/posts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
