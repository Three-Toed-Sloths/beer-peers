import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import SecondaryNav from '../../components/SecondaryNav';
import Wrapper from '../../components/Wrapper';
import './Following.css';

const Following = () => {
    return (
        <div>
            <div className='followingCol'>
                <div className='followingParallax'>
                    <div className='followingContainer'>
                        <h1 className='followingHeader'>Following</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div>
                <Grid />
            </div>
            <Wrapper>
                <Row>
                    <SecondaryNav />
                </Row>
            </Wrapper>
        </div>
    );
};

export default Following;