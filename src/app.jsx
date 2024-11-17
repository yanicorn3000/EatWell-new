import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./routes/layout";
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider, queryClient } from "./utils";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <AppContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </AppContextProvider>
  </QueryClientProvider>
);
