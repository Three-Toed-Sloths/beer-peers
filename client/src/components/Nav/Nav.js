import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './Nav.css';

const Head = () => (
    <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a className='navName' href='/'>Beer Peers</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem className='navLinks' eventKey={1} href='/register'>
                    Sign Up
                </NavItem>
                <NavItem className='navLinks' eventKey={2} href='/likes'>
                    Top Recipes
                </NavItem>
                <NavItem className='navLinks' eventKey={3} href='/following'>
                    Top Brewers
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Head;