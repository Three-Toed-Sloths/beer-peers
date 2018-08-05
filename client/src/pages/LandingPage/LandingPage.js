import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper';
import LoginWell from '../../components/LoginWell';
import './LandingPage.css';

const LandingPage = () => (
    <div>
        <div className='landingBackground'>
            <Wrapper className='landingLogin'>
                <h1 className='landingTitle'>Beer Peers</h1>
                <h2 className='landingCatch'>'Where hoppy hour is when you make it'</h2>
                <Row>
                    <Col xs={0} md={2} lg={3} />
                        <Col xs={12} md={8} lg={6}>
                        <LoginWell />
                    </Col>
                </Row>
            </Wrapper>
        </div>
        <div className='landingBottom'>
            <Wrapper>
                <Row>
                    <h2 className='landingSubTitle'>Connect with Other Brewers</h2>
                    <hr className='landingHR' />
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <div className='landingAddOn' />
                    </Col>
                    <Col xs={12} md={6}>
                        <Row>
                            <Col xs={12}>
                                <ul className='landingList'>
                                    <li className='landingFirstListItem landingListItem'>Learn how to brew from others</li>
                                    <li className='landingListItem'>Connect with like minded people</li>
                                    <li className='landingListItem'>Share your recipes and get feedback</li>
                                    <li className='landingListItem'>Save your own recipes and collect your favorites all in one place</li>
                                </ul>
                            </Col>
                            <Col xs={12}>
                                <Row>
                                    <Col xs={0} md={4} />
                                    <Col xs={12} md={4}>
                                        <Button className='landingBtn' bsSize='large' block href='/register'>Sign Up</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Wrapper>
        </div>
    </div>
)

export default LandingPage;