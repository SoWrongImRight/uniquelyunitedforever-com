
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import WeddingsPage from './pages/WeddingsPage';
import VowRenewalsPage from './pages/VowRenewalsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <NavBar />
      <main>
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
