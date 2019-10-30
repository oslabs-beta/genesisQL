/**
 * ***********************************
 *
 * @module ProductionContainer
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Container displaying fields based on tab menu selection from NavBar
 *
 * ***********************************
 */

import React, { Component } from 'react';

class ProductionContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="productionContainer">
        {/* <p>'ProductionContainer Component'</p> */}
        {this.props.currentTab}
      </div>
    );
  }
}

export default ProductionContainer;
