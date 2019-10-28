import React from 'react';
import { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../public/style.css';

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
