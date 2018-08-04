// import React from 'react';
import React, {Component} from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './Nav.css';

// const Head = () => (
//     <Navbar collapseOnSelect>
//         <Navbar.Header>
//             <Navbar.Brand>
//                 <a className='navName' href='/'>Beer Peers</a>
//             </Navbar.Brand>
//             <Navbar.Toggle />
//         </Navbar.Header>
//         <Navbar.Collapse>
//             <Nav pullRight>
//                 <NavItem className='navLinks' eventKey={1} href='/register'>
//                     Sign Up
//                 </NavItem>
//                 <NavItem className='navLinks' eventKey={2} href='/recipes'>
//                     Top Recipes
//                 </NavItem>
//                 <NavItem className='navLinks' eventKey={3} href='/brewers'>
//                     Top Brewers
//                 </NavItem>
//             </Nav>
//         </Navbar.Collapse>
//     </Navbar>
// )

// export default Head;



class Head extends Component {

    state = {
        loggedIn: false,
        navTab: '',
        onClick: this.handleSignUp
    };

    componentWillMount() {
        this.checkLogin();
    }

    checkLogin = () => {
        const loggedIn = sessionStorage.getItem('loggedIn');
        if(loggedIn){
            this.setState({
                navTab: 'Log Out',
                onClick: this.handleLogOut
            })
        } else {
            this.setState({
                navTab: 'Sign Up',
                onClick: this.handleSignUp
            })
        }
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
                        <NavItem className='navLinks' eventKey={1} onClick={this.state.onClick}>
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