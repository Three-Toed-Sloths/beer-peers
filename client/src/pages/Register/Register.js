import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Panel, Row, Col } from 'react-bootstrap';
import API from '../../utils/userAPI';
import Wrapper from '../../components/Wrapper';
import SuccesCard from '../../components/SuccesCard';
import Check from '../../utils/loginAPI';
import './Register.css';

const STATES = [ 'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];

class Register extends Component {
    state = {
        first: '',
        last: '',
        username: '',
        usernameMessage: '',
        password: '',
        email: '',
        emailMessage: '',
        phone: '',
        city: '',
        state: '',
        stateMessage: '',
        image: 'http://www.brattleborofoodcoop.coop/wp-content/uploads/2017/07/cropped-BFC-Sprig-Favicon-450x450.png',
        isRegistered: false
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
        Check.checkUsername(
            this.state.username
        ).then(res => {
            if (res.data.username === this.state.username || this.state.username === '') {
                this.usernameDuplicate();
            }
            // if (!res.data.username) {
            //     this.usernameReset();
            // }
            if (res.data.contact.email === this.state.email || this.state.email === '') {
                this.emailDuplicate();
            }
            // if (!res.data.contact.email) {
            //     this.emailReset();
            // }
            if (this.state.state === '') {
                this.stateSelect();
            }
            if (this.state.state !== '') {
                this.stateReset();
            }
        }).catch(err => {
            // this.usernameReset();
            // this.emailReset();
            this.postUser();
            console.log(err);
            return err;
        });
    };
    
    // =======================
    // || Handle Duplicates ||
    // =======================

    usernameDuplicate = () => {
        this.setState({
            usernameMessage: 'Please enter a unique username'
        });
    };

    emailDuplicate = () => {
        this.setState({
            emailMessage: 'Please eneter a unique email'
        });
    };

    stateSelect = () => {
        this.setState({
            stateMessage: 'Please select a state'
        });
    };

    // ===================
    // || Handle Resets ||
    // ===================

    usernameReset = () => {
        this.setState({
            usernameMessage: ''
        });
    };

    emailReset = () => {
        this.setState({
            emailMessage: ''
        });
    };

    stateReset = () => {
        this.setState({
            stateMessage: ''
        });
    };

    // ======================
    // || Handle Post User ||
    // ======================

    postUser = () => {
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
            this.setState({isRegistered: true})
        }).catch (err => {
            console.log(err);
        });
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
        // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // removed 3 characters to eliminate compiled with warnings error - validation seems to still work. above is the original.
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.state.email)) return 'success';
    };

    phoneValidation() {
        if (/\d{3}-\d{3}-\d{4}/.test(this.state.phone)) return 'success';
    };

    render() {
        return(
            <div className='registerBackground'>
                {this.state.isRegistered ? (<SuccesCard/>
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
                                        </FormGroup>
                                        <HelpBlock className='registerError'>{this.state.usernameMessage}</HelpBlock>
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
                                        </FormGroup>
                                        <HelpBlock className='registerError'>{this.state.emailMessage}</HelpBlock>
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
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={8} md={6}>
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
                                    <Col xs={12} sm={4} md={3}>
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
                                        <HelpBlock className='registerError'>{this.state.stateMessage}</HelpBlock>
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
                                                // value={this.state.image}
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