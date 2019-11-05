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

class DataView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('IN DATA VIEW CONTENT', this.props.DataViewContent)
    return (
      <div id="dataView">
        <p>'DataView Component'</p>
        {this.props.DataViewContent}
      </div>
    );
  }
}

export default DataView;
