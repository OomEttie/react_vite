import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <>
      <br />
      <nav>
        <Link to="/">Home * </Link>
        <Link to="/posts">Posts * </Link>
        <Link to="/hooks">Hooks * </Link>
        <Link to="/context">Context * </Link>
      </nav>
    </>
  );
};
