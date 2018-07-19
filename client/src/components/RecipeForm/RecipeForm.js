import React, { Component } from 'react';
import API from '../../utils/recipeAPI';

import { Grid, Col, Row, Button } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import GrainRow from './GrainRow';


import "./RecipeForm.css";


const beerStyles = ['American IPA', 'Stout', 'Amber Ale'];
const liqUnits = ['gal', 'liters', 'bbls'];
const weightUnits = ['lbs', 'kg', 'oz', 'g'];
const hopType = ['Pellet', 'Extract', 'Whole Leaf']

class RecipeForm extends Component {
    state = {
        recipe: {},
        numGrainRow: 1,
        numGrainRowArr: [1]
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

    onAddGrainRow = () => {
        this.setState({
            numGrainRow: this.state.numGrainRow + 1,
            numGrainRowArr: [...this.state.numGrainRowArr, 1]
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
                                <FormGroup controlId="baseMalt" >
                                    <ControlLabel>Base Malt</ControlLabel>
                                    {this.state.numGrainRowArr.map(unit => (
                                        <GrainRow />
                                    ))}
                                    <Button onClick={this.onAddGrainRow}>New Base Malt</Button>
                                    {/* <Row className="baseMaltInputRow">
                                        <Col xs={6}>
                                            <InputGroup>
                                                <FormControl type="text" id="baseMalt" placeholder="Malt Name"/>
                                            </InputGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <InputGroup>
                                                <FormControl type="number" id="maltWeight" placeholder="Weight"/>
                                                <DropdownButton
                                                    componentClass={InputGroup.Button}
                                                    id="input-dropdown-addon"
                                                    title="Units"
                                                >
                                                    {weightUnits.map(unit => (
                                                        <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                                                    ))}
                                                </DropdownButton>
                                            </InputGroup>
                                        </Col>
                                    </Row> */}
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <Row>
                                    <Col xs={6}>
                                      
                                      
                                    </Col>
                                    <Col xs={6}>

                                      
                                    </Col>
                                </Row>

                            </Col>

                        </Row>
                        








                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Recipe Instructions</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="Instructions" />
                        </FormGroup>

                        

                        
                            
                            
                        
                        
                        
                        
                     
                            
                  
                
                            
                    
                       
     
                    </form>
                </Col>
            </Row>
        </Grid>
        )
    }
}

export default RecipeForm;

