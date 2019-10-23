import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Jumbotron} from 'react-bootstrap';
import {Home} from './components/Home/'

import './App.css';
//creates a wrapper inst. div components
function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Comments}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/login" component={Login}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>


    </React.Fragment>
  );
}

export default App;
