import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./routes/layout";
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Layout>
      <Routes />
    </Layout>
  </BrowserRouter>
);
