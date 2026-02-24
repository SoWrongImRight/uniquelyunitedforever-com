
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import WeddingsPage from './pages/WeddingsPage';
import VowRenewalsPage from './pages/VowRenewalsPage';
import ContactPage from './pages/ContactPage';

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: #b76e79;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 0 0 4px 0;
  z-index: 100;
  font-weight: 600;
  &:focus {
    top: 0;
  }
`;

function App() {
  return (
    <>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <NavBar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weddings" element={<WeddingsPage />} />
          <Route path="/vow-renewals" element={<VowRenewalsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
