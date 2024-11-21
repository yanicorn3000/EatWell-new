import React from "react";

const Page = ({ children, loading, error }) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return (
      <div>
        <p>Trwa ładowanie...</p>
      </div>
    );
  }

  return children();
};

export default Page;
