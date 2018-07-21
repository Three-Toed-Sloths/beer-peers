import React from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import "./ProfileCard.css";


const ProfileCard =  props => (
    <Grid className="profileCard_card">
        <Row className="profileCard_content">
            <Col className="profileCard_picture" sm={5} xs={12}>
                <img className="pic" src={props.img}></img>
            </Col>
            <Col className="profileCard_location" sm={3} xs={12}>
                <h1>Name</h1>
                <h2>{props.userName}</h2>
                <h1>Location</h1>
                <h2>{props.location}</h2>
            </Col>
            <Col className="profileCard_social" sm={4} xs={12}>
                <Row className="profileCard_socialRows">
                    <Col sm={12}><h1>{props.email}</h1></Col>
                </Row>
                <Row>
                    <Col sm={12}><h1>Social Med 2</h1></Col>
                </Row>
            </Col>
        </Row>
    </Grid>
);



export default ProfileCard;