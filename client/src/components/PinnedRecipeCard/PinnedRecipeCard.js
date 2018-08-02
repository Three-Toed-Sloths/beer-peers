import React from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import "./PinnedRecipeCard.css";

const PinnedRecipeCard = props => (
    <Col key={props.recipeKey} className="recipeCardShort" sm={6} xs={12}>
        <a href={props.recipeUrl}>
            <p style={props.recipeColor}>
                {"Name: " + props.recipeName}<br/>
                <hr className="profileHorizontal"/>
                {" Style: " + props.recipeStyle}
            </p>
        </a>
    </Col>
);

export default PinnedRecipeCard;

