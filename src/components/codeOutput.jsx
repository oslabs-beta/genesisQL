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
import { CopyToClipboard } from 'react-copy-to-clipboard';

import FileCopyIcon from '@material-ui/icons/FileCopy';
import Fab from '@material-ui/core/Fab';
import { ToastsContainer, ToastsStore } from 'react-toasts';

class CodeOutput extends Component {
  render() {
    return (
      <div id="display">
        <div id="codeOutput">
          <pre id="finalOut">{this.props.codeGeneratedString}</pre>
        </div>
        <div id="copyOutputContainer">
          <CopyToClipboard text={this.props.codeGeneratedString}>
            <Fab
              id="copyCodeOutput"
              size="large"
              color="primary"
              aria-label="fileCopyIcon"
              onClick={() => ToastsStore.success('Schema Copied!')}
            >
              <ToastsContainer store={ToastsStore} lightBackground />
              <FileCopyIcon />
            </Fab>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}

export default CodeOutput;
