/**
 * ***********************************
 *
 * @module App
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Top-level app component that renders Search and MainContainer Components
 *
 * ***********************************
 */

import React from 'react';
import { Component } from 'react';
import { hot } from 'react-hot-loader';
import './style.css';

// component imports
import Search from './components/search';
import MainContainer from './containers/mainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> GenesisQL </h1>
        <Search />
        <MainContainer />
      </div>
    );
  }
}

export default hot(module)(App);
