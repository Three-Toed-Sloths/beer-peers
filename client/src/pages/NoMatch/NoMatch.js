import React from "react";

import { Grid, Col, Row, Jumbotron, Button } from 'react-bootstrap';

import './NoMatch.css'

const NoMatch = () => (
    <Grid className='noMatch'>
        <Row>
            <Col xs={12}>
                <Jumbotron className='jumbo'>
                    <h1>404 Page Not Found</h1>
                    <h2>
                        You seem to be lost..
                    </h2>
                    <p>
                        <Button href='/'bsStyle='primary'>Go Home</Button>
                    </p>
                </Jumbotron>;
            </Col>
        </Row>
    </Grid>
)




export default NoMatch;
