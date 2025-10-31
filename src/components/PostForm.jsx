import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token || !userId) {
      alert("You must be logged in to create a post.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/posts",
        { title, content, author: userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        alert("✅ Post created successfully!");
        setTitle("");
        setContent("");
        window.location.reload();
      } else {
        alert("❌ Failed to create post.");
      }
    } catch (err) {
      console.error("Error creating post:", err);
      alert(err.response?.data?.message || "Error creating post.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-lg mt-6"
    >
      <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border p-2 rounded mb-4"
      />
      <textarea
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="w-full border p-2 rounded mb-4"
        rows="5"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Publish
      </button>
    </form>
  );
};

export default PostForm;
