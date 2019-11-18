/**
 * ***********************************
 *
 * @module NavBar
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Select what to display in the production container by clicking a series of buttons
 *
 * ***********************************
 */

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const schemaBuilderTab = 'schemaBuilderTab';
    const codeOutputTab = 'codeOutputTab';
    // console.log(this.props.changeCurrentTab)
    return (
      <div id="navBar">
        <div id="tabsContainer">
          <Button variant="contained" color="primary" id={schemaBuilderTab} className="tab" onClick={() => this.props.changeCurrentTab('schemaBuilderTab')}>
            Schema Builder
          </Button>
          <Button variant="contained" color="primary" id={codeOutputTab} className="tab" onClick={() => this.props.changeCurrentTab('codeOutputTab')}>
            Code Output
          </Button>
        </div>
      </div>
    );
  }
}

export default NavBar;
