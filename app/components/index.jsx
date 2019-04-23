import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App/index.jsx';
import Signup from './Signup/index.jsx';
import Login from './Login/index.jsx';
import Dashboard from './Dashboard/index.jsx';
import MyRecords from './MyRecords/index.jsx';
import NewAppointment from './NewAppointment/index.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/myrecords" component={MyRecords}></Route>
      <Route path="/newappointment" component={NewAppointment}></Route>
    </Router>
), document.getElementById('app'));