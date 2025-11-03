import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/categories`);
      setCategories(res.data.data || []);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const fetchPosts = async (category = "") => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${BASE_URL}/api/posts${category ? "?category=" + category : ""}`
      );
      const data = res.data.data || [];

      const postsWithImages = data.map((post) => {
        if (post.featuredImage && !post.featuredImage.startsWith("http")) {
          post.featuredImage = `${BASE_URL}/${post.featuredImage}`;
        }
        return post;
      });

      setPosts(postsWithImages);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    fetchPosts(categoryId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      {/* ✅ Category Buttons */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button
          className={`px-4 py-2 rounded-full border font-semibold ${
            selectedCategory === ""
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } hover:bg-blue-500 hover:text-white transition`}
          onClick={() => handleCategoryClick("")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat._id}
            className={`px-4 py-2 rounded-full border font-semibold ${
              selectedCategory === cat._id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-500 hover:text-white transition`}
            onClick={() => handleCategoryClick(cat._id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* ✅ Posts Grid as Cards */}
      {loading ? (
        <p className="text-center text-gray-500">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts found.</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700"
            >
              {/* ✅ Card Header (Image + Category) */}
              <div className="flex justify-between items-start p-5">
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">
                    {post.category?.name || "Uncategorized"}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                </div>

                {post.featuredImage && (
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md ml-3 shrink-0">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                )}
              </div>

              {/* ✅ Card Body */}
              <div className="px-5 pb-5 flex flex-col flex-grow">
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {post.excerpt || post.content.substring(0, 120) + "..."}
                </p>

                <Link
                  to={`/post/${post._id}`}
                  className="text-blue-600 hover:text-blue-500 font-semibold mt-auto"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
