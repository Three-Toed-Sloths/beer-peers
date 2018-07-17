import React, { Component } from 'react';
import API from '../../utils/recipeAPI';
import RecipeBoard from './../../components/RecipeBoard';

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