import React from 'react';
import { Component } from 'react';
import { hot } from 'react-hot-loader';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, World! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
