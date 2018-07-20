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
        numHopArr: [1],

        name: '',
        style: '',
        batchVol: '',
        abv: '',
        og: '',
        fg: '',
        preBoil: '',
        boilLength: '',
        description: '',
        directions: '',
        misc: '',
        yeast: '',
        hops: [{}],
        baseMaltArr: [
            {
                maltName: '',
                maltWeight: '',
                units: 'lbs'
            },
            {
                maltName: '',
                maltWeight: '',
                units: 'lbs'
            }
    
    ],


        // baseMalt:{
        //     baseName: 'hello',
        //     baseMaltWeight: 0
        // },
        // baseMaltName1: 'hello',
        // baseMaltWeight1: 0,
        
        specialityMalt: []

    }   

  

    addRecipe = () => {
        API.addRecipe()
         .then(res => {console.log(res.data)})
         .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // const { name, value } = event.target;
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
    };

    // handleChangeFor = (propertyName, i) => (event) => {
    //     const { malt } = this.state.baseMaltArr[i];
    //     const newMalt = {
    //       ...malt,
    //       [propertyName]: event.target.value
    //     };
    //     this.setState({ malt: newMalt });
    //     alert('final' + this.state.baseMaltArr[i].maltName0)
    //   }
  
   handleChangeFor = (propertyName, i) => (event) => {
       
    

       
            const baseMalts = this.state.baseMaltArr;
            baseMalts[i][propertyName] = event.target.value;

          
            this.setState({
                baseMalts,
            });

        // alert('final - ' + this.state.baseMaltArr[i].maltName)
   }
  

    onAddBaseGrainRow = () => {
        this.setState({
            numGrainRow: this.state.numGrainRow + 1,
            numBaseRowArr: [...this.state.numBaseRowArr, 1]
        });
        // const newMalt = `baseMalt${this.state.numGrainRow + 1}`;
        const rowNum = this.state.numGrainRow + 1;
        // console.log(newMalt);
        this.setState({
            baseMaltArr: [...this.state.baseMaltArr, 

            {
                maltName: '',
                maltWeight: '',
                units: 'lbs'
            }
        ]

            // [`baseMalt${rowNum}`]: 'tester',
            // [`baseMaltWeight${rowNum}`]: 5,

            // baseMalt: [...this.state.baseMalt, {
            //     [`baseMalt${rowNum}`]: 'tester',
            //     [`baseMaltWeight${rowNum}`]: 5
            // }]


        })
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


    getMaltBill = () => {
        const malts = this.state.baseMalt;
        for(let i = 0; i < malts.length; i++){
            console.log(malts[i])
        }
    }

    handleFormSubmit = event => {
        event.preventDefault();

        alert(this.state.baseMaltArr)

        const newRecipe = {
            name: this.state.name,
            brewer: '',
            style: this.state.style,
            likes: 0,
            description: this.state.description,
            specs: {
                abv: this.state.abv,
                ibu: this.state.ibu,
                og: this.state.og,
                fg: this.state.fg,
                batch: {
                    size: this.state.batchVol,
                    units: 'gal'
                },
                boil: this.state.boilLength,
                preboil: {
                    size: this.state.preBoil,
                    units: 'gal'
                }
            },
            ingredients: {
                malt: {
                    base: this.state.baseMaltArr,
                    speciality: [

                    ]
                },
                hops: [

                ],
                yeast: {
                    name: this.state.yeast,
                    amount: '1 bag'
                }
            },
            directions: this.state.directions
        }

        console.log(newRecipe);
    }



    render() {
        return(
        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={12}>
                    <form>
                        <Row>
                            <Col xs={6}>
                                <FormGroup>
                                    <ControlLabel>Recipe Name</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        placeholder="Enter name"
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <ControlLabel>Select Beer Style</ControlLabel>
                                    <FormControl componentClass="select" name='style' value={this.state.style} onChange={this.handleInputChange}>
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
                                                <FormControl type="number" name="batchVol" value={this.state.batchVol} onChange={this.handleInputChange} id="batchVol" placeholder="Batch"/>
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
                                        <FormGroup>
                                            <ControlLabel>ABV</ControlLabel>
                                            <InputGroup>
                                                <FormControl id="abvInput" type="number" name="abv" value={this.state.abv} onChange={this.handleInputChange} placeholder="Enter ABV"/>
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
                                                <FormControl id="ibuInput" type="number" name="ibu" value={this.state.ibu} onChange={this.handleInputChange} placeholder="Enter IBUs"/>
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
                                                id="ogInput"
                                                type="number"
                                                name="og"
                                                value={this.state.og}
                                                onChange={this.handleInputChange}
                                                placeholder="Enter OG"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={6}>
                                        <FormGroup>
                                            <ControlLabel>Final Gravity</ControlLabel>
                                            <FormControl
                                                id="fgInput"
                                                type="number"
                                                name="fg"
                                                value={this.state.fg}
                                                onChange={this.handleInputChange}
                                                placeholder="Enter FG"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6}>
                                        <FormGroup>
                                            <ControlLabel>Preboil Volume</ControlLabel>
                                            <InputGroup>
                                            <FormControl type="number" id="preBoilVolInput" name="preBoil" value={this.state.preBoil} onChange={this.handleInputChange} placeholder="Preboil"/>
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
                                        <FormGroup>
                                            <ControlLabel>Boil Length</ControlLabel>
                                            <InputGroup>
                                                <FormControl type="number" name="boilLength" value={this.state.boilLength} onChange={this.handleInputChange} placeholder="Boil"/>
                                                <InputGroup.Addon>min</InputGroup.Addon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={8}>
                                <FormGroup>
                                    <ControlLabel>Recipe Description</ControlLabel>
                                    <FormControl componentClass="textarea" id="recipeDescription" name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="Description" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup >
                                        <ControlLabel>Base Malt</ControlLabel>
                                        {this.state.baseMaltArr.map((unit, i) => (
                                            
                                            <GrainRow

                                                length = {this.state.baseMaltArr.length}

                                                maltName={`maltName${i}`}
                                                maltWeight={`maltWeight${i}`}

                                                rowNum={this.state.numGrainRow}
                                                nameValue={this.state.baseMaltArr[i].maltName}
                                               
                                                // nameUpdate={this.handleChangeFor(`maltName${i}`, i)}
                                                nameUpdate={this.handleChangeFor(`maltName`, i)}
                                                weightUpdate={this.handleChangeFor(`maltWeight`, i)}

     
                                                weightValue={this.state.baseMaltArr[i].maltWeight}

                                            />
                                        ))}
                                        <Button onClick={this.onAddBaseGrainRow}>New Base Malt</Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup >
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
                                    <FormGroup >
                                        <ControlLabel>Yeast</ControlLabel>
                                        <InputGroup>
                                                <FormControl type="text" name="yeast" value={this.state.yeast} onChange={this.handleInputChange} placeholder="Yeast Name"/>
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
                                        <FormGroup >
                                            <ControlLabel>Hop Additions</ControlLabel>
                                                {this.state.numHopArr.map(unit => (
                                                    <HopRow parent={this.state}/>
                                                ))}
                                            <Button onClick={this.onAddHopRow}>New Hop Addition</Button>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <FormGroup >
                                        <ControlLabel>Misc. Ingredients</ControlLabel>
                                        <FormControl componentClass="textarea" name="misc" value={this.state.misc} onChange={this.handleInputChange} placeholder="Enter Misc. Ingredients" />
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
                                        componentClass="textarea"
                                        name="directions"
                                        value={this.state.directions}
                                        onChange={this.handleInputChange}
                                        placeholder="Instructions"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Button onClick={this.handleFormSubmit}>Submit</Button>
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

