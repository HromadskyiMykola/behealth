import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import { createOverrideTheme} from "./theme.provider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={createOverrideTheme()}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
