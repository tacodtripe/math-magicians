import React from 'react';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4" id="calc-container">
            <div className="row justify-content-end px-1 bg-secondary">0</div>
            <div className="row justify-content-center align-content-center">
              <div className="col-3 border">AC</div>
              <div className="col-3 border">+/-</div>
              <div className="col-3 border">%</div>
              <div className="col-3 bg-warning border"><i className="fas fa-divide" /></div>
            </div>
            <div className="row justify-content-center align-content-center">
              <div className="col-3 border">7</div>
              <div className="col-3 border">8</div>
              <div className="col-3 border">9</div>
              <div className="col-3 bg-warning border">x</div>
            </div>
            <div className="row justify-content-center align-content-center">
              <div className="col-3 border">4</div>
              <div className="col-3 border">5</div>
              <div className="col-3 border">6</div>
              <div className="col-3 bg-warning border">-</div>
            </div>
            <div className="row justify-content-center align-content-center">
              <div className="col-3 border">1</div>
              <div className="col-3 border">2</div>
              <div className="col-3 border">3</div>
              <div className="col-3 bg-warning border">+</div>
            </div>
            <div className="row justify-content-center align-content-center">
              <div className="col-6 border">0</div>
              <div className="col-3 border">.</div>
              <div className="col-3 bg-warning border">=</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
