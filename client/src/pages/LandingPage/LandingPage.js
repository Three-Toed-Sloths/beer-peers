import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Button, FormControl, Well, ControlLabel, Image } from 'react-bootstrap';
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
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        API.checkUsername(
            this.state.username
        ).then(res => {

            if(res.data.password === this.state.password){
                this.setState({
                    success: true,
                    id: res.data._id
                })
                window.location.href = `/profile/${this.state.id}`;
            } else {
                this.handleInvalidLogin();
            }
        })
        .catch(err => {
            this.handleInvalidLogin();
            console.log(err)
            return err
        });
    }

    handleInvalidLogin = () => {
        this.setState({
            username: '',
            password: '',
            message: 'Incorrect username or password'
        })
    }

    render() {

        return (
            <div>
                <div className='landingBackground'>
                    <Wrapper className='landingLogin'>
                        <h1 className='landingTitle'>Beer Peers</h1>
                        <h2 className='landingCatch'>'Where hoppy hour is when you make it'</h2>
                        <Well className='col-lg-4 col-lg-offset-4'>
                            <Form horizontal>
                                <Wrapper>
                                    <h2 className='loginTitle'>Start Connecting</h2>
                                    <h5 className='text-center failedLogin'>{this.state.message}</h5>
                                    <FormGroup >
                                        <div className='border rounded'>
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
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col xs={12} md={6}>
                                                <Button id='loginBtn' className='landingBtn' bsSize='large' bsStyle='primary' type="submit" onClick={this.handleSubmit} block>Log In</Button>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <Button className='landingBtn' bsSize='large' type="create" block href='/register'>Create Account</Button>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Wrapper>
                            </Form>
                        </Well>
                    </Wrapper>
                </div>
                <div className='landingBottom'>
                    <Wrapper>
                        <Row>
                            <h2 className='landingSubTitle'>Connect with Other Brewers</h2>
                            <hr className='landingHR' />
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <div className='landingAddOn' />
                            </Col>
                            <Col xs={6}>
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