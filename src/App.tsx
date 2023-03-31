import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";

import { createOverrideTheme } from "./theme.provider";
import AppRouter from "./components/AppRouter/AppRouter";

export default function App() {
  return (
    <ThemeProvider theme={createOverrideTheme()}>
      <CssBaseline />
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
}
