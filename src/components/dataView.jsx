/**
 * ***********************************
 *
 * @module DataView
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Display of data fetched from data collection
 *
 * ***********************************
 */

import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class DataView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('loading exists', this.props.loading);
    // console.log('DISPLAY CONTENT', this.props.displayContent);
    return (
      <div id="dataViewContainer">
        <div className="sbTitle">
          <p>Data View</p>
        </div>
        <div id="dataView">
          <pre>{this.props.loading ? <CircularProgress color="secondary" id="loadSpinner" size={65} /> : this.props.dataViewContent ? JSON.stringify(this.props.dataViewContent, null, 2) : null}</pre>
        </div>
      </div>
    );
  }
}

export default DataView;
