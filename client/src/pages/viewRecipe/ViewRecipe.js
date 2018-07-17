import React, { Component } from 'react';
import API from '../../utils/recipeAPI';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchBar from './../../components/SearchBar';
import FullRecipe from './../../components/FullRecipe';


import "./ViewRecipe.css";


class ViewRecipe extends Component {
    state = {
        id: this.props.match.params.id
    }  


        render() {

        return(
            <div className="viewAllRecipes">
                <FullRecipe id={this.state.id}/>
          </div>
        )
    }
}



export default ViewRecipe;