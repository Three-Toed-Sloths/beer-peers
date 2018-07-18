
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
// import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import AllRecipes from './pages/ViewAllRecipes';
import ViewRecipe from './pages/ViewRecipe';
import AddRecipe from './pages/AddRecipe';

const App = () => (
  <Wrapper>
    <Router>
        {/* <Nav /> */}
        <Switch>
          {/* <Route exact path='/' component={Users} /> */}
          <Route exact path='/recipes' component={AllRecipes} />
          <Route exact path='/recipes/new' component={AddRecipe} />
          <Route exact path='/recipes/:id' component={ViewRecipe} />
          
          
          <Route component={NoMatch} />
        </Switch>
    </Router>
  </Wrapper>
);

export default App;

