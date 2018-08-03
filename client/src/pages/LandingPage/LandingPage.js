import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Button, FormControl, Well, ControlLabel } from 'react-bootstrap';
import API from '../../utils/loginAPI';
import Wrapper from '../../components/Wrapper';
import './LandingPage.css';

class LandingPage extends Component {
    state = {
        username: '',
        password: '',
        success: false,
        message: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if(!this.state.username || !this.state.password){
            this.handleInvalidLogin('Please enter a username and password');
            return
        }
        API.checkLogin(
            this.state.username, this.state.password
        ).then(res => {
            // console.log(res.data.password +  " res.data");
            // if(res.data.password === this.state.password){
            //     this.setState({
            //         success: true,
            //         id: res.data._id
            //     })
            //     sessionStorage.setItem('userID', this.state.id);
            //     sessionStorage.setItem('loggedIn', true);

            //     let userID = sessionStorage.getItem('userID')

            //     // window.location.href = `/personal/${this.state.id}`;
            //     window.location.href = `/personal/${userID}`;
            // } else {
            //     console.log('wrong password')
            //     this.handleInvalidLogin();
            // }
            if(res.data.result){
                console.log('succeessssss')
                sessionStorage.setItem('userID', res.data.id);
                let userID = sessionStorage.getItem('userID');
                sessionStorage.setItem('loggedIn', true);
                window.location.href = `/personal/${userID}`;
            } else {
                this.handleInvalidLogin('Invalid username or password.');
                
            }
        })
        .catch(err => {
            this.handleInvalidLogin('Username does not exist.');
            console.log('wrong username')
            return err
        });
    }

    handleInvalidLogin = message => {
        this.setState({
            username: '',
            password: '',
            message: message
        })
    }

    render() {

        return (
            <div>
                <div className='landingBackground'>
                    <Wrapper className='landingLogin'>
                        <h1 className='landingTitle'>Beer Peers</h1>
                        <h2 className='landingCatch'>'Where hoppy hour is when you make it'</h2>
                        <Row>
                            <Col xs={0} md={2} lg={3} />
                            <Col xs={12} md={8} lg={6}>
                                <Well>
                                    <Form>
                                        <Wrapper>
                                            <h2 className='loginTitle'>Start Connecting</h2>
                                            <h5 className='text-center failedLogin'>{this.state.message}</h5>
                                            <FormGroup >
                                                <Col>
                                                    <ControlLabel className='loginLabel'>Username:</ControlLabel>
                                                    <FormControl 
                                                        id="loginUsername" 
                                                        type="username" 
                                                        placeholder="Username"
                                                        value={this.state.username}
                                                        name='username'
                                                        onChange={this.handleInputChange} 
                                                    />
                                                </Col>
                                                <Col>
                                                    <ControlLabel className='loginLabel'>Password:</ControlLabel>
                                                    <FormControl 
                                                        id="loginPassword"
                                                        type="password"
                                                        placeholder="Password"
                                                        value={this.state.password}
                                                        name='password'
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col xs={12} md={6}>
                                                        <Button className='landingBtn' bsStyle='primary' bsSize='large' type="submit" onClick={this.handleSubmit} block>Log In</Button>
                                                    </Col>
                                                    <Col xs={12} md={6}>
                                                        <Button className='landingBtn' bsSize='large' type="submit" href='/register' block>Create Account</Button>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                        </Wrapper>
                                    </Form>
                                </Well>
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
    }
}

export default LandingPage;