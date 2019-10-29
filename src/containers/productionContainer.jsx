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

import React from 'react';
import { Component } from 'react';

// component imports
import SchemaBuilderContainer from './schemaBuilderContainer';
import CodeOutput from '../components/CodeOutput';

class ProductionContainer extends Component {
  render() {
    return (
      <div id="productionContainer">
        <p>'ProductionContainer Component'</p>
        <SchemaBuilderContainer />
        <CodeOutput />
      </div>
    );
  }
}

export default ProductionContainer;
