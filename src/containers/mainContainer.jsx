import React from 'react';
import { Component } from 'react';

import NavBar from '../components/navBar';
import ProductionContainer from './productionContainer';

class MainContainer extends Component {
  render() {
    return (
      <div id="mainContainer">
        <p>'MainContainer Component'</p>
        <NavBar />
        <ProductionContainer />
      </div>
    );
  }
}

export default MainContainer;
