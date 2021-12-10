import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import './App.css';

const App = () => (
  <div className="container-fluid">
    <nav className="">
      <div className="row justify-content-center nav-container">
        <h1 className="col-5 text-center">Math Magicians</h1>
        <div className="col-7 row justify-content-between align-content-center">
          <Link className="col text-center nav-link" to="/">Home</Link>
          <Link className="col text-center nav-link" to="/calculator">Calculator</Link>
          <Link className="col text-center nav-link" to="/quotes">Quotes</Link>
        </div>
      </div>
      <Routes>
        <Route path="calculator" element={<Calculator />} />
        <Route path="/" element={<Home />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </nav>
  </div>
);

export default App;
