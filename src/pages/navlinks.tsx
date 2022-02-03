import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <>
      <br />
      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link> <br />
        <Link to="/posts">Posts</Link> <br />
      </nav>
    </>
  );
};
