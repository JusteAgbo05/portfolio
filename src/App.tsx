import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projets/:id" element={<ProjectDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
