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
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('dataToForm typeof -->  ', typeof this.props.dataViewContent);

    const formDataTypes = {};
    const { dataViewContent } = this.props;
    for (const key in dataViewContent) {
      let type = '';
      switch (typeof dataViewContent[key]) {
        case 'string':
          type = 'String';
          break;
        case 'number':
          type = 'Int';
          break;
        case 'boolean':
          type = 'Boolean';
          break;
        case 'object':
          type = 'Custom';
          break;
      }
      formDataTypes[key] = type;
    }
    // console.log("Object.keys --- formDataTypes -->", Object.keys(formDataTypes))

    const formInputOptions = Object.keys(formDataTypes);
    const graphQLTypes = ['String', 'Int', 'Boolean', 'Custom Type'];

    // console.log("this.state.formDataTypes", this.state.formDataTypes)
    console.log('form input option', formInputOptions);
    return (
      <div id="formContainer">
        <div className="sbTitle">
          <p>Field Editor</p>
        </div>
        <div id="form">
          <div id="inputContainer">
            {/* https://reactjs.org/docs/forms.html */}
            <label>
              <TextField variant="standard" color="secondary" label="Object Type" className="objectType" type="text" name="objectType" />
            </label>
            <div className="inputFields">

              <label>
                <Autocomplete
                  id="formInputOptions"
                  options={formInputOptions}
                  getOptionLabel={option => console.log('OPTION IN AUTOCOMPLETE GETOPTIONLABEL -->', option)}
                  style={{ width: 300 }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      fullWidth={true}
                      variant="standard"
                      color="secondary"
                      label="Field Name"
                      className="fieldNames"
                      type="text"
                      name="fieldName"
                      list="formDataTypesKeys"
                    />
                  )}
                />
              </label>
              <label>
                <Autocomplete
                  id="graphQLTypes"
                  options={graphQLTypes}
                  getOptionLabel={option => {
                    console.log('OPTION IN AUTOCOMPLETE GETOPTIONLABEL -->', option)
                    return option
                  }}
                  style={{ width: 300 }}
                  // inputValue="stuff"
                  onChange={(e, value) => console.log('value', value, 'e', e.target)}
                  renderInput={params => (
                    <TextField /*onChange={(e) => e.target.value}*/
                      {...params}
                      fullWidth={true}
                      variant="standard"
                      color="secondary"
                      label="Field Type"
                      className="fieldTypes"
                      type="text"
                      name="fieldType"
                    // list="graphQLTypes"
                    />
                  )}
                />
              </label>
              <label>
                Required:
              <input type="checkbox" name="nonNullable" />
              </label>
            </div>
          </div>
          <div>
            <button
              id="addNewField"
              onClick={
                () => {
                  // adds new field input options
                  const inputContainer = document.querySelector('#inputContainer');
                  const inputFields = document.querySelector('.inputFields');
                  console.log(inputFields);
                  const clonedInputFields = inputFields.cloneNode(true);

                  // remove pre-existing text that was entered from our cloned inputs, before we append them
                  clonedInputFields.querySelector('.fieldNames').value = '';
                  clonedInputFields.querySelector('.fieldTypes').value = '';

                  inputContainer.appendChild(clonedInputFields);
                }
              }
            >
              Add New Field
          </button>
          </div>
          <button id="formSubmit" type="submit" value="Submit" onClick={this.props.handleFormSubmitButton}>Submit Info</button>
        </div>
      </div>
    );
  }
}

export default Form;
