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
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
          <Tabs
            value='schemaBuilderTab'
            onChange={this.props.changeCurrentTab}
            //   () => {
            //   // console.log('TABS -->', Tabs)
            //   // // console.log('VALUE -->', value)
            //   // this.props.changeCurrentTab('codeOutputTab');
            // }}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Schema Builder" value="schemaBuilderTab" id="schemaBuilderTab" />
            <Tab label="Code Output" value="codeOutputTab" id="codeOutputTab" />
          </Tabs>
          {/* <Button variant="contained" color="primary" id={schemaBuilderTab} className="tab" onClick={() => this.props.changeCurrentTab('schemaBuilderTab')}>
            Schema Builder
          </Button>
          <Button variant="contained" color="primary" id={codeOutputTab} className="tab" onClick={() => this.props.changeCurrentTab('codeOutputTab')}>
            Code Output
          </Button> */}
        </div>
      </div>
    );
  }
}

export default NavBar;
