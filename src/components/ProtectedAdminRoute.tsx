// src/components/ProtectedAdminRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedAdminRoute() {
  const { user, loading } = useAuth();

  console.log(user);
  console.log(user?.role);

  if (loading) return <div>Loading...</div>; // yoki spinner
  if (!user) return <Navigate to="/auth" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />; // yoki 403 sahifa

  return <Outlet />; // ichidagi admin routelar ko'rsatiladi
}
