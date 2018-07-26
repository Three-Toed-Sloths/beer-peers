import React, { Component } from "react";
import { Button, Col, Row } from 'react-bootstrap/lib';
import './AddRecipeButton.css';

const AddRecipeButton = () => (
    <Row>
        <Col xs={2} md={4} />
        <Col xs={8} md={4}>
            <Button id='AddRecipeButton' block href='/recipes/new' bsSize='large'>
                Add a Recipe to Your Profile
            </Button>
        </Col>
    </Row>
)

export default AddRecipeButton;