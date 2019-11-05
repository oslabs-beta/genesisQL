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

// component imports
import Search from './components/search';
import MainContainer from './containers/mainContainer';
import { json } from 'body-parser';

class App extends Component {
  constructor(props) {
    super(props);
    // defines App state
    this.state = {
      dataViewContent: null,
    };
    // binding methods to constructor
    this.dataPOSTRequest = this.dataPOSTRequest.bind(this);
  }

  // methods to pass as props
  dataPOSTRequest(data) {
    // console.log('dataPOSTRequest INPUT FIELD', data);
    // console.log('JSON DATA', JSON.stringify(data))
    fetch('/search', {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: data })
    })
      .then(data => data.json())
      .then(result => this.setState(this.state.dataViewContent = result))
      .catch(err => (console.log('ERROR', err)))
  }

  render() {
    return (
      <div className="App">
        <h1> GenesisQL </h1>
        <Search dataPOSTRequest={this.dataPOSTRequest} />
        <MainContainer dataViewContent={this.dataViewContent} />
      </div>
    );
  }
}

export default hot(module)(App);
