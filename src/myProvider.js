import MyContext from './MyContext';

class MyProvider extends Component {
  state = {
    dataViewContent: '',
    currentTab: 'schemaBuilderTab',
    loading: false,
    inputFields: [],
    formSwitches: [false],
    codeGeneratedString: '',
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          dataViewContent: this.state.dataViewContent,
          currentTab: this.state.currentTab,
          loading: this.state.loading,
          inputFields: this.state.inputFields,
          formSwitches: this.state.formSwitches,
          handleFormSubmitButton: this.handleFormSubmitButton,
          codeGeneratedString: this.state.codeGeneratedString,

          dataPOSTRequest(data) {
            if (!data) return;
            this.setState({ loading: true });
            // console.log('dataPOSTRequest INPUT FIELD', data);
            // console.log('JSON DATA', JSON.stringify(data))
            fetch('/search', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ url: data }),
            })
              .then((data) =>
                // console.log('data', data)
                data.json())
              .then((result) => {
                this.setState({ dataViewContent: result, loading: false });
                // console.log(result)
              })
              .catch((err) => (console.log('ERROR', err)));
          },

          handleNewFields() {
            const newFieldIndex = this.state.inputFields.length + 1;

            const inputFieldsCopy = this.state.inputFields.slice(0);
            inputFieldsCopy.push(<InputField dataViewContent={this.state.dataViewContent} fieldIndex={newFieldIndex} handleSwitchChange={this.handleSwitchChange} />);

            const formSwitchesCopy = this.state.formSwitches.slice(0);
            formSwitchesCopy.push(false);

            this.setState({ inputFields: inputFieldsCopy, formSwitches: formSwitchesCopy });
          },

          handleSwitchChange(event, value) {
            const switchIndex = Number(event.target.name.split('-')[1]);
            const formSwitchesCopy = this.state.formSwitches.slice(0);
            formSwitchesCopy[switchIndex] = value;
            this.setState({ formSwitches: formSwitchesCopy });
          },

          handleFormSubmitButton() {
            const objectType = document.querySelector('.objectType').value;

            const fieldNames = [];
            document.querySelectorAll('.fieldNames').forEach(
              (el) => fieldNames.push(el.value),
            );
            const fieldTypes = [];
            document.querySelectorAll('.fieldTypes').forEach(
              (el, index) => {
                // console.log('ELEMENT IN FIELD TYPE LOOP -->', el.value, index)
                if (this.state.formSwitches[index] === true) fieldTypes.push(`${el.value}!`);
                else fieldTypes.push(el.value);
              },
            );

            // CREATE PAYLOAD OBJECT TO SEND TO CODE-GENERATOR SERVER-SIDE
            const codeGenPayload = {
              objectTypes: [
                {
                  objTypeName: objectType,
                  fieldNames,
                  fieldTypes,
                },
              ],
            };
            // console.log('codeGenPayload:', codeGenPayload);

            // SEND FETCH REQUEST TO CODE-GEN ENDPOINT, WITH PAYLOAD
            fetch('/code', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify(codeGenPayload),
            })
              .then((data) => data.json())
              .then((data) => {
                // console.log('data', data);
                // SETTING STATE
                this.setState({ codeGeneratedString: data, currentTab: 'codeOutputTab' });
                // console.log('state is:', this.state);
              });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;