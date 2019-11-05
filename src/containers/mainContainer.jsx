/**
 * ***********************************
 *
 * @module MainContainer
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Main app container, rendering all components for creating GraphQL schema
 *
 * ***********************************
 */

import React, { Component } from 'react';

// component imports
import NavBar from '../components/navBar';
import ProductionContainer from './productionContainer';
import SchemaBuilderContainer from './schemaBuilderContainer'
import CodeOutput from '../components/codeOutput'

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: <SchemaBuilderContainer dataViewContent={this.props.dataViewContent} />,
    }
    // methods being passed down
    this.changeCurrentTab = this.changeCurrentTab.bind(this)
  }

  // changes the current tab state to swich displays from SchemaBuilderContainer to CodeOutput
  changeCurrentTab(buttonId) {
    // console.log('changeCurrentTab function in MAIN CONTAINER');
    // console.log('BUTTON ID: ', buttonId);
    // console.log('STATE CURRENTTAB: ', this.state.currentTab)

    switch (buttonId) {
      case 'schemaBuilderTab':
        this.setState({ currentTab: <SchemaBuilderContainer dataViewContent={this.props.dataViewContent} /> })
        console.log('CHANGING CURRENT TAB TO SCB')
        break;
      case 'codeOutputTab':
        this.setState({ currentTab: <CodeOutput /> })
        console.log('CHANGING CURRENT TAB TO CO')
        break;
      default:
        this.setState({ currentTab: <SchemaBuilderContainer dataViewContent={this.props.dataViewContent} /> })
    }
  }

  render() {
    return (
      <div id="mainContainer">
        {/* <p>'MainContainer Component'</p> */}
        <NavBar changeCurrentTab={this.changeCurrentTab} currentTab={this.state.currentTab} />
        <ProductionContainer dataViewContent={this.props.dataViewContent} currentTab={this.state.currentTab} />
      </div>
    );
  }
}

export default MainContainer;
