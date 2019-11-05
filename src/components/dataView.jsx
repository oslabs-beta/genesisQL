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
import { display } from '@material-ui/system';

class DataView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayContent: ''
    }
  }

  componentDidMount() {
    // displyContent will leave container empty until dataViewContent is not null
    if (this.props.dataViewContent) {
      this.setState({ displayContent: JSON.stringify(this.props.dataViewContent) })
    }
  }

  render() {

    console.log('DISPLAY CONTENT', this.state.displayContent);
    return (
      <div id="dataView">
        <p className="sbTitle">Data View</p>
        {this.state.displayContent}
      </div>
    );
  }
}

export default DataView;
