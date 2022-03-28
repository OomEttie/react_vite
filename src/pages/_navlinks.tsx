import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

export const NavLinks = () => {
  return (
    <>
      <br />
      <nav>
        <Link to="/">Home * </Link>
        <Link to="/posts">Posts * </Link>
        <Link to="/params">Params * </Link>
        <Link to="/hooks">Hooks * </Link>
        <Link to="/context">Context * </Link>
        <Link to="/generics1">Generics * </Link>
      </nav>
    </>
  );
};

export const NavLinksGenerics = () => {
  return (
    <>
      <br />
      <nav>
        <Link to="/generics1">Generics 1 * </Link>
        <Link to="/generics2">Generics 2 * </Link>
        <Link to="/generics3">Generics 3 * </Link>
      </nav>
    </>
  );
};
