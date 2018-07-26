import React, { Component } from 'react';
import API from '../../utils/recipeAPI';
import userAPI from '../../utils/userAPI';

import { Grid, Col, Row, Button } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap';
import GrainRow from './GrainRow';
import HopRow from './HopRow';

import './RecipeForm.css';

const beerStyles = ['Amber Ale', 'American IPA', 'American Imperial Stout', 'American Lager', 'American Wheat Ale', 'Barley Wine','Barrel-Aged Beer', 'Belgian Dubbel', 'Belgian Golden Strong Ale', 'Belgian Saison', 'Belgian Tripel', 'Belgian Witbier', 'Black Ale', 'Blonde Ale', 'Brown Ale', 'Brown Porter', 'California Common', 'Coffee Beer', 'Cream Ale', 'Double IPA', 'English IPA', 'Fruit Beer', 'German Pilsner', 'Hefeweizen', 'Irish Dry Stout', 'Milk Stout', 'New England IPA', 'Oatmeal Stout', 'Oktoberfest', 'Pale Ale', 'Scotch Ale', 'Session IPA', 'Sour Ale', 'Speciality Beer', 'Stout'];

class RecipeForm extends Component {
    state = {
        name: '',
        brewer: this.props.id,
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
         .then(res => {
            this.addRecipeToBrewer(res.data._id);
            window.location.href = `/personal/${this.state.brewer}`;
         }
        )
         .catch(err => err);
    }

    addRecipeToBrewer = recipeID => {
        userAPI.updateUser(this.state.brewer, {$push:{recipes: [recipeID]}})
        .then(res => {
           return ('success')
        }
       )
        .catch(err => err);
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

    handleFormSubmit = event => {
        event.preventDefault();

        const newRecipe = {
            name: this.state.name,
            brewer: this.state.brewer,
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
                },
                misc: this.state.misc
            },
            directions: this.state.directions
        }
        this.addRecipe(newRecipe);
    }

    render() {
        return(
        <Grid className="recipeForm">
            <form className="recipeAdd">
                <Row>
                    <h1 className='addRecH1'>Add Recipe:</h1>
                    <hr />
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>Recipe Name:</ControlLabel>
                            <FormControl
                                type='text'
                                name='name'
                                value={this.state.name}
                                placeholder='Enter name'
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>Select Beer Style:</ControlLabel>
                            <FormControl componentClass='select' name='style' value={this.state.style} onChange={this.handleInputChange}>
                                {beerStyles.map(style => (
                                    <option key={style} value={style}>{style}</option>
                                ))}
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="specs">
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel className="formLabels">Batch Volume:</ControlLabel>
                                    <InputGroup>
                                        <FormControl type='number' name='batchVol' value={this.state.batchVol} onChange={this.handleInputChange} id='batchVol' placeholder='Batch'/>
                                        <InputGroup.Addon>gal</InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel className="formLabels">ABV:</ControlLabel>
                                    <InputGroup>
                                        <FormControl id='abvInput' type='number' name='abv' value={this.state.abv} onChange={this.handleInputChange} placeholder='ABV'/>
                                        <InputGroup.Addon>%</InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <ControlLabel className="formLabels">IBU</ControlLabel>
                                    <InputGroup>
                                        <FormControl id='ibuInput' type='number' name='ibu' value={this.state.ibu} onChange={this.handleInputChange} placeholder='Enter IBUs'/>
                                        <InputGroup.Addon>IBUs:</InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel className="formLabels">Original Gravity:</ControlLabel>
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
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel className="formLabels">Final Gravity:</ControlLabel>
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
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel className="formLabels">Preboil Volume:</ControlLabel>
                                    <InputGroup>
                                    <FormControl type='number' id='preBoilVolInput' name='preBoil' value={this.state.preBoil} onChange={this.handleInputChange} placeholder='Preboil'/>
                                        <InputGroup.Addon>gal</InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel className="formLabels">Boil Length:</ControlLabel>
                                    <InputGroup>
                                        <FormControl type='number' name='boilLength' value={this.state.boilLength} onChange={this.handleInputChange} placeholder='Boil'/>
                                        <InputGroup.Addon>min</InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <Row className="malts">
                            <Col md={6}>
                                <FormGroup >
                                        <ControlLabel className="formLabels">Base Malt: <span className="addBtn" onClick={this.addBaseMaltRow}>+</span></ControlLabel>
                                        {this.state.baseMaltArr.map((unit, i) => (
                                            <GrainRow
                                                key={`baseRow${i}`}
                                                nameValue={this.state.baseMaltArr[i].name}
                                                nameUpdate={this.handleChangeFor('name', 'baseMaltArr', i)}
                                                weightUpdate={this.handleChangeFor('amount', 'baseMaltArr', i)}
                                                weightValue={this.state.baseMaltArr[i].amount}
                                            />
                                        ))}
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup >
                                    <ControlLabel className="formLabels">Speciality Malt: <span className="addBtn" onClick={this.addSpecMaltRow}>+</span></ControlLabel>
                                    {this.state.specialityMaltArr.map((unit, i) => (
                                        <GrainRow 
                                            key={`specialityRow${i}`}
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
                            <Col md={12} className="hops">
                                <FormGroup >
                                    <ControlLabel>Hop Additions: <span className="addBtn" onClick={this.addHopRow}>+</span></ControlLabel>
                                        {this.state.hopsArr.map((unit, i) => (
                                            <HopRow
                                                key={`hopRow${i}`}
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
                            <Col md={4}>
                                <FormGroup >
                                    <ControlLabel className="formLabels">Yeast:</ControlLabel>
                                    <InputGroup>
                                        <FormControl type='text' name='yeast' value={this.state.yeast} onChange={this.handleInputChange} placeholder='Yeast Name'/>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col md={8}>
                                <FormGroup>
                                    <ControlLabel className="formLabels">Misc. Ingredients:</ControlLabel>
                                    <FormControl componentClass='textarea' name='misc' value={this.state.misc} onChange={this.handleInputChange} placeholder='Enter Misc. Ingredients' />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>Recipe Description:</ControlLabel>
                            <FormControl componentClass='textarea' id='recipeDescription' name='description' value={this.state.description} onChange={this.handleInputChange} placeholder='Description' />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>Recipe Instructions:</ControlLabel>
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
                    <Col mdOffset={4} md={4} xs={12}>
                        <Button className="submitBtn" bsSize="large" onClick={this.handleFormSubmit} block>Brew!</Button>
                    </Col>
                </Row>
            </form>
        </Grid>
        )
    }
}

export default RecipeForm;

