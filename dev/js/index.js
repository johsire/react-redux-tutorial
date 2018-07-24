import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import App from './components/App'

// Store store all the data for our application;
//  The data stored in our store/ storage is determined by our reducer;
// A reducer is a function that says what data we're supposed to store in our store;
const store = createStore(allReducers);

// we wrap provider around the App and pass the store thus making the store available/accessible to our entire application/ component through the provider;
ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>
,document.getElementById('root'));
