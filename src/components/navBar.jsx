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

class NavBar extends Component {
  render() {
    return (
      <div id="navBar">
        <div id="tabsContainer">
          <button id="schemaBuilderTab" className="tab">
            Schema Builder
          </button>
          <button id="codeOutputTab" className="tab">
            Code Output
          </button>
        </div>
      </div>
    );
  }
}

export default NavBar;
