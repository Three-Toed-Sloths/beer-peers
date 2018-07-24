import React, { Component } from 'react';
import API from '../../utils/recipeAPI';

import { Grid, Col, Row, Button } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import GrainRow from './GrainRow';
import HopRow from './HopRow';

import './RecipeForm.css';

const beerStyles = ['American IPA', 'Stout', 'Amber Ale'];
const liqUnits = ['gal', 'liters', 'bbls'];

class RecipeForm extends Component {
    state = {
        name: '',
        style: '',
        batchVol: '',
        abv: '',
        og: '',
        fg: '',
        ibu: '',
        preBoil: '',
        boilLength: '',
        description: '',
        directions: '',
        misc: '',
        yeast: '',
        hopsArr: [
            {
                name: '',
                type: 'pellets',
                alpha: '',
                amount: '',
                units: 'oz',
                addition: ''
            }
        ],
        baseMaltArr: [
            {
                name: '',
                amount: '',
                units: 'lbs'
            }
        ],
        specialityMaltArr: [
            {
                name: '',
                amount: '',
                units: 'lbs'
            }
        ]
    }   

    addRecipe = newRecipe => {
        API.saveRecipe(newRecipe)
         .then(res => this.resetState())
         .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
  
   handleChangeFor = (propertyName, type, i) => (event) => {
        const malts = this.state[type];
        malts[i][propertyName] = event.target.value;
        this.setState({
            malts,
        });
    }
  
    addBaseMaltRow = () => {
        this.setState({
            baseMaltArr: [...this.state.baseMaltArr, 
                {
                    name: '',
                    amount: '',
                    units: 'lbs'
                }
            ]
        })
    }

    addSpecMaltRow = () => {
        this.setState({
            specialityMaltArr: [...this.state.specialityMaltArr, 
                {
                    name: '',
                    amount: '',
                    units: 'lbs'
                }
            ]
        })
    }

    addHopRow = () => {
        this.setState({
            hopsArr: [...this.state.hopsArr, 
                {
                    name: '',
                    type: 'pellets',
                    alpha: '',
                    amount: '',
                    units: 'oz',
                    addition: ''
                }
            ]
        });
    }

    resetState = () => {
        this.setState({
            name: '',
            style: '',
            batchVol: '',
            abv: '',
            og: '',
            fg: '',
            ibu: '',
            preBoil: '',
            boilLength: '',
            description: '',
            directions: '',
            misc: '',
            yeast: '',
            hopsArr: [
                {
                    name: '',
                    type: 'pellets',
                    alpha: '',
                    amount: '',
                    units: 'oz',
                    addition: ''
                }
            ],
            baseMaltArr: [
                {
                    name: '',
                    amount: '',
                    units: 'lb'
                }
            ],
            specialityMaltArr: [
                {
                    name: '',
                    amount: '',
                    units: 'lb'
                }
            ]
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();

        const newRecipe = {
            name: this.state.name,
            // brewer: '5b4a548d4cb96a51b8d6c61b',
            style: this.state.style,
            likes: parseFloat(0),
            description: this.state.description,
            specs: {
                abv: parseFloat(this.state.abv),
                ibu: parseFloat(this.state.ibu),
                og: parseFloat(this.state.og),
                fg: parseFloat(this.state.fg),
                batch: {
                    size: parseFloat(this.state.batchVol),
                    units: 'gal'
                },
                boil: parseFloat(this.state.boilLength),
                preboil: {
                    size: parseFloat(this.state.preBoil),
                    units: 'gal'
                }
            },
            ingredients: {
                malt: {
                    base: this.state.baseMaltArr,
                    speciality: this.state.specialityMaltArr
                },
                hops: this.state.hopsArr,
                yeast: {
                    name: this.state.yeast,
                    amount: '1 bag'
                }
            },
            directions: this.state.directions
        }

        console.log(newRecipe);
        this.addRecipe(newRecipe);
    }


    render() {
        return(
        <Grid className="recipeForm">
            <Row className='show-grid'>
                <Col xs={12} md={12}>
                    <form className="recipeAdd">
                        <Row>
                            <Col xs={6}>
                                <FormGroup>
                                    <ControlLabel>Recipe Name</ControlLabel>
                                    <FormControl
                                        type='text'
                                        name='name'
                                        value={this.state.name}
                                        placeholder='Enter name'
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <ControlLabel>Select Beer Style</ControlLabel>
                                    <FormControl componentClass='select' name='style' value={this.state.style} onChange={this.handleInputChange}>
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
                                        <FormGroup>
                                            <ControlLabel>Batch Volume</ControlLabel>
                                            <InputGroup>
                                                <FormControl type='number' name='batchVol' value={this.state.batchVol} onChange={this.handleInputChange} id='batchVol' placeholder='Batch'/>
                                                <DropdownButton
                                                    componentClass={InputGroup.Button}
                                                    id='input-dropdown-addon'
                                                    title='Units'
                                                >
                                                    {liqUnits.map(unit => (
                                                        <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                                                    ))}
                                                </DropdownButton>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={6}>
                                        <FormGroup>
                                            <ControlLabel>ABV</ControlLabel>
                                            <InputGroup>
                                                <FormControl id='abvInput' type='number' name='abv' value={this.state.abv} onChange={this.handleInputChange} placeholder='Enter ABV'/>
                                                <InputGroup.Addon>%</InputGroup.Addon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                <Col xs={6}>
                                        <FormGroup>
                                            <ControlLabel>IBU</ControlLabel>
                                            <InputGroup>
                                                <FormControl id='ibuInput' type='number' name='ibu' value={this.state.ibu} onChange={this.handleInputChange} placeholder='Enter IBUs'/>
                                                {/* <InputGroup.Addon>%</InputGroup.Addon> */}
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6}>
                                        <FormGroup>
                                            <ControlLabel>Original Gravity</ControlLabel>
                                            <FormControl
                                                id='ogInput'
                                                type='number'
                                                name='og'
                                                value={this.state.og}
                                                onChange={this.handleInputChange}
                                                placeholder='Enter OG'
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={6}>
                                        <FormGroup>
                                            <ControlLabel>Final Gravity</ControlLabel>
                                            <FormControl
                                                id='fgInput'
                                                type='number'
                                                name='fg'
                                                value={this.state.fg}
                                                onChange={this.handleInputChange}
                                                placeholder='Enter FG'
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6}>
                                        <FormGroup>
                                            <ControlLabel>Preboil Volume</ControlLabel>
                                            <InputGroup>
                                            <FormControl type='number' id='preBoilVolInput' name='preBoil' value={this.state.preBoil} onChange={this.handleInputChange} placeholder='Preboil'/>
                                                <DropdownButton
                                                    componentClass={InputGroup.Button}
                                                    id='input-dropdown-addon'
                                                    title='Units'
                                                >
                                                    {liqUnits.map(unit => (
                                                        <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                                                    ))}
                                                </DropdownButton>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={6}>
                                        <FormGroup>
                                            <ControlLabel>Boil Length</ControlLabel>
                                            <InputGroup>
                                                <FormControl type='number' name='boilLength' value={this.state.boilLength} onChange={this.handleInputChange} placeholder='Boil'/>
                                                <InputGroup.Addon>min</InputGroup.Addon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={8}>
                                <FormGroup>
                                    <ControlLabel>Recipe Description</ControlLabel>
                                    <FormControl rows='11' componentClass='textarea' id='recipeDescription' name='description' value={this.state.description} onChange={this.handleInputChange} placeholder='Description' />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup >
                                        <ControlLabel>Base Malt</ControlLabel><Button onClick={this.addBaseMaltRow}>+</Button>
                                        {this.state.baseMaltArr.map((unit, i) => (
                                            <GrainRow
                                                nameValue={this.state.baseMaltArr[i].name}
                                                nameUpdate={this.handleChangeFor('name', 'baseMaltArr', i)}
                                                weightUpdate={this.handleChangeFor('amount', 'baseMaltArr', i)}
                                                weightValue={this.state.baseMaltArr[i].amount}
                                            />
                                        ))}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup >
                                        <ControlLabel>Speciality Malt</ControlLabel><Button onClick={this.addSpecMaltRow}>+</Button>
                                        {this.state.specialityMaltArr.map((unit, i) => (
                                            <GrainRow 
                                                nameValue={this.state.specialityMaltArr[i].name}
                                                nameUpdate={this.handleChangeFor('name', 'specialityMaltArr', i)}
                                                weightUpdate={this.handleChangeFor('amount', 'specialityMaltArr', i)}
                                                weightValue={this.state.specialityMaltArr[i].amount}
                                            />
                                        ))}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup >
                                        <ControlLabel>Yeast</ControlLabel>
                                        <InputGroup>
                                                <FormControl type='text' name='yeast' value={this.state.yeast} onChange={this.handleInputChange} placeholder='Yeast Name'/>
                                                <DropdownButton
                                                    componentClass={InputGroup.Button}
                                                    id='input-dropdown-addon'
                                                    title='Type'
                                                >
                                                    <MenuItem key='Dry' value='Dry'>Dry</MenuItem>
                                                    <MenuItem key='Liquid' value='Liquid'>Liquid</MenuItem>
                                               
                                                </DropdownButton>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            </Col>
                            <Col xs={8}>
                                <Row>
                                    <Col xs={12}>
                                        <FormGroup >
                                            <ControlLabel>Hop Additions</ControlLabel><Button onClick={this.addHopRow}>New Hop Addition</Button>
                                                {this.state.hopsArr.map((unit, i) => (
                                                    <HopRow
                                                        nameValue={this.state.hopsArr[i].name}
                                                        nameUpdate={this.handleChangeFor('name', 'hopsArr', i)}

                                                        alphaValue={this.state.hopsArr[i].alpha}
                                                        alphaUpdate={this.handleChangeFor('alpha', 'hopsArr', i)}

                                                        weightUpdate={this.handleChangeFor('amount', 'hopsArr', i)}
                                                        weightValue={this.state.hopsArr[i].amount}

                                                        additionValue={this.state.hopsArr[i].addition}
                                                        additionUpdate={this.handleChangeFor('addition', 'hopsArr', i)}
                                                    />
                                                ))}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <FormGroup >
                                        <ControlLabel>Misc. Ingredients</ControlLabel>
                                        <FormControl componentClass='textarea' name='misc' value={this.state.misc} onChange={this.handleInputChange} placeholder='Enter Misc. Ingredients' />
                                    </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <FormGroup>
                                    <ControlLabel>Recipe Instructions</ControlLabel>
                                    <FormControl
                                        componentClass='textarea'
                                        name='directions'
                                        value={this.state.directions}
                                        onChange={this.handleInputChange}
                                        placeholder='Instructions'
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Button bsSize="large" onClick={this.handleFormSubmit} block>Submit</Button>
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

