/**
 * ***********************************
 *
 * @module SchemaBuilderContainer
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Displays the field required to build GraphQL schema
 *
 * ***********************************
 */

import React from 'react';
import { Component } from 'react';

// component imports
import DataView from '../components/dataView';
import Form from '../components/form';

class SchemaBuilderContainer extends Component {
  render() {
    return (
      <div id="schemaBuilderContainer">
        <p>'Schema Builder Container'</p>
        <DataView />
        <Form />
      </div>
    );
  }
}

export default SchemaBuilderContainer;
