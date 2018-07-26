import React from 'react';
import { Link } from 'react-router-dom'

import { Grid, Col, Row, Panel, Button, Clearfix } from 'react-bootstrap';


import "./RecipeCard.css";


const RecipeCard = props => (
    
    <Panel className="recipeCard">
        <div className="recipeCardPanelHeading" >
    <Panel.Heading>
        <Panel.Title toggle>
            <h1>{props.name}</h1><h2>{props.style}</h2>
        </Panel.Title>
    </Panel.Heading>
    </div>
    <div className="panelCollapse">
    <Panel.Collapse>
      <Panel.Body>
        <Grid className="panelBody">
            <Row>
                <Col xs={12} md={12}>
                    <h2>Brewer: {props.brewer} - {props.brewerFirstName} {props.brewerLastName}</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <h3>Specs:</h3>
                    <p className="recipeCardText">
                        Batch: {props.batchSize} {props.batchUnits}<br />
                        ABV: {props.abv}%<br />
                        IBUs: {props.ibu}<br />
                        FG: {props.fg}<br />
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h3>Description: </h3>
                    <p className="recipeCardText">{props.description}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Button componentClass={Link} to={"/recipes/" + props.id} size="large">View Recipe</Button>
                </Col>
            </Row>
        </Grid>
      </Panel.Body>
      </Panel.Collapse>
      </div>
    </Panel>
)

export default RecipeCard;