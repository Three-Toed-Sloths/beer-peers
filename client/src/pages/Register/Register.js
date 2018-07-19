import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Row, Col } from 'react-bootstrap';
import API from '../../utils/userAPI';
import './Register.css';

const FieldGroup = ({ id, label, ...props }) => {
    return(
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
};

class Register extends Component {
    state = {
        first: '',
        last: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        city: ''
        // state: ''
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        // if (name === 'password') {
        //     value = value.substring(0, 15);
        // };

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (!this.state.first || !this.state.last || !this.state.username || 
        !this.state.email) {
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
                    // state: this.state.state
                },
                password: this.state.password
            })
        )

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

        this.setState({
            first: '',
            last: '',
            username: '',
            password: '',
            email: '',
            phone: '',
            city: '',
            // state: ''
        });
    };

    render() {
        return(
            <form>
                <Row>
                    <Col xs={12} md={6}>
                    <FieldGroup
                        id='formFirst'
                        type='text'
                        label='First Name:'
                        placeholder='First Name'
                        value={this.state.first}
                        name='first'
                        onChange={this.handleInputChange}
                    />
                    </Col>
                    <Col xs={12} md={6}>
                    <FieldGroup
                        id='formLast'
                        type='text'
                        label='Last Name:'
                        placeholder='Last Name'
                        value={this.state.last}
                        name='last'
                        onChange={this.handleInputChange}
                    />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <FieldGroup
                            id='formUsername'
                            type='text'
                            label='Username:'
                            placeholder='Username'
                            value={this.state.username}
                            name='username'
                            onChange={this.handleInputChange}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <FieldGroup
                            id='formPassword'
                            type='password'
                            label='Password:'
                            placeholder='Password'
                            value={this.state.password}
                            name='password'
                            onChange={this.handleInputChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <FieldGroup 
                            id='formEmail'
                            type='email'
                            label='Email Address:'
                            placeholder='Email Address'
                            value={this.state.email}
                            name='email'
                            onChange={this.handleInputChange}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <FieldGroup
                            id='formPhone'
                            type='text'
                            label='Phone Number:'
                            placeholder='Phone Number'
                            value={this.state.phone}
                            name='phone'
                            onChange={this.handleInputChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <FieldGroup
                            id='formCity'
                            type='text'
                            label='City:'
                            placeholder='City'
                            value={this.state.city}
                            name='city'
                            onChange={this.handleInputChange}
                        />
                    </Col>
                </Row>
                {/* will have to work on this later */}
                {/* <FieldGroup id='formState'>
                    <controlLabel>Select</controlLabel>
                </FieldGroup> */}
                <FieldGroup 
                    id='formFile'
                    type='file'
                    label='Add a Profile Image:'
                />
                <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
            </form>
        )
    }
}

export default Register;