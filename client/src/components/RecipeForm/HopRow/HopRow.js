import React from 'react';

import { Col, Row } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap';

import "./HopRow.css";

const HopRow = props => (
<Row className="hopInputRow">
    <Col xs={3}>
    <ControlLabel>Hop Name</ControlLabel>
        <InputGroup>
            <FormControl
                type="text"
                className="hopName"
                name='name'
                value={props.nameValue}
                onChange={props.nameUpdate}
                placeholder="Hop Name"
            />
        </InputGroup>
    </Col>

    <Col xs={3}>
        <FormGroup>
            <ControlLabel>Alpha-Acids</ControlLabel>
           <InputGroup>
                <FormControl
                    type="number"
                    className="alphaInput"
                    name='alpha'
                    value={props.alphaValue}
                    onChange={props.alphaUpdate}
                    placeholder="Alpha-Acids"
                />
               <InputGroup.Addon>%</InputGroup.Addon>
            </InputGroup>
        </FormGroup>
    </Col>


    <Col xs={3}>
    <ControlLabel>Hop Amount</ControlLabel>
        <InputGroup>
            <FormControl
                type="number"
                className="hopWeight"
                name='amount'
                value={props.weightValue}
                onChange={props.weightUpdate}
                placeholder="Weight"
            />
            <InputGroup.Addon>oz</InputGroup.Addon>
        </InputGroup>
    </Col>
    <Col xs={3}>
        <FormGroup>
            <ControlLabel>Addition</ControlLabel>
           <InputGroup>
               <FormControl
                    type="text"
                    className="hopAddition"
                    name='alpha'
                    value={props.additionValue}
                    onChange={props.additionUpdate}
                    placeholder="30 min"
                />
            </InputGroup>
        </FormGroup>
    </Col>
</Row>
)
    




export default HopRow;