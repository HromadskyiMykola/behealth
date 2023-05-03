import { CssBaseline, ThemeProvider } from "@mui/material";

import { createOverrideTheme } from "./theme.provider";
import { AppRouter, AuthProvider, ModalStateProvider } from "./providers";
import { SimpleModal } from "./components/atomic";
import { LocationProvider } from "~/providers/LocationProvider";

export default function App() {
  return (
    <ThemeProvider theme={createOverrideTheme}>
      <CssBaseline />
      <ModalStateProvider>
        <AuthProvider>
          <LocationProvider>
            <AppRouter />
          </LocationProvider>
        </AuthProvider>
        <SimpleModal />
      </ModalStateProvider>
    </ThemeProvider>
  );
}
