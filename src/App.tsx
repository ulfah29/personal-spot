import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import ProjectDetail from './pages/ProjectDetailPage';
import ScrollToTop from './lib/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;