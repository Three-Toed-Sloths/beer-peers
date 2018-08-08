import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Wrapper from '../Wrapper';
import FollowAlert from './../FollowAlert';
import FollowBtn from './FollowBtn';
import './ProfileCard.css';

const ProfileCard =  props => (
    <Grid className='profileCardCard'>
        <Row>
            <Col xs={12}>
                <Wrapper>
                    <h1 className='profileCardName profileCardCap'>{props.userName}</h1>
                </Wrapper>
            </Col>
        </Row>
        <Row>
            <Wrapper>
                <Col xs={12} sm={5}>
                    <img className='profilePic' src={props.img} alt={`${props.userName}ProfilePic`}></img>
                </Col>
                <Col xs={12} sm={7}>
                    <p className='profileCardText profileCardLocation profileCardCap'>{props.location}</p>
                    <p className='profileCardText profileCardEmail'>{props.email}</p>
                    <Row>
                        <Col xs={0} sm={2} />
                        <Col xs={12} sm={6}>
                            <FollowBtn brewer={props.brewerID} onClick={props.handleClick} />
                        </Col>
                        <Col xs={0} sm={4} />
                    </Row>
                </Col>
            </Wrapper>
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