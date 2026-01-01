import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App";
import "./index.css";

// Get root element safely
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found! Ensure <div id='root'></div> exists in index.html.");
}

// Create root and render app
createRoot(rootElement as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
