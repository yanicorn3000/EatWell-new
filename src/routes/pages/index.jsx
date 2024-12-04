import React from "react";
import Hero from "../../components/App/hero/Hero";
import Features from "../../components/App/features/Feautures";
import Example from "../../components/App/example/Example";
import Calculator from "../../components/App/calculator/Calculator";
import FAQ from "../../components/App/faq/FAQ";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Example />
      <Calculator />
      <FAQ />
    </>
  );
};

export default IndexPage;
