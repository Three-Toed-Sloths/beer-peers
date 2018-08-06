import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './FollowingCard.css';

const FollowingCard =  props => (
    <a href={`/profile/${props.user._id}`}>
    <Grid className='followingCard_card'>
        <Row className='followingCard_content'>
            <Col className='followingCard_picture' sm={3} xs={12}>
                <img className='followPic' src={props.user.image} alt={`${props.user.username}ProfilePic`}></img>
            </Col>
            <Col className='followingCard_name' sm={3} xs={12}>
                <h2>{props.user.name.first} {props.user.name.last}</h2>
                <p>{props.user.username}</p>
            </Col>
            <Col className='followingCard_location' sm={3} xs={12}>
                <p>{props.user.contact.city}, {props.user.contact.state}</p>
                <p>{props.user.contact.email}</p>
            </Col>
        </Row>
    </Grid>
    </a>
);

export default FollowingCard;