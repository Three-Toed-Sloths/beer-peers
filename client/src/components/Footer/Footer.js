import React from 'react';
import { Panel, Col, Grid } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper';
import './Footer.css';

const Footer = () => (
    <div>
    <Grid/>
    <footer>
        <Panel className='footerPanel'>
            <Wrapper>
                <Col xs={12} md={9}>
                </Col>
                <Col xs={12} md={3} className='footerAuthorContainer'>
                    <p className='footerAuthor'>Authors:</p>
                    <hr className='footerHR'/>
                    <a className='footerAuthor footerAuthorLink' href='https://github.com/yeungpirate' target='_blank' rel='noopener noreferrer'>David Yeung</a><br />
                    <a className='footerAuthor footerAuthorLink' href='https://github.com/Saglietto-Marco' target='_blank' rel='noopener noreferrer'>Marco Saglietto</a><br />
                    <a className='footerAuthor footerAuthorLink' href='https://github.com/nmclear' target='_blank' rel='noopener noreferrer'>Nick Clear</a><br />
                    <a className='footerAuthor footerAuthorLink' href='https://github.com/nrvpatel03' target='_blank' rel='noopener noreferrer'>Nirav Patel</a><br />
                </Col>
            </Wrapper>
        </Panel>
    </footer>
    </div>
);

export default Footer;