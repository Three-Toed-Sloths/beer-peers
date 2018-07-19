import React, { Component } from 'react';
import API from '../../utils/recipeAPI';

import { Grid, Col, Row, Button } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import GrainRow from './GrainRow';
import HopRow from './HopRow';


import "./RecipeForm.css";


const beerStyles = ['American IPA', 'Stout', 'Amber Ale'];
const liqUnits = ['gal', 'liters', 'bbls'];
const weightUnits = ['lbs', 'kg', 'oz', 'g'];
const hopType = ['Pellet', 'Extract', 'Whole Leaf']

class RecipeForm extends Component {
    state = {
        recipe: {},
        numGrainRow: 1,
        numHopRow: 1,
        numBaseRowArr: [1],
        numSpecRowArr: [1],
        numHopArr: [1]
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

    onAddBaseGrainRow = () => {
        this.setState({
            numGrainRow: this.state.numGrainRow + 1,
            numBaseRowArr: [...this.state.numBaseRowArr, 1]
        });
    }

    onAddSpecGrainRow = () => {
        this.setState({
            numGrainRow: this.state.numGrainRow + 1,
            numSpecRowArr: [...this.state.numSpecRowArr, 1]
        });
    }

    onAddHopRow = () => {
        this.setState({
            numHopRow: this.state.numHopRow + 1,
            numHopArr: [...this.state.numHopArr, 1]
        });
    }



    render() {
        return(
        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={12}>
                    <form>
                        <Row>
                            <Col xs={6}>
                                <FormGroup controlId="formBasicText">
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
                            </Col>
                            <Col xs={6}>
                                <FormGroup controlId="formControlsSelect">
                                    <ControlLabel>Select Beer Style</ControlLabel>
                                    <FormControl componentClass="select">
                                        {beerStyles.map(style => (
                                            <option value={style}>{style}</option>
                                        ))}
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <Row>
                                    <Col xs={6}>
                                        <FormGroup controlId="batch" >
                                            <ControlLabel>Batch Volume</ControlLabel>
                                            <InputGroup>
                                                <FormControl type="number" id="batchVol" placeholder="Batch"/>
                                                <DropdownButton
                                                    componentClass={InputGroup.Button}
                                                    id="input-dropdown-addon"
                                                    title="Units"
                                                >
                                                    {liqUnits.map(unit => (
                                                        <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                                                    ))}
                                                </DropdownButton>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={6}>
                                        <FormGroup controlId="abv">
                                            <ControlLabel>ABV</ControlLabel>
                                            <InputGroup>
                                                <FormControl id="abvInput" type="number" placeholder="Enter ABV"/>
                                                <InputGroup.Addon>%</InputGroup.Addon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6}>
                                        <FormGroup controlId="originalGravity" >
                                            <ControlLabel>Original Gravity</ControlLabel>
                                            <FormControl
                                                id="ogInput"
                                                type="number"
                                                placeholder="Enter OG"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={6}>
                                        <FormGroup controlId="finalGravity" >
                                            <ControlLabel>Final Gravity</ControlLabel>
                                            <FormControl
                                                id="fgInput"
                                                type="number"
                                                placeholder="Enter FG"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6}>
                                        <FormGroup controlId="preboil" >
                                            <ControlLabel>Preboil Volume</ControlLabel>
                                            <InputGroup>
                                            <FormControl type="number" id="preBoilVol" placeholder="Preboil"/>
                                                <DropdownButton
                                                    componentClass={InputGroup.Button}
                                                    id="input-dropdown-addon"
                                                    title="Units"
                                                >
                                                    {liqUnits.map(unit => (
                                                        <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                                                    ))}
                                                </DropdownButton>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={6}>
                                        <FormGroup controlId="boilLength">
                                            <ControlLabel>Boil Length</ControlLabel>
                                            <InputGroup>
                                                <FormControl type="number" placeholder="Boil"/>
                                                <InputGroup.Addon>min</InputGroup.Addon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={8}>
                                <FormGroup controlId="recipeDescription">
                                    <ControlLabel>Recipe Description</ControlLabel>
                                    <FormControl componentClass="textarea" id="recipeDescription" placeholder="Description" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup controlId="baseMalt" >
                                        <ControlLabel>Base Malt</ControlLabel>
                                        {this.state.numBaseRowArr.map(unit => (
                                            <GrainRow />
                                        ))}
                                        <Button onClick={this.onAddBaseGrainRow}>New Base Malt</Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup controlId="baseMalt" >
                                        <ControlLabel>Speciality Malt</ControlLabel>
                                        {this.state.numSpecRowArr.map(unit => (
                                            <GrainRow />
                                        ))}
                                        <Button onClick={this.onAddSpecGrainRow}>New Speciality Malt</Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup controlId="yeastInput" >
                                        <ControlLabel>Yeast</ControlLabel>
                                        <InputGroup>
                                                <FormControl type="text" placeholder="Yeast Name"/>
                                                <DropdownButton
                                                    componentClass={InputGroup.Button}
                                                    id="input-dropdown-addon"
                                                    title="Type"
                                                >
                                                    <MenuItem key="Dry" value="Dry">Dry</MenuItem>
                                                    <MenuItem key="Liquid" value="Liquid">Liquid</MenuItem>
                                               
                                                </DropdownButton>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            </Col>
                            <Col xs={8}>
                                <Row>
                                    <Col xs={12}>
                                        <FormGroup controlId="hops" >
                                            <ControlLabel>Hop Additions</ControlLabel>
                                                {this.state.numHopArr.map(unit => (
                                                    <HopRow />
                                                ))}
                                            <Button onClick={this.onAddHopRow}>New Hop Addition</Button>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <FormGroup controlId="miscIngredients">
                                        <ControlLabel>Misc. Ingredients</ControlLabel>
                                        <FormControl componentClass="textarea" placeholder="Enter Misc. Ingredients" />
                                    </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Recipe Instructions</ControlLabel>
                                    <FormControl componentClass="textarea" placeholder="Instructions" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Grid>
        )
    }
}

export default RecipeForm;

