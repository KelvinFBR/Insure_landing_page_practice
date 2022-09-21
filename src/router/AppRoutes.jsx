import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { PagesRoutes } from "../components/router/PagesRoutes";

export const AppRoutes = () => {
  const isAuthenticated = false;

  return (
    <Routes>
      {/* <Route path="home" element={<Home />} /> */}

      {isAuthenticated ? (
        <Route path="/home" element={<Home />} />
      ) : (
        <Route path="/*" element={<PagesRoutes />} />
      )}
    </Routes>
  );
};
