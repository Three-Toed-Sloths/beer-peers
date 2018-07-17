import React from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

const ProfileCard = () => (
    <Grid>
        <Row>
            <Col sm={5}>
                <h1>Picture</h1>
            </Col>
            <Col sm={3}>
                <h1>Location</h1>
            </Col>
            <Col sm={4}>
                <Row>
                    <Col sm={12}>Social Med 1</Col>
                </Row>
                <Row>
                    <Col sm={12}>Social Med 2</Col>
                </Row>
            </Col>
        </Row>
    </Grid>
);

export default ProfileCard;