import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-rose: #b76e79;
    --color-rose-dark: #8a4a56;
    --color-text: #232323;
    --color-muted: #666;
    --font-serif: 'Playfair Display', Georgia, serif;
    --font-sans: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    --font-ornate: 'Cormorant Garamond', 'Times New Roman', serif;
    --radius: 14px;
    font-size: clamp(16px, 0.98rem + 0.2vw, 18px);
  }

  html, body, #root {
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    background: #fff;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    font-family: var(--font-sans);
    line-height: 1.6;
    font-weight: 400;
    color: var(--color-text);
    background-color: #fff;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    font-weight: 500;
    color: #a05468;
    text-decoration: underline;
    transition: color 0.2s;
  }
  a:hover, a:focus {
    color: var(--color-rose-dark);
  }

  a:focus-visible {
    outline: 3px solid var(--color-rose);
    outline-offset: 3px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-rose);
    font-family: var(--font-serif);
    font-weight: 700;
    margin-top: 0;
    text-align: center;
  }

  p {
    margin: 0 0 1.2em 0;
    color: var(--color-text);
    font-size: 1.08rem;
  }

  button {
    border-radius: 6px;
    border: 1px solid var(--color-rose);
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #fff;
    color: var(--color-rose);
    cursor: pointer;
    transition: border-color 0.25s, background 0.2s, color 0.2s;
  }
  button:hover, button:focus {
    border-color: var(--color-rose-dark);
    background: #f9f6f7;
    color: var(--color-rose-dark);
  }

  button:focus-visible {
    outline: 3px solid var(--color-rose);
    outline-offset: 3px;
  }

  main {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 1.5rem 1rem 3rem;
    background: #fff;
  }

  @media (min-width: 600px) {
    main {
      padding: 2rem 1.5rem 3rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
