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
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
