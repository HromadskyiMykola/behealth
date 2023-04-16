import { CssBaseline, ThemeProvider } from "@mui/material";

import { createOverrideTheme } from "./theme.provider";
import { AppRouter, AuthProvider, ModalStateProvider } from "./providers";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={createOverrideTheme}>
        <CssBaseline />
        <ModalStateProvider>
          <AppRouter />
        </ModalStateProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
