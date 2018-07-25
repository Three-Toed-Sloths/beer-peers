import React from "react";
import {Grid, Col, Row} from 'react-bootstrap';
import "./SecondaryNav.css";

const SecondaryNav = props => {

    let current = `/profile/${props.iden}/`;
return (
    <Grid className="secondaryNav">
        <Row className="secondaryNavRow">
            <Col className="secondaryCols" sm={3} xs={12}><a href={current}><p className="secondaryColText">Overview</p></a></Col>
            <Col className="secondaryCols" sm={3} xs={12}><a href={current + "following"}><p className="secondaryColText">Following</p></a></Col>
            <Col className="secondaryCols" sm={3} xs={12}><a href={current + "followers"}><p className="secondaryColText">Followers</p></a></Col>
            <Col className="secondaryCols" sm={3} xs={12}><a href={current + "likes"}><p className="secondaryColText">Likes</p></a></Col>
            <Col className="secondaryCols" sm={3} xs={12}><a href={current + "recipes"}><p className="secondaryColText">Recipes</p></a></Col>
        </Row>
    </Grid>
)
}

export default SecondaryNav;


