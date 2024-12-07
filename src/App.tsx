import LandingPage from './pages/LandingPage';
import Receive from './pages/Recieve';
import Send from './pages/Send';
// import FileShareApp from './pages/FileShareApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/send" element={<Send />} />
        <Route path="/receive" element={<Receive />} />
        {/* <Route path="/test" element={<FileShareApp />} /> */}
      </Routes>
    </Router>
  );
}

export default App