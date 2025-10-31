// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const userId = localStorage.getItem("userId"); // check session
  if (!userId) return <Navigate to="/login" replace />;
  return children;
}
