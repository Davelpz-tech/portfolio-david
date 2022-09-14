import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./styles.scss";
import { ThemeProvider } from "./utils/themeContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);