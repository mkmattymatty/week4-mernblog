import React from "react";
import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
      {/* ✅ Uniform image size */}
      <div className="relative w-full h-56 overflow-hidden bg-gray-100">
        <img
          src={post.featuredImage || "/default-post.png"}
          alt={post.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* ✅ Post content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
          {(post.content && post.content.substring(0, 150)) + "..."}
        </p>
        <Link
          to={`/post/${post._id}`}
          className="text-blue-600 hover:text-blue-500 font-semibold mt-auto"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
