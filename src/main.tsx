import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./app-layout";
import PortalHomePage from "./pages/app";
import DevelopersPage from "./pages/developers";
import HomePage from "./pages/home";
import TesterPage from "./pages/tester";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tester" element={<TesterPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/app" element={<PortalHomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
