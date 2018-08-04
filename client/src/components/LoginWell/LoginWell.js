import React from "react";
import { Form, Row, Col, FormGroup, Button, Well } from 'react-bootstrap';
import Wrapper from '../Wrapper';
import WellActionBtn from './WellActionBtn';
import LoginInput from './LoginInput';
import './LoginWell.css';

const LoginWell = props => {

    if(sessionStorage.getItem('loggedIn')){
        return (
            <Well>
                <h2 className='loginTitle'>What's your next brew?</h2>
                <WellActionBtn class='landingBtn' link='/recipes' name='Top Recipes' />
                <WellActionBtn class='landingBtn' link='/brewers' name='Top Brewers' />
            </Well>
        )
    }

    return (
        <Well>
            <Form>
                <Wrapper>
                    <h2 className='loginTitle'>Start Connecting</h2>
                    <h5 className='text-center failedLogin'>{props.message}</h5>
                    <FormGroup >
                        <LoginInput name='Username' type='username' value={props.username} change={props.handleInputChange}/>
                        <LoginInput name='Password' type='password' value={props.password} change={props.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col xs={12} md={6}>
                                <Button className='landingBtn' bsStyle='primary' bsSize='large' type="submit" onClick={props.handleSubmit} block>Log In</Button>
                            </Col>
                            <Col xs={12} md={6}>
                                <Button className='landingBtn' bsSize='large' type="submit" href='/register' block>Create Account</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                </Wrapper>
            </Form>
        </Well>
    )
}

export default LoginWell;