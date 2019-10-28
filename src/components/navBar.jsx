import React from 'react';
import { Component } from 'react';

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
