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

// component imports
import SchemaBuilderContainer from './schemaBuilderContainer';
import CodeOutput from '../components/CodeOutput';

class ProductionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: <SchemaBuilderContainer />,
      // current display for container (SBC or CodeOutput)
    }
  }

  render() {
    return (
      <div id="productionContainer">
        <p>'ProductionContainer Component'</p>
        {/* SchemaBuilderContainer is a versaitle container for rendering several componenets. Could be updated to contain CodeOutput and more */}
        {this.state.currentTab}
      </div>
    );
  }
}

export default ProductionContainer;
