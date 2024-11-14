import React from "react";
import IndexPage from "./pages/index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route } from "react-router-dom";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" Component={IndexPage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
    </Routes>
  );
};

export default RoutesComponent;
