import React from 'react';
import ReactDOM from 'react-dom';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { pink, blue } from '@material-ui/core/colors';

import App from './App';

const theme = createTheme({
  palette: {
    primary: pink,
    secondary: blue,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
