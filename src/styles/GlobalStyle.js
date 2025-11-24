import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@600;700&display=swap');

  html, body, #root {
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: left;
    background: #fff;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', sans-serif;
    line-height: 1.6;
    font-weight: 400;
    color: #232323;
    background-color: #fff;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    font-weight: 500;
    color: #b76e79;
    text-decoration: underline;
    transition: color 0.2s;
  }
  a:hover, a:focus {
    color: #8a4a56;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #b76e79;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    margin-top: 0;
  }

  p {
    margin: 0 0 1.2em 0;
    color: #232323;
    font-size: 1.08rem;
  }

  button {
    border-radius: 6px;
    border: 1px solid #b76e79;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #fff;
    color: #b76e79;
    cursor: pointer;
    transition: border-color 0.25s, background 0.2s, color 0.2s;
  }
  button:hover, button:focus {
    border-color: #8a4a56;
    background: #f9f6f7;
    color: #8a4a56;
    outline: none;
  }

  main {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem 3rem 1rem;
    background: #fff;
  }

  @media (max-width: 600px) {
    main {
      padding: 1rem 0.5rem 2rem 0.5rem;
    }
  }
`;

export default GlobalStyle;
