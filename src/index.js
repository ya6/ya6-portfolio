import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Free from "./pages/Free/FreelancerYA";
import PortfolioYA from "./pages/Portfolio/PersonalPortfolioYA";

import { route } from "./config/config";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={route.HOME} element={<Free />} />
          <Route path={route.PORTFOLIO} element={<PortfolioYA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);