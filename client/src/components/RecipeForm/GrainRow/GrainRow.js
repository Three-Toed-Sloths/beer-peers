import React from 'react';

import { Col, Row } from 'react-bootstrap';
import { FormControl, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import "./GrainRow.css";

const weightUnits = ['lbs', 'kg', 'oz', 'g'];

const GrainRow = props => (
<Row className="baseMaltInputRow">
    <Col xs={6}>
        <InputGroup>
            <FormControl
                type="text"
                className="maltName"
                // name={props.name}
                // name={`baseMaltName${props.rowNum}`}
                name={props.maltName}
                value={props.nameValue}
                onChange={props.nameUpdate}
                placeholder="Malt Name"
            />
        </InputGroup>
    </Col>
    <Col xs={6}>
        <InputGroup>
            <FormControl
                type="number"
                className="maltWeight"
                name={props.maltWeight}
                // name={`baseMaltWeight${props.rowNum}`}
                value={props.weightValue}
                onChange={props.weightUpdate}
                placeholder="Weight"/>
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