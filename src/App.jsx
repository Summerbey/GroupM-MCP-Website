import React from 'react';
import Navigation from './components/Navigation';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Tutorial from './pages/Tutorial';
import CodeExplanation from './pages/CodeExplanation';
import './styles/global.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/code-explanation" element={<CodeExplanation />} />
      </Routes>
    </Router>
  );
}

export default App;
