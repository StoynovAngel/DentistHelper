import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navigation from "./navigation/Navigation.jsx";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import AuthProviderWrapper from "./wrapper/AuthWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper>
        <Navigation />
        <App />
        <Analytics />
      </AuthProviderWrapper>
    </BrowserRouter>
  </StrictMode>
);
