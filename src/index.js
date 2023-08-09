import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import store from './Store/Productstore';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyErrorBoundary from './Components/UtilityComponents/MyErrorBoundary';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider  store={store}>
       <App></App>
    </Provider>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
