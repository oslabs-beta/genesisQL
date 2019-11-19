import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('INPUTM FIELD ID', this.props.id);

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
    return (
      // https://reactjs.org/docs/forms.html
      <div className="inputFields">
        <label>
          <input className="fieldNames" type="text" name="fieldName" list="formDataTypesKeys" placeholder="Field Name" />
          <datalist id="formDataTypesKeys">
            {formInputOptions}
          </datalist>
        </label>
        <label>
          <input className="fieldTypes" type="text" name="fieldType" list="graphQLTypes" placeholder="Field Type" />
          <datalist id="graphQLTypes">
            {formTypesOptions}
          </datalist>
        </label>
        <label id="formSwitch">
          Required:
            <Switch
            type="checkbox"
            name="required"
            // checked={this.state.nullable}
            // onChange={this.handleSwitchChange('nonNullable')}
            value="required"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </label>
      </div>
    )
  }
}
export default InputField
