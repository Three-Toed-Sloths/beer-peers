import React from "react";
import { Grid, Col, Row, Button } from 'react-bootstrap';
import "./ProfileCard.css";

const ProfileCard =  props => (
    <Grid className="profileCardCard">
        <Row className="profileCardContent">
            <Col className="profileCardPicture" xs={2} sm={4}>
                <img className="profilePic" src={props.img} alt={`${props.userName}ProfilePic`}></img>
            </Col>
            <div className='profileCardTextHolder'>
                <Col className="profileCardLocation" xs={10} sm={4}>
                    <div>
                        <p className='profileCardText'>{props.userName}</p>
                        <p className='profileCardText profileCardLocation'>{props.location}</p>
                    </div>
                </Col>
                <Col className="profileCardSocial" xs={10} sm={4}>
                    <div>
                        <p className='profileCardText'>{props.email}</p>
                    </div>
                    <div>
                        <Button bsStyle="success" onClick={props.handleClick}>Follow</Button>
                    </div>
                </Col>
            </div>
        </Row>
    </Grid>
);


export default ProfileCard;