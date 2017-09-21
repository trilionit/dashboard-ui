import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import DashBoard from './components/DashBoard/DashBoard.jsx';
import FormComponent from './components/FormComponent/index.jsx';
import Layout from './components/Layout/index.jsx';
require('./css/style.css');

const root = document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
    	<IndexRoute component={DashBoard}></IndexRoute>
    	<Route path="/forms" component={FormComponent} />
    </Route>
  </Router>,
root);
