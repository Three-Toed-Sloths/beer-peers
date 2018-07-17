import React from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import ProfileCard from "../../components/ProfileCard";


//MATERIAL UI
const Profile = () => (
    <Grid>
        <Row>
            <Col sm={2}>
                <ProfileCard></ProfileCard>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>Secondary Nav</Col>
        </Row>
        <Row>
            <Col sm={6}>Recipe Cards</Col>
            <Col sm={6}>Recipe Cards</Col>
            <Col sm={6}>Recipe Cards</Col>
            <Col sm={6}>Recipe Cards</Col>
        </Row>
        <Row>
            <Col sm={12}>Recent Activity</Col>
        </Row>
    </Grid>
);

export default Profile;