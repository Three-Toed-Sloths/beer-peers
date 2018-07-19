import React, { Component } from 'react';
import API from '../../utils/recipeAPI';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
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
                <Grid>
                    {this.state.recipes.map(recipe => (
                        <Row>
                            <Col item key={recipe.id} sm={12} md={12}>
                                <RecipeCard
                                    id={recipe._id}
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
                            </Col>
                        </Row>
                    ))}
                </Grid> 
            </div>
        )
    }
}

export default RecipeBoard;