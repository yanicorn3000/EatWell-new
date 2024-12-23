import React from "react";
import { createRoot } from "react-dom/client";
import "../../main.scss";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Features from "./features/Feautures";
import Example from "./example/Example";
import Footer from "./footer/Footer";
import Calculator from "./calculator/Calculator";
import FAQ from "./faq/FAQ";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <>
    <Header />
    <Hero />
    <Features />
    <Example />
    <Calculator />
    <FAQ />
    <Footer />
  </>
);
