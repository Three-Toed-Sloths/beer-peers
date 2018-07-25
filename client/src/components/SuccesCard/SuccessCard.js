import React, { Component } from 'react';
import { Panel, Row, Col, Button } from 'react-bootstrap';
import './SuccessCard.css';
import Wrapper from '../Wrapper';

const SuccessCard = () => (
    <Wrapper>
        <Panel className='success-panel'>
            <Wrapper>
                <Row>
                    <p className='text-center'>
                        <h1 className='success-title'><strong>Congrautlations!</strong></h1>
                        <hr/>
                        <h3 className='success-h3'>You are now registered and may login. Please click the button below to go to the login page.</h3>
                    </p>
                    <Col xs={0} md={4} />
                    <Col xs={12} md={4}>
                        <Button href='/' id='success-button' block>Login Page</Button>
                    </Col>
                </Row>
            </Wrapper>
        </Panel>
    </Wrapper>
);

export default SuccessCard;