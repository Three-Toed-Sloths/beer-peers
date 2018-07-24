import React, { Component } from "react";
import "./AboutBanner.css"
import { Jumbotron, Button, Image, Col } from 'react-bootstrap/lib';
import { Container, Row } from "../Grid"


class AboutBanner extends React.Component {

    render() {
        return (
            <Jumbotron xs={12} md={8}>
                <Container>
                    <Row>
                        <h1>Connect with other brewers.</h1>
                    </Row>
                    <Row>
                        <Image xs={6} src='https://images.unsplash.com/photo-1515303900226-036e8b860207?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83b7b7ecf6d99a4b2742f825fe0d2cf4&auto=format&fit=crop&w=600&q=60' alt='glass of beer' rounded responsive />
                        <ul>
                            <li><h3>Learn how to brew from others</h3></li>
                            <li><h3>Share your recipes and get feedback</h3></li>
                            <li><h3>Connect with similar minded people</h3></li>
                            <li><h3>Save your own recipes and collect your favorites all in one place</h3></li>
                        </ul>
                        <p>
                            <Button className="primary">Sign up</Button>
                        </p>
                    </Row>
                </Container>
            </Jumbotron>
        );
    };
}

export default AboutBanner;