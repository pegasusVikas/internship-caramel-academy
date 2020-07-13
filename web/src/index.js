import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './routes';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import store from "./components/store/index";

ReactDOM.render(
  <Provider store={store}>
    <Application />
    </Provider>,
  document.getElementById('root')
);
