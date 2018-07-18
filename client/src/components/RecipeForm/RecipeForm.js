import React, { Component } from 'react';
import API from '../../utils/recipeAPI';



import { Grid, Col, Row, Button } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import "./RecipeForm.css";


const beerStyles = ['American IPA', 'Stout', 'Amber Ale'];
const units = ['gal', 'liters', 'bbls']

class RecipeForm extends Component {
    state = {
        recipe: {}
    }   

    componentDidMount() {
        // this.getRecipes();
    }

    addRecipe = () => {
        API.addRecipe()
         .then(res => {console.log(res.data)})
         .catch(err => console.log(err));
    }

    collectFormData = () => {
        this.setState()
    }



    render() {
        return(
        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={12}>
                    <form>
                        <FormGroup
                        controlId="formBasicText"
                        // validationState={this.getValidationState()}
                        >
                            <ControlLabel>Recipe Name</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter name"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                            <HelpBlock>Validation is based on string length.</HelpBlock>
                        </FormGroup>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Select Beer Style</ControlLabel>
                            <FormControl componentClass="select">
                                {beerStyles.map(style => (
                                    <option value={style}>{style}</option>
                                ))}
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Recipe Description</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="Description" />
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Recipe Instructions</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="Instructions" />
                        </FormGroup>

                        <Col xs={2}>
                            <FormGroup controlId="abv">
                                <ControlLabel>ABV</ControlLabel>
                                <InputGroup>
                                    <FormControl id="abvInput" type="number" placeholder="Enter ABV"/>
                                    <InputGroup.Addon>%</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Col>

                        <FormGroup controlId="gravities" >
                            <Col xs={2}>
                                <ControlLabel>Original Gravity</ControlLabel>
                                <FormControl
                                    id="ogInput"
                                    type="number"
                                    placeholder="Enter OG"
                                />
                            </Col>
                            <Col xs={2}>
                                <ControlLabel>Final Gravity</ControlLabel>
                                <FormControl
                                    id="fgInput"
                                    type="number"
                                    placeholder="Enter FG"
                                />
                            </Col>
                        </FormGroup>
                        
                        <Row>  
                            <Col xs={2}>
                                <FormGroup controlId="batch" >
                                    <ControlLabel>Batch Volume</ControlLabel>
                                    <InputGroup>
                                        <FormControl type="number" id="batchVol" placeholder="Enter Batch Volume"/>
                                        <DropdownButton
                                            componentClass={InputGroup.Button}
                                            id="input-dropdown-addon"
                                            title="Units"
                                        >
                                            {units.map(unit => (
                                                <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                                            ))}
                                        </DropdownButton>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        
                        
                        <Row>
                            <Col xs={2}>
                                <FormGroup controlId="preboil" >
                                    <ControlLabel>Preboil Volume</ControlLabel>
                                    <InputGroup>
                                    <FormControl type="number" id="preBoilVol" placeholder="Enter PreBoil Volume"/>
                                        <DropdownButton
                                            componentClass={InputGroup.Button}
                                            id="input-dropdown-addon"
                                            title="Units"
                                        >
                                            {units.map(unit => (
                                                <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                                            ))}
                                        </DropdownButton>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Col xs={2}>
                            <FormGroup controlId="boilTime">
                                <ControlLabel>Boil Time</ControlLabel>
                                <InputGroup>
                                    <FormControl type="text" />
                                    <InputGroup.Addon>min</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                       
     
                    </form>
                </Col>
            </Row>
        </Grid>
        )
    }
}

export default RecipeForm;

