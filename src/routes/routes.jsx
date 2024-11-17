import React from "react";
import IndexPage from "./pages/index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route, Navigate } from "react-router-dom";
import UserPulpit from "./pages/UserPulpit";
import { useUser } from "../utils/appContext";
import ProductItem from "./pages/ProductItem";

const RoutesComponent = () => {
  const user = useUser();

  return (
    <Routes>
      <Route path="/" Component={IndexPage} />
      <Route
        path="/login"
        Component={
          user.isLoggedIn ? () => <Navigate to="/pulpit" /> : LoginPage
        }
      />
      <Route path="/register" Component={RegisterPage} />
      <Route path="/pulpit" Component={UserPulpit} />
      <Route path="/product/:id" Component={ProductItem} />
    </Routes>
  );
};

export default RoutesComponent;
