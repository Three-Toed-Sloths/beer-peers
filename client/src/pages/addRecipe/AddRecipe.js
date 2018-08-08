import React from 'react';
import RecipeForm from './../../components/RecipeForm';
import SignInAlert from './../../components/SignInAlert';

import "./AddRecipe.css";

const AddRecipe = () => {
    let componentToRender = <RecipeForm />

    if(!sessionStorage.getItem('loggedIn')){
        componentToRender = <SignInAlert />
    }

    return (
        <div className="addRecipeBackground">
            {componentToRender}
        </div>
    )
}
export default AddRecipe;