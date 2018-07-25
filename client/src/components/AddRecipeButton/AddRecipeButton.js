import React, {Component} from "react";
import {Button} from 'react-bootstrap/lib';
import './AddRecipeButton.css';

const AddRecipeButton = () => (
    <div className="well" id='AddRecipeButton'>    
        <Button bsStyle="primary" bsSize="large" block href='/recipes/new'>
            Add a Recipe to your profile
        </Button>
    </div>
)    

export default AddRecipeButton;