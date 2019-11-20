/**
 * ***********************************
 *
 * @module App
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Top-level app component that renders Search and MainContainer Components
 *
 * ***********************************
 */

import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './style.css';
import Icon from '@material-ui/core/Icon';

// component imports
import { json } from 'body-parser';
import Search from './components/search';
import MainContainer from './containers/mainContainer';
import InputField from './components/inputField';

class App extends Component {
  constructor(props) {
    super(props);
    // defines App state
    this.state = {
      dataViewContent: '',
      currentTab: 'schemaBuilderTab',
      loading: false,
      inputFields: [],
      formSwitches: [false]
    };
    // binding methods to constructor
    this.dataPOSTRequest = this.dataPOSTRequest.bind(this);
    this.changeCurrentTab = this.changeCurrentTab.bind(this);
    this.handleNewFields = this.handleNewFields.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }

  changeCurrentTab(event, value) {
    switch (value) {
      case 'schemaBuilderTab':
        this.setState({ currentTab: 'schemaBuilderTab' });
        // console.log('CHANGING CURRENT TAB TO SCB');
        break;
      case 'codeOutputTab':
        this.setState({ currentTab: 'codeOutputTab' });
        // console.log('CHANGING CURRENT TAB TO CO');
        break;
      default:
        this.setState({ currentTab: 'schemaBuilderTab' });
    }
  }

  // methods to pass as props
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
  }

  handleNewFields() {
    const newFieldIndex = this.state.inputFields.length + 1

    const inputFieldsCopy = this.state.inputFields.slice(0)
    inputFieldsCopy.push(<InputField dataViewContent={this.state.dataViewContent} fieldIndex={newFieldIndex} handleSwitchChange={this.handleSwitchChange} />)

    const formSwitchesCopy = this.state.formSwitches.slice(0)
    formSwitchesCopy.push(false);

    this.setState({ inputFields: inputFieldsCopy, formSwitches: formSwitchesCopy })
  }

  handleSwitchChange(event, value) {
    const switchIndex = Number(event.target.name.split('-')[1])
    const formSwitchesCopy = this.state.formSwitches.slice(0)
    formSwitchesCopy[switchIndex] = value;
    this.setState({ formSwitches: formSwitchesCopy })
  }

  render() {
    console.log('FORM SWITHC ARRAY IN APP -->', this.state.formSwitches)
    return (
      <div className="App">
        {/* <Icon>star</Icon> */}
        <h1> GenesisQL </h1>
        <Search dataPOSTRequest={this.dataPOSTRequest} />
        <MainContainer
          dataViewContent={this.state.dataViewContent}
          changeCurrentTab={this.changeCurrentTab}
          currentTab={this.state.currentTab}
          loading={this.state.loading}
          handleNewFields={this.handleNewFields}
          handleSwitchChange={this.handleSwitchChange}
          inputFields={this.state.inputFields}
          formSwitches={this.state.formSwitches}
        />
      </div>
    );
  }
}

export default hot(module)(App);
