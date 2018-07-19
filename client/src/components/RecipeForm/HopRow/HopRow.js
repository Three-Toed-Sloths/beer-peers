import React from 'react';

import { Col, Row } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import "./HopRow.css";

const hopType = ['Pellet', 'Extract', 'Whole Leaf'];
const weightUnits = ['lbs', 'kg', 'oz', 'g'];

const HopRow = props => (
<Row className="hopInputRow">
    <Col xs={3}>
    <ControlLabel>Hop Name</ControlLabel>
        <InputGroup>
            <FormControl type="text" id="hopName" placeholder="Hop Name"/>
            <DropdownButton
                componentClass={InputGroup.Button}
                id="input-dropdown-addon"
                title="Type"
            >
                {hopType.map(unit => (
                    <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                ))}
            </DropdownButton>
        </InputGroup>
    </Col>

    <Col xs={3}>
        <FormGroup controlId="alpha">
            <ControlLabel>Alpha-Acids</ControlLabel>
           <InputGroup>
               <FormControl id="alphaInput" type="number" placeholder="Alpha-Acids"/>
               <InputGroup.Addon>%</InputGroup.Addon>
            </InputGroup>
        </FormGroup>
    </Col>


    <Col xs={3}>
    <ControlLabel>Hop Amount</ControlLabel>
        <InputGroup>
            <FormControl type="number" id="hopWeight" placeholder="Weight"/>
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
    <Col xs={3}>
        <FormGroup controlId="hopAddition">
            <ControlLabel>Addition</ControlLabel>
           <InputGroup>
               <FormControl id="hopAddition" type="text" placeholder="30 min"/>
            </InputGroup>
        </FormGroup>
    </Col>
</Row>
)
    




export default HopRow;