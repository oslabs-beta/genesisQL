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
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

class Form extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   formDataTypes: {},
    //   formInputOptions: [],
    // };
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

    const formDataTypesKeys = Object.keys(formDataTypes);
    const graphQLTypes = ['String', 'Int', 'Boolean', 'Custom Type'];

    const formInputOptions = [];
    for (let i = 0; i < formDataTypesKeys.length; i++) {
      formInputOptions.push(<option key={i} value={formDataTypesKeys[i]} />);
    }
    const formTypesOptions = [];
    for (let i = 0; i < graphQLTypes.length; i++) {
      formTypesOptions.push(<option key={i} value={graphQLTypes[i]} />);
    }

    // console.log("this.state.formDataTypes", this.state.formDataTypes)
    console.log('fieldInputOptions', formInputOptions);
    return (
      <div id="formContainer">
        <div className="sbTitle">
          <p>Field Editor</p>
        </div>
        <div id="form">
          <div id="inputContainer">
            {/* https://reactjs.org/docs/forms.html */}
            <label>
            Object Type:
              <input className="objectType" type="text" name="objectType" />
            </label>
            <div className="inputFields">

              <label>
              Field Name:
                <input className="fieldNames" type="text" name="fieldName" list="formDataTypesKeys" />
                <datalist id="formDataTypesKeys">
                  {formInputOptions}
                </datalist>
              </label>
              <label>
              Field Type:
                <input className="fieldTypes" type="text" name="fieldType" list="graphQLTypes" />
                <datalist id="graphQLTypes">
                  {formTypesOptions}
                </datalist>
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
          <div id="submitContainer">
            <Button variant="contained" color="secondary" id="formSubmit" type="submit" value="Submit" onClick={this.props.handleFormSubmitButton}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
