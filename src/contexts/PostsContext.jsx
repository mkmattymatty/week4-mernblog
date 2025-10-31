import React, { createContext, useContext, useState } from "react";

const PostsContext = createContext();

export default function PostsProvider({ children }) {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the first post content." },
    { id: 2, title: "Second Post", content: "This is the second post content." },
  ]);

  const addPost = (post) => {
    const newPost = { id: posts.length + 1, ...post };
    setPosts([newPost, ...posts]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
}

export const usePosts = () => useContext(PostsContext);
