import React, {Component} from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './Nav.css';

class Head extends Component {

    state = {
        loggedIn: sessionStorage.getItem('loggedIn')
    };

    componentWillMount() {
        this.checkLogin();
    }

    checkLogin = () => {
        if(this.state.loggedIn){
            this.setLogOutTab();
        } else {
            this.setSignUpTab();
        }
    }

    setLogOutTab = () => {
        this.setState({
            navTab: 'Log Out',
            onNavTabClick: this.handleLogOut
        })
    }

    setSignUpTab = () => {
        this.setState({
            navTab: 'Sign Up',
            onNavTabClick: this.handleSignUp
        })
    }

    handleLogOut = () => {
        sessionStorage.clear();
        window.location.href = `/`;
    }

    handleSignUp = () => {
        window.location.href = `/register`;
    }
    
    render(){
        return(
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className='navName' href='/'>Beer Peers</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem className='navLinks' eventKey={1} onClick={this.state.onNavTabClick}>
                            {this.state.navTab}
                        </NavItem>
                        <NavItem className='navLinks' eventKey={2} href='/recipes'>
                            Top Recipes
                        </NavItem>
                        <NavItem className='navLinks' eventKey={3} href='/brewers'>
                            Top Brewers
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Head;