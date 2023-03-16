import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/pages/Login";
import LandingPage from "./component/pages/LandingPage";
import UserDetailsPage from "./component/pages/Dashboard";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<Login />} path="login" />
        <Route element={<UserDetailsPage />} path="user/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

