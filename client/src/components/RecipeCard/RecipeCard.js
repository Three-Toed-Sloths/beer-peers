import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import "./RecipeCard.css";


class RecipeCard extends Component {
    state = {
        id: this.props.id,
        name: this.props.name,
        style: this.props.style,
        abv: this.props.abv,
        batch: this.props.batch,
        ibu: this.props.ibu,
        fg: this.props.fg,
        brewer: this.props.brewer,
        description: this.props.description
    }   

    render() {
        return (
            <div className="recipeCard">

                <Paper>
                    <h1>{this.state.name}</h1>
                    <h2>{this.state.style}</h2>
                    <div>
                        <h3>Specs</h3>
                        <p>ABV: {this.state.abv}%</p>
                        <p>IBUs: {this.state.ibu}</p>
                        <p>FG: {this.state.fg}</p>
                    </div>
                </Paper>
              
            </div>
        )
    }
}

export default RecipeCard;