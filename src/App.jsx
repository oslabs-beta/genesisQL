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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: data }),
    })
      .then((data) => {
        // console.log('data', data)
        return data.json()
      })
      .then((result) => {
        this.setState({ dataViewContent: result })
        // console.log(result)
      })
      .catch((err) => (console.log('ERROR', err)));
  }

  render() {
    // console.log('DVC IN APP', this.state.dataViewContent);
    return (
      <div className="App">
        <Icon>star</Icon>
        <h1> GenesisQL </h1>
        <Search dataPOSTRequest={this.dataPOSTRequest} />
        <MainContainer dataViewContent={this.state.dataViewContent} />
      </div>
    );
  }
}

export default hot(module)(App);
