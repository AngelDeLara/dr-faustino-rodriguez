import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BodySurgery from './pages/BodySurgery';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FacialSurgery from './pages/FacialSurgery';
import MinSurgery from './pages/MinSurgery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facial-surgery" element={<FacialSurgery />} />
          <Route path="/body-surgery" element={<BodySurgery />} />
          <Route path="/min-surgery" element={<MinSurgery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
