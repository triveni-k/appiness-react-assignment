import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './login';
import Table from './dashboard';
function App() {
  return (<Fragment>
    <Switch>
    <Route path="/" exact component={Login} />

      <Route path="/dashboard" component={Table} />
    </Switch>
  </Fragment>)
}

export default App;