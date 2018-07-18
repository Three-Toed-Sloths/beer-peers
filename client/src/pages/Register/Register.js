import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
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

        if (name === 'password') {
            value = value.substring(0, 15);
        };

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault()

        alert(`First: ${this.state.first}
Last: ${this.state.last}
Username: ${this.state.username}
Password: ${this.state.password}
Email: ${this.state.email}
Phone: ${this.state.phone}
City: ${this.state.city}`);
// State: ${this.state.state}`);

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
                <FieldGroup
                    id='formFirst'
                    type='text'
                    label='First Name:'
                    placeholder='First Name'
                    value={this.state.first}
                    name='first'
                    onChange={this.handleInputChange}
                />
                <FieldGroup
                    id='formLast'
                    type='text'
                    label='Last Name:'
                    placeholder='Last Name'
                    value={this.state.last}
                    name='last'
                    onChange={this.handleInputChange}
                />
                <FieldGroup
                    id='formUsername'
                    type='text'
                    label='Username:'
                    placeholder='Username'
                    value={this.state.username}
                    name='username'
                    onChange={this.handleInputChange}
                />
                <FieldGroup
                    id='formPassword'
                    type='password'
                    label='Password:'
                    placeholder='Password'
                    value={this.state.password}
                    name='password'
                    onChange={this.handleInputChange}
                />
                <FieldGroup 
                    id='formEmail'
                    type='email'
                    label='Email Address:'
                    placeholder='Email Address'
                    value={this.state.email}
                    name='email'
                    onChange={this.handleInputChange}
                />
                <FieldGroup
                    id='formPhone'
                    type='text'
                    label='Phone Number:'
                    placeholder='Phone Number'
                    value={this.state.phone}
                    name='phone'
                    onChange={this.handleInputChange}
                />
                <FieldGroup
                    id='formCity'
                    type='text'
                    label='City:'
                    placeholder='City'
                    value={this.state.city}
                    name='city'
                    onChange={this.handleInputChange}
                />
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