import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Use your .env base URL
  const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/posts/${id}`);
        setPost(res.data.data);
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading post...</p>;
  if (!post)
    return <p className="text-center mt-10 text-red-500">Post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-500 font-semibold"
      >
        ← Back to Posts
      </Link>

      {/* ✅ Controlled image size */}
      {post.featuredImage && (
        <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-lg shadow mb-6">
          <img
            src={post.featuredImage.startsWith("http")
              ? post.featuredImage
              : `${BASE_URL.replace("/api", "")}/${post.featuredImage}`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <p className="text-sm text-gray-500 mb-2">
        {post.category?.name || "Uncategorized"}
      </p>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {post.title}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>

      <div className="flex justify-between items-center mt-8 border-t pt-4 text-sm text-gray-500">
        <span>Author: {post.author?.name || "Unknown"}</span>
        <span>Views: {post.viewCount || 0}</span>
      </div>
    </div>
  );
}
