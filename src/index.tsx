import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { store } from './store/store'
import { Provider } from 'react-redux'
import theme from './Theme';
import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={7}>
        <Provider store={store}>
          <App />
        </Provider>
        </SnackbarProvider>
      </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

reportWebVitals();

