import React, { Component } from "react";
import "./Login.css"
import { Form, Col, FormGroup, Button, FormControl, Well, ControlLabel } from 'react-bootstrap/lib';
import API from '../../utils/userAPI';


class Login extends React.Component {


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
                                    value={this.state.first}
                                    name='username'
                                    onChange={this.handleInputChange} 
                                />
                            </Col>
                            <Col>
                                <ControlLabel>Password:</ControlLabel>
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