import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NoMatch from './components/pages/NoMatch';
import Comments from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import NavigationBar from './components/NavigationBar';
import Layout from './components/Layout';
import Seattle from './components/pages/Seattle';

//creates a wrapper inst. div components
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/comments" component={Comments} />
              <Route path="/login" component={Login} />
              <Route path="/seattle" component={Seattle} />
              {/* <Route path="/portland" component={Portland} /> */}
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;
