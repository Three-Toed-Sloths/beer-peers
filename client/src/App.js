
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import AllRecipes from './pages/viewAllRecipes';
import Likes from './pages/Likes';
import Following from './pages/Following';
import Register from './pages/Register';

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        {/* <Route exact path='/' component={Users} /> */}
        <Route exact path='/recipes' component={AllRecipes} />
        <Route exact path='/likes' component={Likes} />
        <Route exact path='/following' component={Following} />
        <Route exact path='/register' component={Register} />
        {/* <Route exact path='/users/:id' component={Users} /> */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;

