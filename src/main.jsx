
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import GlobalStyle from './styles/GlobalStyle';

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
