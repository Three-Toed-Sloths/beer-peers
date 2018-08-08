import React from 'react';
import { Panel, Row, Col, Button } from 'react-bootstrap';
import './SuccessCard.css';
import Wrapper from '../Wrapper';

const SuccessCard = () => (
    <Wrapper>
        <Panel className='success-panel'>
            <Wrapper>
                <Row>
                    <h1 className='success-title'><strong>Thank You for Registering!</strong></h1>
                    <hr/>
                    <h3 className='success-h3'>You are now registered and may login. Please click the button below to return to the login page.</h3>
                    <Col xs={0} md={4} />
                    <Col xs={12} md={4}>
                        <Button className='successBtn' href='/' bsSize='large' id='success-button' block >Login Page</Button>
                    </Col>
                </Row>
            </Wrapper>
        </Panel>
    </Wrapper>
);

export default SuccessCard;