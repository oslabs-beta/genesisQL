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
    this.state = {
      selectedFieldName: null,
      selectedGraphQLType: null,
      nonNullable: false
    }
    this.handleSwitchChange = this.handleSwitchChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    if (e.target.name === 'selectedGraphQLType') this.setState({ selectedGraphQLType: e.target.value })
    if (e.target.name === 'selectedFieldName') this.setState({ selectedFieldName: e.target.value })
  }

  handleSwitchChange(name) {
    event => {
      this.setState({ ...state, [name]: event.target.checked });
    }
  };

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
              <div>
                <label>
                  <FormControl className="formControl">
                    <InputLabel className="fieldNames">
                      Field Name
                      </InputLabel>
                    <Select
                      value={this.state.selectedFieldName}
                      onChange={this.handleInputChange}
                      autoWidth={true}
                    >
                      {formInputOptions.map((elem, idx) => <MenuItem name="selectedFieldName" value={elem} key={idx}>{elem}</MenuItem>)}
                    </Select>
                  </FormControl>
                </label>
                <label>
                  <FormControl className="formControl">
                    <InputLabel className="fieldTypes">
                      Field Types
                      </InputLabel>
                    <Select
                      value={this.state.selectedGraphQLType}
                      onChange={this.handleInputChange}
                      autoWidth={true}
                    >
                      {graphQLTypes.map((elem, idx) => <MenuItem name="selectedGraphQLType" value={elem} key={idx}>{elem}</MenuItem>)}
                    </Select>
                  </FormControl>
                </label>
              </div>
              <div>
                <label id='formSwitch'>
                  Non-nullable:
                <Switch
                    type="checkbox"
                    name="nonNullable"
                    checked={this.state.nullable}
                    onChange={this.handleSwitchChange('nonNullable')}
                    value="nonNullable"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </label>
                <Fab id="addNewField" size="small" onClick={
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
                } color="secondary" aria-label="add" >
                  <AddIcon />
                </Fab>
              </div>
            </div>
          </div>
          <div>
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
