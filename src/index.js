import React from 'react';
import ReactDOM from 'react-dom';

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import "../node_modules/@coreui/coreui/dist/css/coreui.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './our.css';

var FiwareToken = "56ae94c8-b95d-3223-b5e6-de06fffbf9dc";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

