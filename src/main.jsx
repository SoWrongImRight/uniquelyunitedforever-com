
import { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import GlobalStyle from './styles/GlobalStyle';

if (import.meta.env.DEV) {
  const axe = await import('@axe-core/react');
  const React = (await import('react')).default;
  axe.default(React, ReactDOM, 1000);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <>
          <GlobalStyle />
          <App />
        </>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
