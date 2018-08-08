import React from "react";
import { Col, FormControl, ControlLabel } from 'react-bootstrap';

const LoginInput = props => (

    <Col>
        <ControlLabel className='loginLabel'>{props.name}:</ControlLabel>
        <FormControl 
            id={`login${props.name}`}
            type={props.type} 
            placeholder={props.name}
            value={props.value}
            name={props.type}
            onChange={props.change} 
        />
    </Col>
)

export default LoginInput;