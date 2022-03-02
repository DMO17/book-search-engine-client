import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SavedBooks } from "./pages/SavedBooks";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/saved" element={<SavedBooks />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
