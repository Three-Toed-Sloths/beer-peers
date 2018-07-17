import React, { Component } from 'react';
import API from '../../utils/recipeAPI';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RecipeCard from '../RecipeCard';

import "./RecipeBoard.css";


class RecipeBoard extends Component {
    state = {
        recipes: []
    }   

    componentDidMount() {
        this.getRecipes();
    }

    getRecipes = () => {
        API.getRecipes()
         .then(res => {
            this.setState({
                recipes: res.data
            })
             
            console.log('get route allrecipes worked')
            console.log(this.state.recipes)
         })
         .catch(err => console.log(err));
    }




    render() {
        return (
            <div className="recipeBoard">
                <Grid container spacing={24}>
                    {this.state.recipes.map(recipe => (
                        <Grid item key={recipe.id} sm={12} m={6}>
                            <RecipeCard
                                id={recipe.id}
                                // key={recipe.id}
                                name={recipe.name}
                                style={recipe.style}
                                abv={recipe.specs.abv}
                                batchSize={recipe.specs.batch.size}
                                batchUnits={recipe.specs.batch.units}
                                ibu={recipe.specs.ibu}
                                fg={recipe.specs.fg}
                                brewer={recipe.brewer}
                                description={recipe.description}
                            />
                        </Grid>
                    ))}
                </Grid> 
            </div>
        )
    }
}

export default RecipeBoard;