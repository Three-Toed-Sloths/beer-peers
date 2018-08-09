import React from 'react';

import { Col, Row } from 'react-bootstrap';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';

const GrainRow = props => (
    <Row className='maltInputRow'>
        <Col xs={12} md={6}>
            <FormGroup validationState={props.nameValidation}>
                <InputGroup>
                    <FormControl
                        type='text'
                        className='maltName'
                        name='name'
                        maxLength={50}
                        value={props.nameValue}
                        onChange={props.nameUpdate}
                        placeholder='Malt Name'
                    />
                </InputGroup>
            </FormGroup>
        </Col>
        <Col xs={12} md={6}>
        <FormGroup validationState={props.weightValidation}>
            <InputGroup>
                <FormControl
                    type='number'
                    className='maltWeight'
                    name='amount'
                    min={0}
                    max={10000}
                    value={props.weightValue}
                    onChange={props.weightUpdate}
                    placeholder='Weight'
                />

                <InputGroup.Addon>lbs</InputGroup.Addon>
            </InputGroup>
            </FormGroup>
        </Col>
    </Row>
)

export default GrainRow;