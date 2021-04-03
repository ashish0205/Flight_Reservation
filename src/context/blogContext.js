import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogposts, setBlogPosts] = useState([]);

  const addBlogPost = (blogposts) => {
    setBlogPosts([blogposts]);
  };

  return (
    <BlogContext.Provider value={{ data: blogposts, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContext;
