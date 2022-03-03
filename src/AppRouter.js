import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SavedBooks } from "./pages/SavedBooks";
import { Signup } from "./pages/Signup";
import { ViewBook } from "./pages/ViewBook";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/saved" element={<SavedBooks />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/book/:id" element={<ViewBook />} />
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};
