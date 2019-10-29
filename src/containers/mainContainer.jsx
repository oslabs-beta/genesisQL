/**
 * ***********************************
 *
 * @module MainContainer
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Main app container, rendering all components for creating GraphQL schema
 *
 * ***********************************
 */

import React, { Component } from 'react';

// component imports
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
