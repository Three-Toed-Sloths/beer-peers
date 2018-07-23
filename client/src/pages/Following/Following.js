import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './Following.css';

const Following = () => {
    return (
        <Col xs={12} className='followingCol'>
            <div className='followingParallax'>
                <div className='followingContainer'>
                    <h1 className='followingHeader'>Following</h1>
                    <hr />
                </div>
            </div>
        </Col>
    );
}

export default Following;