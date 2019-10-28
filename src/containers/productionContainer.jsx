import React from 'react';
import { Component } from 'react';

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
