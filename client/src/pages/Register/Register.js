import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Row, Col } from 'react-bootstrap';
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
                state: this.state.state
            },
            password: this.state.password,
            image: this.state.image
        };

        console.log(newUser);

        // ==================
        // || Reset States ||
        // ==================

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
    
    // =================
    // || Validations ||
    // =================
    
    firstValidation() {
        const length = this.state.first.length;
        if (length > 50) return 'error';
        else if (length > 0) return 'success';
        return null;
    };

    lastValidation() {
        const length = this.state.last.length;
        if (length > 50) return 'error';
        else if (length > 0) return 'success';
        return null;
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
    }

    render() {
        return(
            <form>
                <Row>
                    <Col xs={12} md={6}>
                    <FormGroup controlId={'formFirst'} validationState={this.firstValidation()}>
                        <ControlLabel>First Name:</ControlLabel>
                        <FormControl 
                            type='text'
                            placeholder='John'
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
                            placeholder='Doe'
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
                                placeholder='WhoAmI'
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
                                placeholder='Password'
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
                                placeholder='email@example.com'
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
                                placeholder='Irvine'
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
                                <option value='AL'>AL</option>
                                <option value='AK'>AK</option>
                                <option value='AR'>AR</option>
                                <option value='AZ'>AZ</option>
                                <option value='CA'>CA</option>
                                <option value='CO'>CO</option>
                                <option value='CT'>CT</option>
                                <option value='DC'>DC</option>
                                <option value='DE'>DE</option>
                                <option value='FL'>FL</option>
                                <option value='GA'>GA</option>
                                <option value='HI'>HI</option>
                                <option value='IA'>IA</option>
                                <option value='ID'>ID</option>
                                <option value='IL'>IL</option>
                                <option value='IN'>IN</option>
                                <option value='KS'>KS</option>
                                <option value='KY'>KY</option>
                                <option value='LA'>LA</option>
                                <option value='MA'>MA</option>
                                <option value='MD'>MD</option>
                                <option value='ME'>ME</option>
                                <option value='MI'>MI</option>
                                <option value='MN'>MN</option>
                                <option value='MO'>MO</option>
                                <option value='MS'>MS</option>
                                <option value='MT'>MT</option>
                                <option value='NC'>NC</option>
                                <option value='NE'>NE</option>
                                <option value='NH'>NH</option>
                                <option value='NJ'>NJ</option>
                                <option value='NM'>NM</option>
                                <option value='NV'>NV</option>
                                <option value='NY'>NY</option>
                                <option value='ND'>ND</option>
                                <option value='OH'>OH</option>
                                <option value='OK'>OK</option>
                                <option value='OR'>OR</option>
                                <option value='PA'>PA</option>
                                <option value='RI'>RI</option>
                                <option value='SC'>SC</option>
                                <option value='SD'>SD</option>
                                <option value='TN'>TN</option>
                                <option value='TX'>TX</option>
                                <option value='UT'>UT</option>
                                <option value='VT'>VT</option>
                                <option value='VA'>VA</option>
                                <option value='WA'>WA</option>
                                <option value='WI'>WI</option>
                                <option value='WV'>WV</option>
                                <option value='WY'>WY</option>
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
                                placeholder='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
                                value={this.state.image}
                                name='image'
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
            </form>
        )
    }
}

export default Register;