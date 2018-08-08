import React from 'react';
import { Panel, Well, Col, Grid } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper';
import './Footer.css';

const Footer = () => (
    <div>
        <Grid/>
        <footer>
            <Panel className='footerPanel'>
                <Wrapper>
                    <Col xs={12} sm={4} md={3}>
                        <p className='footerAuthor'>Other Projects: </p>
                        <hr className='footerHR'/>
                        <a className='footerAuthor footerAuthorLink' href='https://cookie-seller-app.herokuapp.com/' target='_blank' rel='noopener noreferrer'> Cookie Finder</a><br />
                        <a className='footerAuthor footerAuthorLink' href='https://americone-dream.github.io/Loiter/' target='_blank' rel='noopener noreferrer'> Loiter</a><br />
                    </Col>
                    <Col xs={0} sm={4} md={6} />
                    <Col xs={12} sm={4} md={3} className='footerAuthorContainer'>
                        <p className='footerAuthor'>Authors:</p>
                        <hr className='footerHR'/>
                        <a className='footerAuthor footerAuthorLink' href='https://github.com/davidyeungcoding' target='_blank' rel='noopener noreferrer'>David Yeung</a><br />
                        <a className='footerAuthor footerAuthorLink' href='https://github.com/Saglietto-Marco' target='_blank' rel='noopener noreferrer'>Marco Saglietto</a><br />
                        <a className='footerAuthor footerAuthorLink' href='https://github.com/nmclear' target='_blank' rel='noopener noreferrer'>Nick Clear</a><br />
                        <a className='footerAuthor footerAuthorLink' href='https://github.com/nrvpatel03' target='_blank' rel='noopener noreferrer'>Nirav Patel</a><br />
                    </Col>
                </Wrapper>
            </Panel>
            <Grid/>
            <Well className='footerWell'>
                <Wrapper>
                    <Col xs={12} sm={8} md={9}>
                        <p className='footerBottom'>&copy; 2018 Beer Peers</p>
                    </Col>
                    <Col xs={12} sm={4} md={3}>
                        <a className='footerBottom' href='https://github.com/Three-Toed-Sloths' target='_blank' rel='noopener noreferrer'>Team GitHub</a>
                    </Col>
                </Wrapper>
            </Well>
        </footer>
    </div>
);

export default Footer;