/* eslint-disable react/prefer-stateless-function, jsx-a11y/click-events-have-key-events, react/no-unused-state, max-len, react/jsx-one-expression-per-line, jsx-a11y/control-has-associated-label, import/prefer-default-export */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

export const Calculator = () => {
  // constructor(props) {
  //   super(props);
  //   this.operationHandler = this.operationHandler.bind(this);
  //   this.state = {
  //     total: 0,
  //     next: 0,
  //     operation: null,
  //   };
  // }
  const [state, setState] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  const operationHandler = (e) => {
    setState((state) => calculate(state, e.target.value));
  };

  const { total, next, operation } = state;
  return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-4" id="calc-container">
        <div className="row justify-content-end px-1 bg-secondary">{total} {operation} {next}</div>
        <div className="row justify-content-center align-content-center">
          <button onClick={operationHandler} className="col-3 border" type="button" value="AC">AC</button>
          <button onClick={operationHandler} className="col-3 border" type="button">+/-</button>
          <button onClick={operationHandler} className="col-3 border" type="button" value="%">%</button>
          <button onClick={operationHandler} className="col-3 bg-warning border" type="button" value="÷">÷</button>
        </div>
        <div className="row justify-content-center align-content-center">
          <button onClick={operationHandler} className="col-3 border" type="button" value="7">7</button>
          <button onClick={operationHandler} className="col-3 border" type="button" value="8">8</button>
          <button onClick={operationHandler} className="col-3 border" type="button" value="9">9</button>
          <button onClick={operationHandler} className="col-3 bg-warning border" type="button" value="x">x</button>
        </div>
        <div className="row justify-content-center align-content-center">
          <button onClick={operationHandler} className="col-3 border" type="button" value="4">4</button>
          <button onClick={operationHandler} className="col-3 border" type="button" value="5">5</button>
          <button onClick={operationHandler} className="col-3 border" type="button" value="6">6</button>
          <button onClick={operationHandler} className="col-3 bg-warning border" type="button" value="-">-</button>
        </div>
        <div className="row justify-content-center align-content-center">
          <button onClick={operationHandler} className="col-3 border" type="button" value="1">1</button>
          <button onClick={operationHandler} className="col-3 border" type="button" value="2">2</button>
          <button onClick={operationHandler} className="col-3 border" type="button" value="3">3</button>
          <button onClick={operationHandler} className="col-3 bg-warning border" type="button" value="+">+</button>
        </div>
        <div className="row justify-content-center align-content-center">
          <button onClick={operationHandler} className="col-6 border" type="button" value="0">0</button>
          <button onClick={operationHandler} className="col-3 border" type="button" value=".">.</button>
          <button onClick={operationHandler} className="col-3 bg-warning border" type="button" value="=">=</button>
        </div>
      </div>
    </div>
  );
};
