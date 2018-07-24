import React from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import "./ProfileCard.css";


const ProfileCard =  props => (
    <Grid className="profileCard_card">
        <Row className="profileCard_content">
            <Col className="profileCard_location" sm={4} xs={12}>
                <div>
                    <p>{props.userName}</p>
                    <p>{props.location}</p>
                </div>
            </Col>
            <Col className="profileCard_picture" sm={4} xs={12}>
                <img className="pic" src={props.img}></img>
            </Col>
            <Col className="profileCard_social" sm={4} xs={12}>
                <div>
                    <p>Email me: </p>
                    <p>{props.email}</p>
                </div>
            </Col>
        </Row>
    </Grid>
);



export default ProfileCard;