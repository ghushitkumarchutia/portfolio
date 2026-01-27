import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CustomCursor />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
