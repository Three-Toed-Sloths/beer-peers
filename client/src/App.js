import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ViewAllRecipes from './pages/ViewAllRecipes';
import TopBrewers from './pages/TopBrewers'
import ViewRecipe from './pages/ViewRecipe';
import AddRecipe from './pages/AddRecipe';
import LandingPage from "./pages/LandingPage";
import Footer from './components/Footer';

const App = () => (
  <div>
    <Nav />
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/recipes/new' component={AddRecipe} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/recipes' component={ViewAllRecipes} />
          <Route exact path='/brewers' component={TopBrewers} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/recipes/:id' component={ViewRecipe} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>
  );

export default App;