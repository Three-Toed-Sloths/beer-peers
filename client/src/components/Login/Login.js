import React, { Component } from "react";
import "./Login.css"
import { Form, Col, FormGroup, Button, FormControl, Well, ControlLabel } from 'react-bootstrap/lib';
import API from '../../utils/loginAPI';


class Login extends React.Component {


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
        // if (!this.state.password || !this.state.username){
        //     alert('Please fill out all manditory fields.')
        // }
        // else (

        console.log(this.state.username)
        console.log(this.state.password)
            // API.loginUser({
            //     username: this.state.username,
            //     password: this.state.password,
            // })
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
                    this.setState({
                        username: '',
                        password: '',
                        message: 'Incorrect username or password'
                    })
                }
            })
            .catch(err => {
                this.setState({
                    username: '',
                    password: '',
                    message: 'Incorrect username or password'
                })
                console.log(err)
            });
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
                    <h5 className='text-center failedLogin'>{this.state.message}</h5>
                    <FormGroup >
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
                            <Button type="submit">Create Account</Button>
                        </Col>
                    </FormGroup>

                </Form>
            </Well>
            </div>
        )
    }
}

export default Login;