import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavLinks } from "./_navlinks";

import { jsonplaceholder } from "../api/jsonplaceholder";
import { IJsonPlaceholderPost } from "../models/posts";

export const Posts = () => {
  const [post, setPost] = React.useState<IJsonPlaceholderPost>();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await jsonplaceholder.single(1);
    setPost(result);
  };

  return (
    <>
      <main>
        <h2>**** Posts ****</h2>
      </main>
      <li>{`${post?.id} - ${post?.title}`}</li>
    </>
  );
};
