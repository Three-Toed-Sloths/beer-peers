import React, {Component} from 'react';
import {Panel, Row, Col, Button} from 'react-bootstrap';
import './SuccessCard.css';
import Wrapper from '../Wrapper';

const SuccessCard = () => (
    <Wrapper>
        <Panel>
            <Row>
                <p className='text-center'>
                    <h1><strong>Congrautlations!</strong></h1> 
                    <h3>You are now registered and may login. Please click the button below to go to the login screen.</h3>
                </p>
                <Col xs={0} md={4}/>
                <Col xs={12} md={4}>
                    <Button  bsStyle="success" href='/' id='success-login' block>Login Page</Button>
                </Col>
            </Row>
        </Panel>
    </Wrapper>
);

export default SuccessCard;