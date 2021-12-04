import React from 'react';
import { Calculator } from './components/calculator';

/* eslint-disable react/prefer-stateless-function,  import/prefer-default-export */
export const App = () => (
  <div className="container">
    <h1 className="row justify-content-center">Math Magicians</h1>
    <Calculator />
  </div>
);
