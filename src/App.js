// App.js

import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Homepage from './Homepage';

const App = () => {
  return (
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Homepage} />
      </Router>
  );
};

export default App;