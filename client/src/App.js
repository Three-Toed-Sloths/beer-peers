
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import AllRecipes from './pages/viewAllRecipes';
import Profile from './pages/Profile';

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        {/* <Route exact path='/' component={Users} /> */}
        <Route exact path='/profile/:id' component={Profile} />
        {/* <Route exact path='/users/:id' component={Users} /> */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;

