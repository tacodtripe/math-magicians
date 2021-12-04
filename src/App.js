import React from 'react';
import Calculator from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="row justify-content-center">Math Magicians</h1>
        <Calculator />
      </div>
    );
  }
}
