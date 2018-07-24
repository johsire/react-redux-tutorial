import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from 'redux';


// Store store all the data for our application;
//  The data stored in our store/ storage is determined by our reducer;
// A reducer is a function that says what data we're supposed to store in our store;
const store = createStore();

ReactDOM.render (<h1>Hey there!</h1>, document.getElementById('root'));
