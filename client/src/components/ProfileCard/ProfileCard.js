import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import FollowAlert from './../FollowAlert';
import FollowBtn from './FollowBtn';

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
                        <p className='profileCardText'>{props.userName}</p>
                        <p className='profileCardText profileCardLocation'>{props.location}</p>
                    </div>
                </Col>
                <Col className="profileCardSocial" xs={10} sm={5}>
                    <div>
                        <p className='profileCardText'>{props.email}</p>
                    </div>
                    <div>
                        {/* <Button bsStyle='success' bsSize='large' onClick={props.handleClick}>Follow</Button> */}
                        <FollowBtn brewer={props.brewerID} onClick={props.handleClick} />
                    </div>
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