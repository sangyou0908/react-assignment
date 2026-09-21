import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* TODO 1. App을 BrowserRouter로 감싸세요. */}
    <App />
  </StrictMode>,
);
