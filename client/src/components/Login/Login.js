import React, { Component } from "react";
import "./Login.css"
import { Form, Col, FormGroup, Button, FormControl, Well, ControlLabel } from 'react-bootstrap/lib';
import API from '../../utils/userAPI';


class Login extends React.Component {


    state = {
        username: '',
        password: ''
    };

    logIn = loginData => {
        console.log('loginAPI data ' + loginData.username + loginData.password +'  '+JSON.stringify(loginData))
        API.logIn(loginData)
        .then(res => console.log('check login'))
        .catch(err => console.log(err));
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

        console.log(this.state.username + ' username')
        console.log(this.state.password + ' password')
            let loginData = {
                username: this.state.username,
                password: this.state.password,
            }
        this.logIn(loginData);
        // )
    };

    render() {

        const {
            horizontal,
            inline,
            componentClass: Component,
            className,
            ...props
        } = this.props;

        return (
            <div id='main'>
            <h1>Welcome to the Brewers App</h1>
            <h2>"Catchy Slogan"</h2>
            <Well className='col-lg-4 col-lg-offset-4'>
                <Form horizontal>
                    <h2 className='text-center'>Please Sign In <br/> --or-- <br/> Create an Account</h2 >
                    <FormGroup controlId="formHorizontalEmail">
                        <div className='border rounded'>
                            <Col>
                                <ControlLabel>Username:</ControlLabel>
                                <FormControl 
                                    type="username" 
                                    placeholder="Username"
                                    value={this.state.username}
                                    name='username'
                                    onChange={this.handleInputChange} 
                                />
                            </Col>
                            <Col>
                                <ControlLabel>Password:</ControlLabel>
                                <FormControl 
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
                        <Col>
                            <Button type="submit" bsStyle="primary" onClick={this.handleSubmit}>Log in</Button>
                            <Button type="create">Create Account</Button>
                        </Col>
                    </FormGroup>

                </Form>
            </Well>
            </div>
        )
    }
}

export default Login;