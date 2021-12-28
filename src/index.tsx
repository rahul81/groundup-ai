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
import { SnackbarProvider } from 'notistack';

ReactDOM.render(

  <React.StrictMode>
    <SnackbarProvider maxSnack={30}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

reportWebVitals();
