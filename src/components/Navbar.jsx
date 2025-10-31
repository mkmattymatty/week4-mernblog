// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ toggleTheme, theme }) {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-blue-400">
          MattyMatty Blog
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="px-2 py-1 border rounded hover:bg-gray-700 transition-colors"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>

          {userId ? (
            <>
              <Link
                to="/create"
                className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded transition-colors"
              >
                Create Post
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/login"
                className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded transition-colors"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile hamburger button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2">
          <button
            onClick={toggleTheme}
            className="block w-full text-left px-3 py-1 border rounded hover:bg-gray-700 transition-colors"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>

          {userId ? (
            <>
              <Link
                to="/create"
                className="block w-full text-left px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded transition-colors"
              >
                Create Post
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-1 bg-red-600 hover:bg-red-500 rounded transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block w-full text-left px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block w-full text-left px-3 py-1 bg-green-600 hover:bg-green-500 rounded transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
