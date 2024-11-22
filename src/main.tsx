import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/app.siteMap.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './MaterialTheme.tsx';
import { AppProvider } from './contexts/AppState.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppProvider>
  </StrictMode>,
);
