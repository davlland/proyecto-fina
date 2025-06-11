import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import VideoGallery from './pages/VideoGallery';
import EmotionalSupport from './pages/EmotionalSupport';

export default function App() {
  return (
    <>
      <nav className="main-nav">
        <Link to="/">Inicio</Link>
        <Link to="/historias">Historias</Link>
        <Link to="/apoyo-emocional">Apoyo emocional</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historias" element={<VideoGallery />} />
        <Route path="/apoyo-emocional" element={<EmotionalSupport />} />
      </Routes>
    </>
  );
}
