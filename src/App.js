import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

const App = () => (
  <div className="container">
    <nav className="row">
      <h1 className="col-6 text-center">Math Magicians</h1>
      <div className="col-6 row justify-content-between align-content-center">
        <Link className="col text-center" to="/">Home</Link>
        <Link className="col text-center" to="/calculator">Calculator</Link>
        <Link className="col text-center" to="/quotes">Quotes</Link>
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
