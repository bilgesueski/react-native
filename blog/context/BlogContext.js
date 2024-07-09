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
  */

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
