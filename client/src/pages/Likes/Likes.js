import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './Likes.css';

const Likes = () => {
    return (
        <Grid className='marquee'>
            <Row>
                <Col xs={12}>
                    <div className='likesParallax'>
                        <div className='likesContainer'>
                            <h1 className='likesHeader'>Likes</h1>
                            <hr />
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    );
}

export default Likes;