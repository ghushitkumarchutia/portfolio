import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <SpeedInsights />
      <CustomCursor />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
