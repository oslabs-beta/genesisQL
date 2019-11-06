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
  render() {
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
