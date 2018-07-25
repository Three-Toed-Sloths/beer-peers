import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './FollowingCard.css';


const FollowingCard =  props => (
    <Grid className='followingCard_card'>
        <Row className='followingCard_content'>
            <Col className='followingCard_picture' sm={3} xs={12}>
                <img className='pic' src='http://www.brattleborofoodcoop.coop/wp-content/uploads/2017/07/cropped-BFC-Sprig-Favicon-450x450.png' alt={`${props.user.username}ProfilePic`}></img>
            </Col>
            <Col className='followingCard_name' sm={3} xs={12}>
                <h2>{props.user.name.first} {props.user.name.last}</h2>
                <p>{props.user.username}</p>
            </Col>
            <Col className='followingCard_location' sm={3} xs={12}>
               
                    <p>{props.user.contact.city}, {props.user.contact.state}</p>
                
            </Col>
            <Col className='followingCard_social' sm={3} xs={12}>
             
                    <p>{props.user.contact.email}</p>
               
            </Col>
        </Row>
    </Grid>
);



export default FollowingCard;