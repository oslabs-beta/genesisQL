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
  render() {
    return (
      <div id="productionContainer">
        <p>'ProductionContainer Component'</p>
        {/* SchemaBuilderContainer is a versaitle container for rendering several componenets. Could be updated to contain CodeOutput and more */}
        <SchemaBuilderContainer />
        <CodeOutput />
      </div>
    );
  }
}

export default ProductionContainer;
