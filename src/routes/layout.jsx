import React from "react";
import Header from "../components/App/header/Header";
import Footer from "../components/App/footer/Footer";
import "../main.scss";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
