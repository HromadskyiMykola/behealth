import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";

import { createOverrideTheme } from "./theme.provider";
import { appRouter } from "~/components/AppRouter/AppRouter";
import { AuthProvider } from "~/components/providers/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={createOverrideTheme()}>
        <CssBaseline />
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </AuthProvider>
  );
}
