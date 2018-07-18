import React from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import "./SecondaryNav.css";

const SecondaryNav = () => (
<Grid className="secondaryNav">
    <Row className="secondaryNavRow">
        <Col className="secondaryCols" sm={3}><h1 className="secondaryColText">Overview</h1></Col>
        <Col className="secondaryCols" sm={3}><h1 className="secondaryColText">Following</h1></Col>
        <Col className="secondaryCols" sm={3}><h1 className="secondaryColText">Likes</h1></Col>
        <Col className="secondaryCols" sm={3}><h1 className="secondaryColText">Recipes</h1></Col>
    </Row>
</Grid>
);

export default SecondaryNav;

