import { CssBaseline, ThemeProvider } from "@mui/material";

import { createOverrideTheme } from "./theme.provider";
import { AppRouter, AuthProvider, ModalStateProvider } from "./providers";
import { SimpleModal } from "./components/atomic";

export default function App() {
  return (
    <ThemeProvider theme={createOverrideTheme}>
      <CssBaseline />
      <ModalStateProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
        <SimpleModal />
      </ModalStateProvider>
    </ThemeProvider>
  );
}
