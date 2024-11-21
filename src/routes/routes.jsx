import React from "react";
import IndexPage from "./pages/index";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/login/RegisterPage";
import { Routes, Route, Navigate } from "react-router-dom";
import UserPulpit from "./pages/UserPulpit";
import { useUser } from "../utils/appContext";
import ProductItem from "./pages/ProductItem";
import SimilarProducts from "./pages/SimilarProducts";
import UserData from "./pages/UserData";
import UserProducts from "./pages/UserProducts";

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
      <Route path="/product/:id/similar" Component={SimilarProducts} />
      <Route path="/user" Component={UserData} />
      <Route path="/user/products" Component={UserProducts} />
    </Routes>
  );
};

export default RoutesComponent;
