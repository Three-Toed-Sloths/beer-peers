import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Button, FormControl, Well, ControlLabel, Image } from 'react-bootstrap';
import API from '../../utils/userAPI';
import Wrapper from '../../components/Wrapper';
import './LandingPage.css';

class LandingPage extends React.Component {
    state = {
        username: '',
        password: ''
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
        // if (!this.state.password || !this.state.username){
        //     alert('Please fill out all manditory fields.')
        // }
        // else (
            API.Login({
                username: this.state.username,
                password: this.state.password,
            })
        // )
    }

    render() {

        const {
            horizontal,
            inline,
            componentClass: Component,
            className,
            ...props
        } = this.props;

        return (
            <div>
                <div className='landingBackground'>
                    <Wrapper className='landingLogin'>
                        <h1 className='landingTitle'>Beer Peers</h1>
                        <h2 className='landingCatch'>'Where hoppy hour is when you make it'</h2>
                        <Well className='col-lg-4 col-lg-offset-4'>
                            <Form horizontal>
                                <Wrapper>
                                    <h2 className='loginTitle'>Login</h2 >
                                    <FormGroup controlId="formHorizontalEmail">
                                        <div className='border rounded'>
                                            <Col>
                                                <ControlLabel className='loginLabel'>Username:</ControlLabel>
                                                <FormControl 
                                                    type="username" 
                                                    placeholder="Username"
                                                    value={this.state.first}
                                                    name='username'
                                                    onChange={this.handleInputChange} 
                                                />
                                            </Col>
                                            <Col>
                                                <ControlLabel className='loginLabel'>Password:</ControlLabel>
                                                <FormControl 
                                                    type="password" 
                                                    placeholder="Password"
                                                    type="username" 
                                                    placeholder="Password"
                                                    value={this.state.first}
                                                    name='username'
                                                    onChange={this.handleInputChange}
                                                />
                                            </Col>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col xs={12} md={6}>
                                                <Button className='landingBtn' bsSize='large' bsStyle='primary' type="submit" onClick={this.handleSubmit} block>Log in</Button>
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
                <div>
                    <Wrapper>
                        <Row>
                            <h2 className='landingSubTitle'>Connect with Other Brewers</h2>
                            <hr className='landingHR' />
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Image src='../../images/alexander-mils-431544-unsplash.jpg' alt='glass of beer' rounded responsive />
                            </Col>
                            <Col xs={6}>
                                <Row>
                                    <Col xs={12}>
                                        <ul className='landingList'>
                                            <li>Learn how to brew from others</li>
                                            <li>Share your recipes and get feedback</li>
                                            <li>Connect with like minded people</li>
                                            <li>Save your own recipes and collect your favorites all in one place</li>
                                        </ul>
                                    </Col>
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={0} md={4} />
                                            <Col xs={12} md={4}>
                                                <Button className='landingBtn' bsSize='large' block href='/register'>Sign up</Button>
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