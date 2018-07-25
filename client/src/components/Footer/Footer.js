import React from 'react';
import { Panel, Row, Col, Grid } from 'react-bootstrap';
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
                        <a className='footerAuthor footerAuthorLink' href='https://github.com/yeungpirate' target='_blank'>David Yeung</a><br />
                        <a className='footerAuthor footerAuthorLink' href='https://github.com/Saglietto-Marco' target='_blank'>Marco Saglietto</a><br />
                        <a className='footerAuthor footerAuthorLink' href='https://github.com/nmclear' target='_blank'>Nick Clear</a><br />
                        <a className='footerAuthor footerAuthorLink' href='https://github.com/nrvpatel03' target='_blank'>Nirav Patel</a><br />
                    </Col>
                </Wrapper>
            </Panel>
        </footer>
    </div>
);

export default Footer;