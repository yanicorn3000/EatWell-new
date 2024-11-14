import React from "react";
import IndexPage from "./pages/index";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" Component={IndexPage} />
      <Route path="/login" Component={LoginPage} />
    </Routes>
  );
};

export default RoutesComponent;
