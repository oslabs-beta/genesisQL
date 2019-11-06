/**
 * ***********************************
 *
 * @module Form
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Form for selecting which data is submitted in schema
 * @dataListSource https://blog.teamtreehouse.com/creating-autocomplete-dropdowns-datalist-element
 * ***********************************
 */

import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formDataTypes: {},
      formInputOptions: []
    }
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
    // console.log("Object.keys --- formDataTypes -->", Object.keys(formDataTypes))
    
    // console.log("formInputOptions", formInputOptions)
    
    this.setState({ 
      formDataTypes,
      // formInputOptions
    })
    console.log('object formDataTypes ---> ', this.state.formDataTypes)

  }
  
  render() {
    const formDataTypesKeys = Object.keys(this.state.formDataTypes)

    const formInputOptions = [];
    for(let i = 0; i < formDataTypesKeys.length; i++){
      formInputOptions.push(<option key={i} value={formDataTypesKeys[i]}/>)
      // formInputOptions.push(<option value="andrew"/>)
    }
    // console.log("this.state.formDataTypes", this.state.formDataTypes)
    console.log("fieldInputOptions" , formInputOptions)
    return (
      <div id="form">
        {/* https://reactjs.org/docs/forms.html */}
        <p className="sbTitle">Field Editor</p>
        <label>
            Table:
          <input className="tableName" type="text" name="tableName" list="formDataTypesKeys"/>
          <datalist id="formDataTypesKeys">
            {formInputOptions}
          </datalist>
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
