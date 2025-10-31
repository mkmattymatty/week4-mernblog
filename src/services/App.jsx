import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import PostList from "../components/PostList.jsx";
import PostForm from "../components/PostForm.jsx";
import PostDetail from "../components/PostDetail.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import PostsProvider from "../contexts/PostsContext.jsx";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("light-theme", savedTheme === "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("light-theme", newTheme === "light");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <PostsProvider>
      <div
        className={`flex flex-col min-h-screen transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            {/* Protected Home */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <PostList />
                </ProtectedRoute>
              }
            />

            {/* ✅ Match singular route name */}
            <Route
              path="/post/:id"
              element={
                <ProtectedRoute>
                  <PostDetail />
                </ProtectedRoute>
              }
            />

            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <PostForm />
                </ProtectedRoute>
              }
            />

            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Fallback */}
            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <PostList />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </PostsProvider>
  );
}

export default App;
