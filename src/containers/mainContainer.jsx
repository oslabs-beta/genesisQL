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

    // methods being passed down
    this.handleFormSubmitButton = this.handleFormSubmitButton.bind(this);

    this.state = {
      codeGeneratedString: '',
    };
  }

  // changes the current tab state to swich displays from SchemaBuilderContainer to CodeOutput


  // when user clicks submit button in 'Form', sends data to back-end
  handleFormSubmitButton() {
    const objectType = document.querySelector('.objectType').value;

    const fieldNames = [];
    document.querySelectorAll('.fieldNames').forEach(
      (el) => fieldNames.push(el.value),
    );
    const fieldTypes = [];
    document.querySelectorAll('.fieldTypes').forEach(
      (el) => fieldTypes.push(el.value),
    );
    // const objectType = document.getElementsByClassName('objectType');
    // const fieldName = document.getElementsByClassName('fieldName');
    // const fieldType = document.getElementsByClassName('fieldType');
    // console.log(objectType);
    // console.log(fieldNames);
    // console.log(fieldTypes);

    // CREATE PAYLOAD OBJECT TO SEND TO CODE-GENERATOR SERVER-SIDE
    const codeGenPayload = {
      objectTypes: [
        {
          objTypeName: objectType,
          fieldNames,
          fieldTypes,
        },
      ],
    };
    // console.log('codeGenPayload:', codeGenPayload);

    // SEND FETCH REQUEST TO CODE-GEN ENDPOINT, WITH PAYLOAD
    fetch('/code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(codeGenPayload),
    })
      .then((data) => data.json())
      .then((data) => {
        // console.log('data', data);
        // SETTING STATE
        this.setState({ codeGeneratedString: data });
        // console.log('state is:', this.state);
      });
  }

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
          codeGeneratedString={this.state.codeGeneratedString}
          dataViewContent={this.props.dataViewContent}
          handleFormSubmitButton={this.handleFormSubmitButton}
          loading={this.props.loading}
          handleNewFields={this.props.handleNewFields}
          inputFields={this.props.inputFields}
        />
      </div>
    );
  }
}

export default MainContainer;
