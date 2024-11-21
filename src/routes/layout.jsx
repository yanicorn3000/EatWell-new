import React from "react";
import Header from "../components/App/header/Header";
import Footer from "../components/App/footer/Footer";
import "../main.scss";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="main">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
