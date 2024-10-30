import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navigation from "./navigation/Navigation.jsx";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import AuthProvider from "./auth/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
        <App />
      </AuthProvider>
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);
