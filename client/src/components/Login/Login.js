import React, { Component } from "react";
import "./Login.css"
import { Form, Col, FormGroup, Button, FormControl, Well } from 'react-bootstrap/lib';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import classNames from 'classnames';


const propTypes = {
    horizontal: PropTypes.bool,
    inline: PropTypes.bool,
    componentClass: elementType
};

const defaultProps = {
    horizontal: false,
    inline: false,
    componentClass: 'form'
};

class Login extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    };



    handleChange(e) {
        this.setState({ value: e.target.value });
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
            <Well className='col-lg-4 col-lg-offset-4'>
                <Form horizontal>
                    <h2 className='text-center'>Please Sign In <br/> --or-- <br/> Create an Account</h2 >
                    <FormGroup controlId="formHorizontalEmail">
                        <div className='border rounded'>
                            <Col>
                                <FormControl type="username" placeholder="Username"/>
                            </Col>
                            <Col>
                                <FormControl type="password" placeholder="Password"/>
                            </Col>
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Col>
                            <Button type="submit" bsStyle="primary">Log in</Button>
                            <Button type="create">Create Account</Button>
                        </Col>
                    </FormGroup>

                </Form>
            </Well>
        );
    };
};

export default Login;