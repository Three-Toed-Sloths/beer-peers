import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Panel, Row, Col } from 'react-bootstrap';
import API from '../../utils/userAPI';
import './Register.css';

const STATES = [ 'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];

class Register extends Component {
    state = {
        first: '',
        last: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        image: ''
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
        if (!this.state.first || !this.state.last || !this.state.username || 
        !this.state.email || !this.state.city || !this.state.state) {
            alert('Please fill out all manditory fields.')
        }
        else (
            API.saveUser({
                name: {
                    first: this.state.first,
                    last: this.state.last
                },
                username: this.state.username,
                contact: {
                    email: this.state.email,
                    phone: this.state.phone,
                    city: this.state.city,
                    state: this.state.state
                },
                password: this.state.password,
                // currently not included in the seed. We'll have to come back and update
                // image: this.state.image
            })
        )
    };
    
    // =================
    // || Validations ||
    // =================
    
    firstValidation() {
        const length = this.state.first.length;
        if (length > 50) return 'error';
        else if (length > 0) return 'success';
    };

    lastValidation() {
        const length = this.state.last.length;
        if (length > 50) return 'error';
        else if (length > 0) return 'success';
    };

    usernameValidation() {
        const length = this.state.username.length;
        if (length > 20) return 'error';
        else if (length > 3) return 'success';
    };

    passwordValidation() {
        const length = this.state.password.length;
        if (length < 8) return 'warning';
        else if (length > 7) return 'success';
    };

    emailValidation() {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.state.email)) return 'success';
    };

    phoneValidation() {
        if (/\d{3}-\d{3}-\d{4}/.test(this.state.phone)) return 'success';
    };

    render() {
        return(
            <Panel>
                <form>
                    <Row>
                        <Col xs={12} md={6}>
                        <FormGroup controlId={'formFirst'} validationState={this.firstValidation()}>
                            <ControlLabel>First Name:</ControlLabel>
                            <FormControl 
                                type='text'
                                placeholder='First Name (Required)'
                                value={this.state.first}
                                name='first'
                                onChange={this.handleInputChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        </Col>
                        <Col xs={12} md={6}>
                        <FormGroup controlId={'formLast'} validationState={this.lastValidation()}>
                            <ControlLabel>Last Name:</ControlLabel>
                            <FormControl
                                type='text'
                                placeholder='Last Name (Required)'
                                value={this.state.last}
                                name='last'
                                onChange={this.handleInputChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6}>
                            <FormGroup controlId={'formUsername'} validationState={this.usernameValidation()}>
                                <ControlLabel>Username:</ControlLabel>
                                <FormControl
                                    type='text'
                                    placeholder='Username (Required)'
                                    value={this.state.username}
                                    name='username'
                                    onChange={this.handleInputChange}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={6}>
                            <FormGroup controlId={'formPassword'} validationState={this.passwordValidation()}>
                                <ControlLabel>Password:</ControlLabel>
                                <FormControl
                                    type='password'
                                    placeholder='Password (Required)'
                                    value={this.state.password}
                                    name='password'
                                    onChange={this.handleInputChange}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <FormGroup controlId={'formEmail'} validationState={this.emailValidation()}>
                                <ControlLabel>Email Address:</ControlLabel>
                                <FormControl
                                    type='email'
                                    placeholder='Email (Required)'
                                    value={this.state.email}
                                    name='email'
                                    onChange={this.handleInputChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter a valid email address.</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={6}>
                            <FormGroup controlId={'formPhone'} validationState={this.phoneValidation()}>
                                <ControlLabel>Phone Number:</ControlLabel>
                                <FormControl
                                    type='tel'
                                    minlength={10}
                                    maxlenght={10}
                                    placeholder='###-###-####'
                                    value={this.state.phone}
                                    name='phone'
                                    onChange={this.handleInputChange}
                                />
                            <FormControl.Feedback />
                            <HelpBlock>Please use the following format: ### - ### - ####</HelpBlock>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} md={6}>
                            <FormGroup controlId={'formCity'}>
                                <ControlLabel>City:</ControlLabel>
                                <FormControl
                                    type='text'
                                    placeholder='City (Required)'
                                    value={this.state.city}
                                    name='city'
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col xs={2} md={1}>
                            <FormGroup id='formState'>
                                <ControlLabel>State:</ControlLabel>
                                <FormControl 
                                    componentClass='select'
                                    value={this.state.state}
                                    name='state'
                                    onChange={this.handleInputChange}
                                >
                                    <option value='' disabled selected>State</option>
                                    {STATES.map(state => ( <option value={state}>{state}</option> ))}
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
                    {/* need to add to user.js */}
                    <Row>
                        <Col xs={12} md={6}>
                            <FormGroup controlId={'formImage'}>
                                <ControlLabel>Image URL:</ControlLabel>
                                <FormControl
                                    type='text'
                                    placeholder='https://website.com/image_source.jpg'
                                    value={this.state.image}
                                    name='image'
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
                </form>
            </Panel>
        )
    }
}

export default Register;