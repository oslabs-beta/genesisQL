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

class App extends Component {
  constructor(props) {
    super(props);
    // defines App state
    this.state = {
      dataViewContent: '',
      currentTab: '',
      loading: false,
    };
    // binding methods to constructor
    this.dataPOSTRequest = this.dataPOSTRequest.bind(this);
    this.changeCurrentTab = this.changeCurrentTab.bind(this);
  }

  changeCurrentTab(buttonId) {
    console.log('changeCurrentTab function in APP');
    // console.log('BUTTON ID: ', buttonId);
    console.log('STATE CURRENTTAB: ', this.state.currentTab)
    switch (buttonId) {
      case 'schemaBuilderTab':
        this.setState({ currentTab: 'schemaBuilderTab' });
        console.log('CHANGING CURRENT TAB TO SCB');
        break;
      case 'codeOutputTab':
        this.setState({ currentTab: 'codeOutputTab' });
        console.log('CHANGING CURRENT TAB TO CO');
        break;
      default:
        this.setState({ currentTab: 'schemaBuilderTab' });
    }
  }
  // methods to pass as props
  dataPOSTRequest(data) {
    this.setState({ loading: true })
    // console.log('dataPOSTRequest INPUT FIELD', data);
    // console.log('JSON DATA', JSON.stringify(data))
    fetch('/search', {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: data }),
    })
      .then((data) =>
        // console.log('data', data)
        data.json()
      )
      .then((result) => {
        this.setState({ dataViewContent: result, loading: false });
        // console.log(result)
      })
      .catch((err) => (console.log('ERROR', err)));
  }

  render() {
    // console.log('DVC IN APP', this.state.dataViewContent);
    return (
      <div className="App">
        {/* <Icon>star</Icon> */}
        <h1> GenesisQL </h1>
        <Search dataPOSTRequest={this.dataPOSTRequest} />
        <MainContainer
          dataViewContent={this.state.dataViewContent}
          changeCurrentTab={this.changeCurrentTab}
          currentTab={this.state.currentTab}
          loading={this.state.loading} />
      </div>
    );
  }
}

export default hot(module)(App);
