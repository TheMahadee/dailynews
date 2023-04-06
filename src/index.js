import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css';
import RoutesCore from './routes';
import { Provider } from 'react-redux';
import ReduxStore from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Provider store={ReduxStore}>
    <RoutesCore />
  </Provider>
);
