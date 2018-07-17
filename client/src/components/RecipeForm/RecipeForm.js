import React, { Component } from 'react';
import API from '../../utils/recipeAPI';


// import Grid from 'react-bootstrap/lib/Grid';
// import Col from 'react-bootstrap/lib/Col';
// import Row from 'react-bootstrap/lib/Row';

import "./RecipeForm.css";


class RecipeForm extends Component {
    state = {
        recipes: []
    }   

    componentDidMount() {
        // this.getRecipes();
    }

    addRecipe = () => {
        API.addRecipe()
         .then(res => {console.log(res.data)})
         .catch(err => console.log(err));
    }



    render() {
        return(
            <div className="RecipeForm">
                
          </div>
        )
    }
}

export default RecipeForm;