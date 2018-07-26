import React from 'react';
import RecipeForm from './../../components/RecipeForm';
import "./AddRecipe.css";

const AddRecipe = props => (
    <div className="addRecipeBackground">
        <RecipeForm
            id={props.match.params.id}
        />
    </div>
)

export default AddRecipe;