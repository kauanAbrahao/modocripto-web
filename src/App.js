import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import FAQ from './components/pages/FAQ';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/servicos' element={<Services/>} />
          <Route path='/faq' element={<FAQ/>} />
          <Route path='/contato' element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
