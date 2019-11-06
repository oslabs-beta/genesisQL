/**
 * ***********************************
 *
 * @module Form
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Form for selecting which data is submitted in schema
 *
 * ***********************************
 */

import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formDataTypes: {}
    }
    // this.dataToForm = this.dataToForm.bind(this);
  }

  componentDidMount(){
    console.log('dataToForm typeof -->  ', typeof this.props.dataViewContent)

    const formDataTypes = {};
    const { dataViewContent } = this.props;
    for(let key in dataViewContent){
      let type = '';
      switch(typeof dataViewContent[key]){
        case 'string': 
          type = 'String'
          break;
        case 'number':
          type = 'Int'
          break;
        case 'boolean':
          type = 'Boolean'
          break;
        case 'object':
          type = 'Custom'
          break;
      }
      formDataTypes[key] = type;
    }
    // console.log('object formDataTypes ---> ', formDataTypes)
    this.setState({ formDataTypes })
  }
  
  render() {
    console.log("this.state.formDataTypes", this.state.formDataTypes)
    // this.dataToForm()
    return (
      <div id="form">
        {/* https://reactjs.org/docs/forms.html */}
        <p className="sbTitle">Field Editor</p>
        <label>
            Table:
          <input className="tableName" type="text" name="tableName" />
        </label>
        <label>
            Field Name:
          <input className="fieldName" type="text" name="fieldName" />
        </label>
        <label>
            Field Type:
          <input className="fieldType" type="text" name="fieldType" />
        </label>
        <label>
            Required:
          <input type="checkbox" name="nonNullable" />
        </label>
        <button id="formSubmit" type="submit" value="Submit" onClick={this.props.handleFormSubmitButton}>Submit Info</button>
      </div>
    );
  }
}

export default Form;
