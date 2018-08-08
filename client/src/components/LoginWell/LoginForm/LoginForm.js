import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Button } from 'react-bootstrap';
import API from '../../../utils/loginAPI'
import LoginInput from './LoginInput';
import Wrapper from '../../../components/Wrapper';
import './LoginForm.css';

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
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
        if(this.checkLoginFieldIsValid()){
            this.checkLoginCredentials();
        }
    }

    checkLoginFieldIsValid = () => {
        if(!this.state.username || !this.state.password){
            this.handleInvalidLogin('Please enter a username and password');
            return false;
        }
        return true;
    }

    checkLoginCredentials = () => {
        API.checkLogin(
            this.state.username, this.state.password
        ).then(res => {
            this.checkPassword(res.data);
        })
        .catch(err => {
            this.handleInvalidLogin('Username does not exist.');
        });
    }

    checkPassword = response => {
        if(response.result){
            this.handleValidLogin(response.id);
        } else {
            this.handleInvalidLogin('Invalid username or password.');
        }
    }

    handleValidLogin = id => {
        const userID = this.setSessionData(id);
        window.location.href = `/profile/${userID}`;
    }

    setSessionData = id => {
        sessionStorage.setItem('userID', id);
        sessionStorage.setItem('loggedIn', true);
        return sessionStorage.getItem('userID')
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
            <Form>
                <Wrapper>
                    <h2 className='loginTitle'>Start Connecting</h2>
                    <h5 className='text-center failedLogin'>{this.state.message}</h5>
                    <FormGroup >
                        <LoginInput name='Username' type='username' value={this.state.username} change={this.handleInputChange}/>
                        <LoginInput name='Password' type='password' value={this.state.password} change={this.handleInputChange}/>
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
        )
    }
}

export default LoginForm;