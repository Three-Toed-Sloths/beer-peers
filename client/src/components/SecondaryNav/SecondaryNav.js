import React from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import "./SecondaryNav.css";

const SecondaryNav = () => (
    <Grid>
        <Row>
            <Navbar>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        <h1>Overview</h1>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <h1>Recipes</h1>
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        <h1>Follows</h1>
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        <h1>Likes</h1>
                    </NavItem>
                </Nav>
            </Navbar>
        </Row>
    </Grid>
);

export default SecondaryNav;

