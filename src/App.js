import React from 'react';
import ApiFetch from './redux/Api';
import UserDetail from './redux/UserDetail';
import Header from './redux/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
        <Route path="/" exact component={ApiFetch} />  
        <Route path="/apis/:apiId" exact component={UserDetail} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
