import React from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';

import FollowAlert from './../FollowAlert';

import './ProfileCard.css';

const ProfileCard =  props => (
    <Grid className='profileCardCard'>
        <Row className='profileCardContent'>
            <Col className='profileCardPicture' xs={2} sm={4}>
                <img className='profilePic' src={props.img} alt={`${props.userName}ProfilePic`}></img>
            </Col>
            <div className='profileCardTextHolder'>
                <Col className="profileCardLocation" xs={10} sm={3}>
                    <div>
                        <p className='profileCardText profileCardCap'>{props.userName}</p>
                        <p className='profileCardText profileCardLocation profileCardCap'>{props.location}</p>
                    </div>
                </Col>
                <Col className="profileCardSocial" xs={10} sm={5}>
                    <Row>
                        <Col xs={12}>
                            <p className='profileCardText'>{props.email}</p>
                        </Col>
                        <Col xs={6} sm={3}/>
                        <Col xs={6}>
                            <Button className='profileFollow' bsStyle='warning' bsSize='large' onClick={props.handleClick} block>Follow</Button>
                        </Col>
                        <Col xs={0} sm={3}/>
                    </Row>
                </Col>
            </div>
        </Row>
        <Row>
            <Col xs={12}>
                <FollowAlert
                    handleClick={props.handleClick}
                    message={props.followAlert}
                    status={props.showFollowAlert}
                    closeAlert={props.closeFollowAlert}
                    class={props.alertClass}
                />
            </Col>
        </Row>
    </Grid>
);


export default ProfileCard;