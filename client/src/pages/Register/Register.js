import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Panel, Row, Col } from 'react-bootstrap';
import API from '../../utils/userAPI';
import Wrapper from '../../components/Wrapper';
import SuccesCard from '../../components/SuccesCard';
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
        image: '',
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name.trim();
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (!this.state.first || !this.state.last || !this.state.username || 
        !this.state.email || !this.state.city || !this.state.state) {
            alert('Please fill out all required fields.')
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
                image: this.state.image
            }).then(res => {
                // insert new confirmation page + styling
                window.location.href = `/`
            }).catch (err => {
                console.log(err);
            })
        )
    };
    // =================
    // || Validations ||
    // =================
    
    firstValidation() {
        const length = this.state.first.length;
        if (length > 0) return 'success';
    };

    lastValidation() {
        const length = this.state.last.length;
        if (length > 0) return 'success';
    };

    usernameValidation() {
        const length = this.state.username.length;
        if (length > 3) return 'success';
    };

    passwordValidation() {
        const length = this.state.password.length;
        if (length < 1) return 'error';
        else if (length < 8) return 'warning';
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
        const isRegistered = true;
        return(
            <div className='registerBackground'>
                {isRegistered ? (<SuccesCard/>
                ) : (
                <Wrapper>
                    <Panel className='registerPanel'>
                        <Wrapper>

                            <form className='registerForm'>
                                <Row>
                                    <h1 className='registerH1'>Create New Account:</h1>
                                    <hr />
                                </Row>
                                <Row>
                                    <HelpBlock>Note: All spaces will be trimed from all fields.</HelpBlock>
                                </Row>
                                <Row>
                                    <Col xs={12} md={6}>
                                    <FormGroup controlId={'formFirst'} validationState={this.firstValidation()}>
                                        <ControlLabel className='registerControlLabel'>First Name:</ControlLabel>
                                        <FormControl 
                                            type='text'
                                            placeholder='First Name (Required)'
                                            value={this.state.first}
                                            name='first'
                                            maxLength={50}
                                            onChange={this.handleInputChange}
                                        />
                                        <FormControl.Feedback />
                                    </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                    <FormGroup controlId={'formLast'} validationState={this.lastValidation()}>
                                        <ControlLabel className='registerControlLabel'>Last Name:</ControlLabel>
                                        <FormControl
                                            type='text'
                                            placeholder='Last Name (Required)'
                                            value={this.state.last}
                                            name='last'
                                            maxLength={50}
                                            onChange={this.handleInputChange}
                                        />
                                        <FormControl.Feedback />
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <FormGroup controlId={'formUsername'} validationState={this.usernameValidation()}>
                                            <ControlLabel className='registerControlLabel'>Username:</ControlLabel>
                                            <FormControl
                                                type='text'
                                                placeholder='Username (Required)'
                                                value={this.state.username}
                                                name='username'
                                                maxLength={20}
                                                onChange={this.handleInputChange}
                                            />
                                            <FormControl.Feedback />
                                            <HelpBlock>Must be at least 4 characters long</HelpBlock>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <FormGroup controlId={'formPassword'} validationState={this.passwordValidation()}>
                                            <ControlLabel className='registerControlLabel'>Password:</ControlLabel>
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
                                            <ControlLabel className='registerControlLabel'>Email Address:</ControlLabel>
                                            <FormControl
                                                type='email'
                                                placeholder='Email (Required)'
                                                value={this.state.email}
                                                name='email'
                                                onChange={this.handleInputChange}
                                            />
                                            <FormControl.Feedback />
                                            <HelpBlock>Addresses must contain an '@' and ending (.com / .co / etc.)</HelpBlock>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <FormGroup controlId={'formPhone'} validationState={this.phoneValidation()}>
                                            <ControlLabel className='registerControlLabel'>Phone Number:</ControlLabel>
                                            <FormControl
                                                type='tel'
                                                maxLength={12}
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
                                    <Col xs={8} md={6}>
                                        <FormGroup controlId={'formCity'}>
                                            <ControlLabel className='registerControlLabel'>City:</ControlLabel>
                                            <FormControl
                                                type='text'
                                                placeholder='City (Required)'
                                                value={this.state.city}
                                                name='city'
                                                onChange={this.handleInputChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={2}>
                                        <FormGroup id='formState'>
                                            <ControlLabel className='registerControlLabel'>State:</ControlLabel>
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
                                <Row>
                                    <Col xs={12} md={6}>
                                        <FormGroup controlId={'formImage'}>
                                            <ControlLabel className='registerControlLabel'>Image URL:</ControlLabel>
                                            <FormControl
                                                type='text'
                                                placeholder='Image URL'
                                                value={this.state.image}
                                                name='image'
                                                onChange={this.handleInputChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={0} md={4} />
                                    <Col xs={12} md={4}>
                                        <Button className='registerSubmit' bsSize='large' type='submit' block onClick={this.handleSubmit}>Submit</Button>
                                    </Col>
                                </Row>
                            </form>
                        </Wrapper>
                    </Panel>
                </Wrapper>
            )}
            </div>
        );
    };
};

export default Register;