import React, { Component } from 'react';
import API from '../../utils/recipeAPI';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RecipeBoard from './../../components/RecipeBoard';
import SearchBar from './../../components/SearchBar';

import "./ViewAllRecipes.css";


class ViewAllRecipes extends Component {
    state = {
        recipes: []
    }   

    componentDidMount() {
        this.getRecipes();
    }

    getRecipes = () => {
        API.getRecipes()
         .then(res => {console.log(res.data)})
         .catch(err => console.log(err));
    }



    render() {
        return(
            <div className="viewAllRecipes">
                <RecipeBoard />
          </div>
        )
    }
}

export default ViewAllRecipes;