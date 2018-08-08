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
                <hr className='profileCardHR' />
            </Col>
        </Row>
        <Row>
            <Wrapper>
                <Col xs={2} sm={4}>
                    <img className='profilePic' src={props.img} alt={`${props.userName}ProfilePic`}></img>
                </Col>
                <Col xs={10} sm={8}>
                    <p className='profileCardText profileCardLocation profileCardCap'>{props.location}</p>
                    <p className='profileCardText'>{props.email}</p>
                    <Row>
                        <Col xs={6} sm={4} />
                        <Col xs={6} sm={4}>
                            <FollowBtn brewer={props.brewerID} onClick={props.handleClick} />
                        </Col>
                        <Col xs={0} sm={4} />
                    </Row>
                </Col>
            </Wrapper>
        </Row>
        {/* <Row className='profileCardContent'>
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
                        <Col xs={6} sm={6}>
                            <Button className='profileFollow' bsStyle='warning' bsSize='large' onClick={props.handleClick} block>Follow</Button>
                            <FollowBtn brewer={props.brewerID} onClick={props.handleClick} />
                        </Col>
                        <Col xs={0} sm={3}/>
                    </Row>
                </Col>
            </div>
        </Row> */}
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