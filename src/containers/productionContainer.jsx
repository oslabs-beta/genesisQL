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
import SchemaBuilderContainer from './schemaBuilderContainer';
import CodeOutput from '../components/codeOutput';

class ProductionContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentTab;
    // console.log('code gen', this.props.codeGeneratedString);
    // console.log('Production Container', this.props.dataViewContent);
    switch (this.props.currentTab) {
      case 'schemaBuilderTab':
        currentTab = <SchemaBuilderContainer 
          dataViewContent={this.props.dataViewContent} 
          handleFormSubmitButton={this.props.handleFormSubmitButton} /> 
        console.log('CHANGING CURRENT TAB TO SCB');
        break;
      case 'codeOutputTab':
        currentTab=<CodeOutput codeGeneratedString={this.props.codeGeneratedString} /> 
        console.log('CHANGING CURRENT TAB TO CO');
        break;
      default:
        currentTab=<SchemaBuilderContainer 
          dataViewContent={this.props.dataViewContent} 
          handleFormSubmitButton={this.props.handleFormSubmitButton} /> 
    }
    return (
      <div id="productionContainer">
        {currentTab}
      </div>
    );
  }
}

export default ProductionContainer;
