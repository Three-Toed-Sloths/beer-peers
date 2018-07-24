import React, { Component } from "react";
import "./Login.css"
import { Form, Col, FormGroup, Button, FormControl, Well, ControlLabel } from 'react-bootstrap/lib';
import API from '../../utils/loginAPI';


class Login extends Component {

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
                                    id="loginUsername" 
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
                        <Col>
                            <Button id="loginBtn" type="submit" bsStyle="primary" onClick={this.handleSubmit}>Log in</Button>
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