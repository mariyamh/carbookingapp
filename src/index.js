import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router';
import './assets/css/tailwind.css';
import App from './App';
import Login from './components/login';
import Register from './components/register';
import ResetPassword from './components/ResetPassword';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reset-password" component={ResetPassword} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
