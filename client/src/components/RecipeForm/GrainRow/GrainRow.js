import React from 'react';

import { Grid, Col, Row, Button } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import "./GrainRow.css";

const weightUnits = ['lbs', 'kg', 'oz', 'g'];

const GrainRow = props => (
<Row className="baseMaltInputRow">
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
</Row>
)
    




export default GrainRow;