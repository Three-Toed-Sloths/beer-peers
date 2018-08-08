import React from "react";
import { Grid, Col, Row, Jumbotron, Button } from 'react-bootstrap';
import './SignInAlert.css';

const SignInAlert = () => (
    <Grid className='noMatch'>
        <Row>
            <Col xs={12}>
                <Jumbotron className='jumbo'>
                    <h1>You Hop'd To Far</h1>
                    <h2>
                        Please Login To Add A Recipe
                    </h2>
                    <Row>
                        <Col col xs={12} sm={6}>
                            <p>
                                <Button href='/'bsStyle='primary'>Login</Button>
                            </p>
                        </Col>
                        <Col col xs={12} sm={6}>
                            <p>
                                <Button href='/register'bsStyle='primary'>Sign Up</Button>
                            </p>
                        </Col>
                    </Row>
                </Jumbotron>;
            </Col>
        </Row>
    </Grid>
)

export default SignInAlert;