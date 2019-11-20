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
  constructor(props) {
    super(props);
  }

  // changes the current tab state to swich displays from SchemaBuilderContainer to CodeOutput


  // when user clicks submit button in 'Form', sends data to back-end


  render() {
    return (
      <div id="mainContainer">
        {/* <p>'MainContainer Component'</p> */}
        <NavBar
          changeCurrentTab={this.props.changeCurrentTab}
          currentTab={this.props.currentTab}
        />
        <ProductionContainer
          currentTab={this.props.currentTab}
          codeGeneratedString={this.props.codeGeneratedString}
          dataViewContent={this.props.dataViewContent}
          handleFormSubmitButton={this.props.handleFormSubmitButton}
          loading={this.props.loading}
          handleNewFields={this.props.handleNewFields}
          handleSwitchChange={this.props.handleSwitchChange}
          inputFields={this.props.inputFields}
        />
      </div>
    );
  }
}

export default MainContainer;
