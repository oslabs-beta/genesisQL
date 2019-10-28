import React from 'react';
import { Component } from 'react';

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
