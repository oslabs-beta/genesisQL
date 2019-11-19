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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="navBar">
        <div id="tabsContainer">
          <Tabs
            value={this.props.currentTab}
            onChange={this.props.changeCurrentTab}
            indicatorColor="secondary"
            textColor="primary"
          >
            <Tab label="Schema Builder" value="schemaBuilderTab" id="schemaBuilderTab" />
            <Tab label="Code Output" value="codeOutputTab" id="codeOutputTab" />
          </Tabs>
        </div>
      </div>
    );
  }
}

export default NavBar;
