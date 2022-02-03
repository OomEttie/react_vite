import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavLinks } from "./navlinks";

export const Home = () => {
  const token = (import.meta as any).env.VITE_TOKEN;

  console.log("token", token);
  return (
    <>
      <main>
        <h2>**** Home</h2>
      </main>
      <NavLinks />
    </>
  );
};
