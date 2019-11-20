/**
 * ***********************************
 *
 * @module CodeOutput
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Schema code output based on form inputs
 *
 * ***********************************
 */

import React, { Component } from 'react';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Fab from '@material-ui/core/Fab'


class CodeOutput extends Component {
  render() {
    return (
      <div id="display">
        <div id="codeOutput">
          <pre id="finalOut">{this.props.codeGeneratedString}</pre>
        </div>
        <div id="copyOutputContainer">
          <Fab
            id="copyCodeOutput"
            size="large"
            color="primary"
            aria-label="fileCopyIcon"
            onClick={() => {
              document.querySelector('#finalOut').select()
              document.execCommand('copy')
            }}
          >
            <FileCopyIcon />
          </Fab>
        </div>
      </div>
    );
  }
}

export default CodeOutput;
