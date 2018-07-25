import React, { Component } from "react";
import { Button, Col, Row } from 'react-bootstrap/lib';
import './AddRecipeButton.css';

const AddRecipeButton = () => (
    <Row>
        <Col xs={0} md={4} />
        <Col xs={12} md={4}>
            <Button id='AddRecipeButton' block href='/recipes/new'>
                Add a Recipe to Your Profile
            </Button>
        </Col>
    </Row>
)

export default AddRecipeButton;