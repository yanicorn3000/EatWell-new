import React from "react";
import Spinner from "../spinner/Spinner";

const Page = ({ children, loading, error }) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <Spinner />;
  }

  return children();
};

export default Page;
