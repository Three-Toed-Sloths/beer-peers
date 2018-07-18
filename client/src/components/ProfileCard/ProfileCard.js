import React from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import "./ProfileCard.css";

const ProfileCard = () => (
    <Grid className="profileCard_card">
        <Row className="profileCard_content">
            <Col className="profileCard_picture" sm={5}>
                <h1>Picture</h1>
            </Col>
            <Col className="profileCard_location" sm={3}>
                <h1>Location</h1>
            </Col>
            <Col className="profileCard_social" sm={4}>
                <Row className="profileCard_socialRows">
                    <Col sm={12}><h1>Social Med 1</h1></Col>
                </Row>
                <Row>
                    <Col sm={12}><h1>Social Med 2</h1></Col>
                </Row>
            </Col>
        </Row>
    </Grid>
);

export default ProfileCard;