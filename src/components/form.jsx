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
        <form>
          <label>
            Field Name:
            <input className="inputFE" type="text" name="fieldName" />
          </label>
          <label>
            Field Type:
            <input className="inputFE" type="text" name="fieldType" />
          </label>
          <label>
            Required:
            <input type="checkbox" name="nonNullable" />
          </label>
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default Form;
