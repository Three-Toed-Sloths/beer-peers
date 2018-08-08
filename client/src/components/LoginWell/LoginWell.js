import React from "react";
import { Well, Row, Col } from 'react-bootstrap';
import WellActionBtn from './WellActionBtn';
import LoginForm from './LoginForm';
import Wrapper from '../Wrapper';

const LoginWell = () => {

    if(sessionStorage.getItem('loggedIn')){
        return (
            <Well>
                <Wrapper>
                    <h2 className='loginTitle'>What's your next brew?</h2>
                    <Row>
                        <Col xs={12} sm={6}>
                            <WellActionBtn class='landingBtn' link='/recipes' name='Top Recipes' />
                        </Col>
                        <Col xs={12} sm={6}>
                            <WellActionBtn class='landingBtn' link='/brewers' name='Top Brewers' />
                        </Col>
                    </Row>
                </Wrapper>
            </Well>
        )
    }

    return (
        <Well>
            <LoginForm />
        </Well>
    )
}

export default LoginWell;