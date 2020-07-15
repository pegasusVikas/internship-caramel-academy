import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './routes';
import UserState from './components/context/user/UserState'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


ReactDOM.render(
  <UserState>
    <Application />
  </UserState>,
  document.getElementById('root')
);
