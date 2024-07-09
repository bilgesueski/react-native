/* This code is first version of Context hook.

import React, { useState, useReducer } from "react";

const BlogContext = React.createContext();

// method for useReducer
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: "Vue.js" }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  // with useReducer
  const [blogPosts, dispatch] = useReducer(blogReducer, [
    { title: "React Native" },
    { title: "Javascript" },
  ]);

  /* with useState
   const [blogPosts, setBlogPosts] = useState([
     { title: "React Native" },
     { title: "JavaScript" },
   ]);
  

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });

    // setBlogPosts([...blogPosts, { title: "Vue JS" }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

*/

// Same functionality with less code -> createDataContext.js

import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: "React Js",
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
