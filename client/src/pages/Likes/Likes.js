import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './Likes.css';

const Likes = () => {
    return (
        <Row>
            <Col xs={12} className='likesCol'>
                <div className='likesParallax'>
                    <div className='likesContainer'>
                        <h1 className='likesHeader'>Likes</h1>
                        <hr />
                    </div>
                </div>
            </Col>
        </Row>
        // <Grid>
        // </Grid>
    );
}

export default Likes;