import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useHomeContextValues } from "./hooks";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SavedBooks } from "./pages/SavedBooks";
import { Signup } from "./pages/Signup";
import { ViewBook } from "./pages/ViewBook";

export const AppRouter = () => {
  const { isLoggedIn } = useHomeContextValues();

  return (
    <Routes>
      {isLoggedIn ? (
        <>
          <Route path="/saved" element={<SavedBooks />} />
          <Route path="/book/:id" element={<ViewBook />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};
