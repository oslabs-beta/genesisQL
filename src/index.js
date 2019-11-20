import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#124e96',
    },
    secondary: {
      main: '#f35588',
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
/*
Co-authored-by: adamgoren <adamjgoren@gmail.com>
Co-authored-by: apaisner <ampaisner@gmail.com>
Co-authored-by: xosemanolo <xose.manolo.rodriguez@gmail.com>
Co-authored by: tomherrmann <tomherrmanndev@gmail.com>
*/
