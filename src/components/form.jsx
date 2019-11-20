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
import InputField from './inputField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // create state array for non-nullable inputs
      // each element will correspond to a specific switch
      // default false
      // onchange will switch it to true
      //
      // this array will be taken into the submit funciton and
      // appen a ! to the end of the corresponding data types in code output
      //
      // create new field index and increment with new fields
    };

  }

  render() {
    return (
      <div id="formContainer">
        <div id="form">
          <div className="sbTitle" id="fieldEditorTitle">
            <p>Field Editor</p>
          </div>
          <div id="inputContainer">
            <label>
              <input className="objectType" type="text" name="objectType" placeholder="Object Type" />
            </label>
            <InputField
              fieldIndex={0}
              dataViewContent={this.props.dataViewContent}
              handleSwitchChange={this.props.handleSwitchChange}
            />
            {this.props.inputFields}
            <div>
              <Fab
                id="addNewField"
                size="small"
                color="secondary"
                aria-label="add"
                onClick={this.props.handleNewFields}
              >
                <AddIcon />
              </Fab>
            </div>
          </div>
        </div>
        <div id="submitContainer">
          <Button variant="contained" color="secondary" id="formSubmit" type="submit" size="large" value="Submit" onClick={this.props.handleFormSubmitButton}>
            Submit
            </Button>
        </div>
      </div>
    );
  }
}

export default Form;
