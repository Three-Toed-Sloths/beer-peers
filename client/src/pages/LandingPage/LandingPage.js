import React from 'react';
import './LandingPage.css';
import AboutBanner from "./../../components/AboutBanner";
import { Container, Row } from "./../../components/Grid"
import Login from "./../../components/Login";


const LandingPage = () => {
    return (
        <div>
        <Container>

          <Row>
            <Login>
            </Login>
          </Row>
        </Container>
        <AboutBanner/>
        
      </div>
    );
}

export default LandingPage;