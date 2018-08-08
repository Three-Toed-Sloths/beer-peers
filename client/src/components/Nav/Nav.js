import React, {Component} from 'react';
import { Navbar, NavItem, Nav, Glyphicon } from 'react-bootstrap';
import './Nav.css';

class Head extends Component {

    state = {
        loggedIn: sessionStorage.getItem('loggedIn'),
        brewer: sessionStorage.getItem('userID'),
        profileLink: '',
        display: {display: 'none'}

    };

    componentWillMount() {
        this.checkLogin();
    }

    checkLogin = () => {
        if(this.state.loggedIn){
            this.setLogOutTab();
            this.displayViewProfileLink();
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

    displayViewProfileLink = () => {
        this.setState({
            profileLink: `/profile/${this.state.brewer}`,
            display: {display: 'inline'}
        })
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
                        <NavItem className='navLinks' eventKey={1} href='/'>
                        <Glyphicon glyph='home' />
                        </NavItem>
                        <NavItem className='navLinks' eventKey={2} href='/brewers'>
                            Top Brewers
                        </NavItem>
                        <NavItem className='navLinks' eventKey={3} href='/recipes'>
                            Top Recipes
                        </NavItem>
                        <NavItem className='navLinks' style={this.state.display} eventKey={4} href={this.state.profileLink}>
                            <Glyphicon glyph='user' />
                        </NavItem>
                        <NavItem className='navLinks' eventKey={5} onClick={this.state.onNavTabClick}>
                            {this.state.navTab}
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Head;