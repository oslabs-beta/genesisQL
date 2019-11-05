/**
 * ***********************************
 *
 * @module SchemaBuilderContainer
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Displays the fields required to build GraphQL schema ~~~versitile container for rendering several componenets.
 * Currently holds DataView and Form, but could be updated to contain CodeOutput and more~~~~
 *
 * ***********************************
 */
import React, { Component } from 'react';

// component imports
import DataView from '../components/dataView';
import Form from '../components/form';

class SchemaBuilderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="schemaBuilderContainer">
        {/* <p>'Schema Builder Container'</p> */}
        <DataView />
        <Form />
      </div>
    );
  }
}

export default SchemaBuilderContainer;
