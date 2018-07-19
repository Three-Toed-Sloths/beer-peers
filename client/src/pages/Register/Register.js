import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Row, Col, Feedback } from 'react-bootstrap';
import API from '../../utils/userAPI';
import './Register.css';

class Register extends Component {
    state = {
        first: '',
        last: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        city: '',
        // state: ''
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
        // if (!this.state.first || !this.state.last || !this.state.username || 
        // !this.state.email) {
        //     alert('Please fill out all manditory fields.')
        // }
        // else (
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
                    // state: this.state.state
                },
                password: this.state.password,
                // currently not included in the seed. We'll have to come back and update
                // image: this.state.image
            })
        // )

        
        // ==============================
        // || Checking Form Submission ||
        // ==============================

        let newUser = {
            name: {
                fist: this.state.first,
                last: this.state.last
            },
            username: this.state.username,
            contact: {
                email: this.state.email,
                phone: this.state.phone,
                city: this.state.city,
                // state: this.state.state
            },
            password: this.state.password
        };

        console.log(newUser);

        // ===============
        // || End Check ||
        // ===============

        // this.setState({
        //     first: '',
        //     last: '',
        //     username: '',
        //     password: '',
        //     email: '',
        //     phone: '',
        //     city: '',
        //     state: ''
        // });
    };

    // handleValidateName() {
    //     const length = this.state.value.length;
    //     if (length > 1) return 'success';
    //     else if (length > 50) return 'error';
    //     return null;
    // };
    // handleValidationState() {
    //     const length = this.state.value.length;
    //     if (length > 10) return 'success';
    //     else if (length > 5) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    // }

    render() {
        return(
            <form>
                <Row>
                    <Col xs={12} md={6}>
                    <FormGroup controlId={'formFirst'}>
                        <ControlLabel>First Name:</ControlLabel>
                        <FormControl 
                            type='text'
                            placeholder='First Name'
                            value={this.state.first}
                            name='first'
                            onChange={this.handleInputChange}
                        />
                        {/* setup for the validation. still testing */}
                        {/* validateName={this.handleValidationState()} */}
                        <FormControl.Feedback />
                    </FormGroup>
                    </Col>
                    <Col xs={12} md={6}>
                    <FormGroup controlId={'formLast'}>
                        <ControlLabel>Last Name:</ControlLabel>
                        <FormControl
                            type='text'
                            placeholder='Last Name'
                            value={this.state.last}
                            name='last'
                            onChange={this.handleInputChange}
                        />
                        {/* setup for the validation. still testing */}
                        {/* validateName={this.handleValidationState()} */}
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <FormGroup controlId={'formUsername'}>
                            <ControlLabel>Username:</ControlLabel>
                            <FormControl
                                type='text'
                                placeholder='Username'
                                value={this.state.username}
                                name='username'
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={6}>
                        <FormGroup controlId={'formPassword'}>
                            <ControlLabel>Password:</ControlLabel>
                            <FormControl
                                type='password'
                                placeholder='Password'
                                value={this.state.password}
                                name='password'
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <FormGroup controlId={'formEmail'}>
                            <ControlLabel>Email Address:</ControlLabel>
                            <FormControl
                                type='email'
                                placeholder='Email Address'
                                value={this.state.email}
                                name='email'
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={6}>
                        <FormGroup controlId={'formPhone'}>
                            <ControlLabel>Phone Number:</ControlLabel>
                            <FormControl
                                type='text'
                                placeholder='Phone Number'
                                value={this.state.phone}
                                name='phone'
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <FormGroup controlId={'formCity'}>
                            <ControlLabel>City:</ControlLabel>
                            <FormControl
                                type='text'
                                placeholder='City'
                                value={this.state.city}
                                name='city'
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                {/* will have to work on this later */}
                {/* <FieldGroup id='formState'>
                    <controlLabel>Select</controlLabel>
                </FieldGroup> */}
                <FormGroup controlId={'formImage'}>
                    <ControlLabel>Image URL:</ControlLabel>
                    <FormControl
                        type='text'
                        placeholder='Image URL'
                        value={this.state.image}
                        name='image'
                        onChange={this.handleInputChange}
                    />
                </FormGroup>
                <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
            </form>
        )
    }
}

export default Register;