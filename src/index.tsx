import React from 'react';
import ReactDOM from 'react-dom/client';
import {CssBaseline, ThemeProvider} from '@mui/material';
import App from "./App"
import {createOverrideTheme} from "./theme.provider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={createOverrideTheme()} >
    <CssBaseline />
        <App/>
  </ThemeProvider>

);
